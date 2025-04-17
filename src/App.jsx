import {useEffect, useState} from 'react';
import './App.css';
import Article from './components/Article.jsx';
import PromptAI from './components/PromptAI.jsx';
import Loader from "./components/Loader.jsx";

function App() {
    const [message, setMessage] = useState("Tell me something interesting");
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const api_key = import.meta.env.VITE_GEMINI_API;
    const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(api_key)}`;

    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 secondi timeout

        async function fetchData() {
            setIsLoading(true)
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
8. Optionally, end with a short **callout box** or **tip** formatted using markdown (like a note or warning style if needed).

Use proper **Markdown syntax** throughout the article.
The tone should be clear, friendly, and informative.
Absolutely **avoid emojis**.

The content should be creative, helpful, and enjoyable to read.
Avoid writing "Here it is" or "Sure..." 
`;


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
                    signal: controller.signal
                });

                clearTimeout(timeoutId); // stoppa timeout

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error(`API error: ${response.status}`, errorData);
                    return;
                }

                const {candidates} = await response.json();
                const text = candidates?.[0]?.content?.parts?.[0]?.text || "";
                setIsLoading(false)
                setOutput(text);

            } catch (error) {
                console.error("API call failed:", error.name, error.message);
            }

        }

        fetchData();

        return () => {
            controller.abort(); // pulizia se cambia il prompt prima del completamento
            clearTimeout(timeoutId);
        };
    }, [message]);

    return (
        <div className="min-h-screen p-8  flex flex-col items-center gap-6">
            <PromptAI onSend={setMessage}/>
            {isLoading ? (
                <Loader/>
            ) :(
                <Article content={output}/>
            )}
        </div>
    );
}

export default App;
