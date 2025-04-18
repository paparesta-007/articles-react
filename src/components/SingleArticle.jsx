import { useParams } from 'react-router-dom';
import { allTitles } from '../assets/Data/topic.js'; // Dove sono i tuoi articoli
import { useEffect, useState } from 'react';
import Article from "./Article.jsx";

const SingleArticle = () => {
    const { topic, article } = useParams();
    // Mi prendo il topic e l'articolo dall'url
    const [articleData, setArticleData] = useState(null);


    useEffect(() => {
        const decodedTopic = decodeURIComponent(topic); // serve a trovare l'articolo nel js
        const decodedArticle = decodeURIComponent(article); // serve a trovare l'articolo nel js
        // decodifico il topic
        setArticleData(decodedArticle);
    }, [topic, article]);

    if (!articleData) {
        return <div className="p-8 text-center text-xl">Articolo non trovato 😢</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <Article message={article} />
        </div>
    );
};

export default SingleArticle;
