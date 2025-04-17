import React from 'react';
import Markdown from 'react-markdown';
import '../styles/article.css';

const Article = ({ content }) => {
    return (
        <div className="prose markdown-text max-w-[40%] p-4 rounded-md   w-full">
            <Markdown>{content}</Markdown>
        </div>
    );
};

export default Article;
