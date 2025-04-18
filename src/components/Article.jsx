import React from 'react';
// import Markdown from 'react-markdown';
import Markdown from "markdown-to-jsx";
import '../styles/article.css';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import '../styles/prism-gruvbox-light.css'; // You can change this theme based on your preferences

// Import necessary Prism languages
import 'prismjs';
import 'prismjs/components/prism-python'; // Python language support
import 'prismjs/components/prism-c'; // C language support
import 'prismjs/components/prism-csharp'; // C# language support
import 'prismjs/components/prism-javascript'; // JavaScript language support
import 'prismjs/components/prism-java'; // Java language support (optional)
import 'prismjs/components/prism-ruby'; // Ruby language support (optional)
import 'prismjs/components/prism-php'; // PHP language support (optional)
import 'prismjs/components/prism-sql'; // SQL language support (optional)
import 'prismjs/components/prism-swift'; // Swift language support (optional)
import 'prismjs/components/prism-kotlin'; // Kotlin language support (optional)
import 'prismjs/components/prism-typescript'; // TypeScript language support (optional)
import 'prismjs/components/prism-go'; // Go language support (optional)
import 'prismjs/components/prism-rust'; // Rust language support (optional)
import 'prismjs/components/prism-cpp'; // C++ language support (optional)
import 'prismjs/components/prism-cmake'; // CMake language support (optional)
import 'prismjs/components/prism-docker'; // Dockerfile language support (optional)

// The component for rendering Markdown content
const Article = ({ content }) => {
    return (
        <div className="prose markdown-text sm:max-w-[90%] md:max-w-[800px] sm:p-4 p-0 rounded-md w-full">
            <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypePrism]}
            >
                {content}
            </Markdown>
        </div>
    );
};

export default Article;
