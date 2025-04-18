import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticlePersonal from './components/ArticlePersonal'; // pagina degli articoli personali (modifica se necessario)
import SingleArticle from './components/SingleArticle'; // singolo articolo
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articlePersonal" element={<ArticlePersonal />} />
                <Route path="/article/:topic/" element={<SingleArticle />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
