import React, {useEffect, useState} from 'react';
import Markdown from "markdown-to-jsx";
import prismjs from "prismjs";
import {Clipboard, ClipboardCheck} from "lucide-react";
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-go.min.js';
import '../styles/article.css';
import '../styles/prism-gruvbox-light.css';
import promptText from "../assets/Data/prompt.js";
import Loader from "./Loader.jsx";

const PreWithCopyButton = ({children, ...props}) => {
    const [copied, setCopied] = useState(false);

    // Trova il blocco <code> figlio e recupera il testo
    const codeElement = React.Children.toArray(children).find(child =>
        React.isValidElement(child) && child.type === 'code'
    );

    const code = typeof codeElement?.props?.children === 'string'
        ? codeElement.props.children
        : Array.isArray(codeElement?.props?.children)
            ? codeElement.props.children.join("")
            : "";

    const handleCopy = () => {
        navigator.clipboard.writeText(code.trim()).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <pre {...props} style={{position: 'relative'}}>
            <button
                className="copy-button"
                onClick={handleCopy}
                style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    zIndex: 10,
                    color: "#666"
                }}
                aria-label="Copy to clipboard"
            >
                {copied ? <ClipboardCheck size={18}/> : <Clipboard size={18}/>}
            </button>
            {children}
        </pre>
    );
};


const Article = ({message}) => {
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const api_key = import.meta.env.VITE_GEMINI_API;
    const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${encodeURIComponent(api_key)}`;
    document.title = message;
    useEffect(() => {
        if (message !== "") {
            setIsLoading(true);

            const promptAI = promptText + message;
            // console.log(promptAI);
            async function fetchData(y) {
                try {
                    const response = await fetch(ENDPOINT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            contents: [{parts: [{text: promptAI.trim()}]}],
                        }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        console.error(`API error: ${response.status}`, errorData);
                        return;
                    }

                    const {candidates} = await response.json();
                    const text = candidates?.[0]?.content?.parts?.[0]?.text || "";
                    setOutput(text);
                } catch (error) {
                    console.error("API call failed:", error.name, error.message);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
        }
    }, [message, ENDPOINT]);

    useEffect(() => {
        if (output) {
            prismjs.highlightAll();
        }
    }, [output]);


    return (
        <div
            className="prose markdown-text flex flex-col items-center justify-center sm:w-[60vw] md:w-[650px] w-[100vw] ">

        {isLoading ? (
                <Loader />
            ) : (
                <Markdown
                    options={{
                        overrides: {
                            pre: {
                                component: PreWithCopyButton
                            }
                        }
                    }}
                >
                    {output}
                </Markdown>
            )}
        </div>
    );

};

export default Article;
