import { useState } from 'react';
import '../App.css';
import Article from './Article.jsx';
import PromptAI from './PromptAI.jsx';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function ArticlePersonal() {
    const [message, setMessage] = useState("Tell me something interesting");

    return (
        <div className="min-h-screen sm:px-0 px-4 flex flex-col items-center gap-6">
            {/*<Navbar />*/}
            <PromptAI onSend={setMessage} />
            <Article message={message} />
            <Footer />
        </div>
    );
}

export default ArticlePersonal;
