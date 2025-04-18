import React, { useEffect, useState } from 'react';
import Markdown from "markdown-to-jsx";
import '../styles/article.css';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import '../styles/prism-gruvbox-light.css';

// Prism languages
import 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-cmake';
import 'prismjs/components/prism-docker';

import Loader from "./Loader.jsx";

const Article = ({ message }) => {
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const api_key = import.meta.env.VITE_GEMINI_API;
    const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(api_key)}`;

    useEffect(() => {
        setIsLoading(true);

        const promptAI = `
You are a professional article writer specialized in creating detailed, well-structured, and engaging content for blog readers.

Write a **long and informative article** based on the following topic:
"${message}"

The article must follow this structure:

1. **A compelling and concise introduction** that captures the reader's attention.
2. **At least 3 sections**, each with a clear and meaningful markdown heading (## or ###).
3. Use **bullet points** and **numbered lists** when explaining steps, facts, or examples.
4. Insert **quotes** (using \`>\`) to emphasize key messages, expert opinions, or philosophical thoughts.
5. Use **bold**, *italic*, and \`inline code\` where appropriate to highlight important terms or concepts.
6. When appropriate (only for technical topics), include a **code block** (use markdown \`\`\` syntax) to demonstrate technical ideas or examples.
7. Provide a **brief conclusion or summary** that reinforces the main takeaways.
8. Use also callout, tables, boxes or tips if needed. And images from https://placehold.co/{widthsize}
9. Optionally, end with a short **callout box** or **tip** formatted using markdown (like a note or warning style if needed).

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
            }
        }

        fetchData();
    }, [message]);

    if (isLoading) return <Loader />;

    return (
        <div className="prose markdown-text sm:max-w-[90%] md:max-w-[800px] sm:p-4 p-0 rounded-md w-full">
            <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypePrism]}
            >
                {output}
            </Markdown>
        </div>
    );
};

export default Article;
