import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import prismjs from "prismjs";
import Loader from "./Loader.jsx";

const TopicArticles = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const api_key = import.meta.env.VITE_GEMINI_API;
    const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(api_key)}`;

    document.title = `Articles for topic: ${decodeURIComponent(topic)}`;
    useEffect(() => {
        setIsLoading(true);

        async function fetchData() {
            const promptAI = `Generate 15 engaging and diverse article titles about the topic
             "${decodeURIComponent(topic)}" and its descriptions and tags. You can include general discussions, deep dives into subtopics,
              famous examples (like languages, artists, books, or tools), or specific case studies if applicable.
               The result must be a raw JSON array of titles. Do NOT include any formatting, markdown, explanation,
                or additional text—just return the JSON of {title:title, description:description, tags:[tags]}.`;

            try {
                const response = await fetch(ENDPOINT, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: promptAI.trim() }] }],
                        generationConfig: { // Add this for Temperature
                            temperature: 0.8,
                        }
                    }),
                });

                const { candidates } = await response.json();
                let text = candidates?.[0]?.content?.parts?.[0]?.text || "";

                // ✅ RIMUOVE eventuali ```json o ``` blocchi
                text = text.replace(/```json|```/g, "").trim();

                // ✅ PARSA il JSON ora valido
                const generatedTitles = JSON.parse(text);

                if (Array.isArray(generatedTitles)) {
                    setArticles(generatedTitles);
                } else {
                    console.error("Errore: la risposta non è un array");
                }
            } catch (error) {
                console.error("API call failed:", error.name, error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [topic, ENDPOINT]);

    useEffect(() => {
        prismjs.highlightAll();
    }, [articles]);

    return (
        <div className="p-6 w-full items-center flex flex-col">
            <p className="text-3xl text-gray-700 text-center">
                <strong>{decodeURIComponent(topic)}</strong>
            </p>

            <div className="flex flex-col w-full md:w-[60%] mt-6 items-center justify-center">
                {isLoading ? (
                    <Loader/>
                ) : articles.length > 0 ? (
                    articles.map((article, index) => (
                        <Link
                            state={{ topic: topic, article: article }}
                            to={`/topics/${encodeURIComponent(topic)}/${encodeURIComponent(article.title)}`}
                            key={index}
                            className="mt-4 p-4 border hover:shadow-lg rounded w-full flex flex-col md:flex-row items-start justify-between transition"
                        >
                            <div className="w-full md:w-[70%] flex flex-col">
                                <h2 className="text-2xl font-semibold">{article.title}</h2>
                                <p className="text-gray-700 text-lg">{article.description}</p>
                               <div className="flex flex-wrap">
                                   {
                                       article.tags?.map((tag, index) => (
                                           <span key={index} className="text-white text-shadow-md p-2 bg-green-700 rounded-full mr-2">
                                            {tag}
                                        </span>
                                       ))
                                   }
                               </div>
                            </div>
                            <img src={`https://placehold.co/200?text=${index + 1}`} alt="Placeholder" className="md:ml-4 object-cover rounded" />
                        </Link>
                    ))
                ) : (
                    <p>Nessun articolo generato per ora.</p>
                )}
            </div>
        </div>
    );
};

export default TopicArticles;
