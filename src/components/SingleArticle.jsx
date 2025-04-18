import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { allTitles } from '../assets/Data/topic.js'; // Importa l'oggetto allTitles

const SingleArticle = () => {
    const { topic, title } = useParams();
    const [articles, setArticles] = useState([]); // Stato per memorizzare gli articoli

    useEffect(() => {
        const decodedTopic = decodeURIComponent(topic); // Decodifica il topic
        // Ottieni gli articoli per il topic selezionato, se esistono
        const topicArticles = allTitles[decodedTopic] || []; // Default a un array vuoto se non ci sono articoli per il topic
        setArticles(topicArticles);
    }, [topic]); // La dipendenza è solo topic, così la useEffect si esegue solo quando il topic cambia

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{decodeURIComponent(title)}</h1>
            <p className="mt-2 text-gray-700">
                Articolo nel topic: <strong>{decodeURIComponent(topic)}</strong>
            </p>

            <div>
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <div key={index} className="mt-4">
                            <h2 className="text-2xl font-semibold">{article}</h2>
                            {/* Qui puoi aggiungere il contenuto dell'articolo, se presente */}
                            <p className="text-gray-700">Contenuto dell'articolo per {article}...</p>
                        </div>
                    ))
                ) : (
                    <p>Non ci sono articoli per questo topic.</p>
                )}
            </div>
        </div>
    );
};

export default SingleArticle;
