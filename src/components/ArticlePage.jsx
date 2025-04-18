import { useParams, Link } from 'react-router-dom';

const ArticlePage = () => {
    const { topic } = useParams();

    const articles = [
        { title: "Introduzione ai componenti", slug: "introduzione-ai-componenti" },
        { title: "Gestione dello stato", slug: "gestione-stato" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Topic: {topic}</h1>

            <ul className="list-disc list-inside">
                {articles.map((article, i) => (
                    <li key={i}>
                        <Link
                            to={`/article/${encodeURIComponent(topic)}/${encodeURIComponent(article.slug)}`}
                            className="text-blue-600 hover:underline"
                        >
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticlePage;
