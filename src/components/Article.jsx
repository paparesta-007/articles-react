import React, { useEffect, useState } from 'react';
import Markdown from "markdown-to-jsx";
import prismjs from "prismjs"; // Assicurati che PrismJS venga importato correttamente
import 'prismjs/themes/prism.css'; // Importa il tema di PrismJS
import 'prismjs/components/prism-javascript.min.js'; // Aggiungi i linguaggi che desideri supportare
import '../styles/article.css';
import '../styles/prism-gruvbox-light.css'; // Esempio di un tema alternativo
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-go.min.js';


import Loader from "./Loader.jsx";

const Article = ({ message }) => {
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const api_key = import.meta.env.VITE_GEMINI_API;
    const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${encodeURIComponent(api_key)}`;

    useEffect(() => {
        if (message !== "") {
            setIsLoading(true);

            const promptAI = `
      You are a professional article writer specialized in creating detailed, well-structured, and engaging content for blog readers.

      Write a **long and informative article** based on the following topic:
      "${message}"

      The article must follow this structure:
      A table of contents at the top of the article inside a toggle.
      1. **A compelling and concise introduction** that captures the reader's attention.
      2. **At least 3 sections**, each with a clear and meaningful markdown heading (## or ###).
      3. Use **bullet points** and **numbered lists** when explaining steps, facts, or examples.
      4. Insert **quotes** (using \`>\`) to emphasize key messages, expert opinions, or philosophical thoughts.
      5. Use **bold**, *italic*, and \`inline code\` where appropriate to highlight important terms or concepts.
      6. When appropriate (only for technical topics), include a **code block** (use markdown \`\`\` syntax) to demonstrate technical ideas or examples.
      7. Provide a **brief conclusion or summary** that reinforces the main takeaways.
      8. Use also callout, tables, boxes or if needed. And images from https://placehold.co/{widthsize}
      9. Optionally, end with a short **callout box** formatted using markdown (like a note or warning style if needed).

      Use proper **Markdown syntax** throughout the article.
      The tone should be clear, friendly, and informative.
      Absolutely **avoid emojis**.

      The content should be creative, helpful, and enjoyable to read.
      AVOID using phrases like "Here it is" or "Sure..." THE FIRST LINE MUST BE AN HEADER WITH TITLE OF THE ARTICLE.
      `;

            async function fetchData() {
                try {
                    const response = await fetch(ENDPOINT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: promptAI.trim() }] }],
                        }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json().catch(() => ({}));
                        console.error(`API error: ${response.status}`, errorData);
                        return;
                    }

                    const { candidates } = await response.json();
                    const text = candidates?.[0]?.content?.parts?.[0]?.text || "";
                    setOutput(text);
                } catch (error) {
                    console.error("API call failed:", error.name, error.message);
                } finally {
                    setIsLoading(false);
                    console.log(message)
                }
            }

            fetchData();
        }
    }, [message, ENDPOINT]);

    // Esegui il highlighting del codice ogni volta che il contenuto viene aggiornato
    useEffect(() => {
        if (output) {
            prismjs.highlightAll(); // Applicare PrismJS per evidenziare il codice
        }
    }, [output]);

    if (isLoading) return <Loader />;

    return (
        <div className="prose markdown-text sm:max-w-[90%] md:max-w-[800px] sm:p-4 p-0 rounded-md w-full">
            <Markdown>
                {output}
            </Markdown>
        </div>
    );
};

export default Article;
