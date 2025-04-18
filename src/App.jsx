import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ArticlePersonal from './components/ArticlePersonal'; // pagina degli articoli personali (modifica se necessario)
import TopicArticles from './components/TopicArticles'; // singolo articolo
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import BrowseTopics from "./components/browse-topics.jsx";
import SingleArticle from "./components/SingleArticle.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/articlePersonal" element={<ArticlePersonal/>}/>
                <Route path="/topics/:topic/" element={<TopicArticles/>}/>
                <Route path="/topics/" element={<BrowseTopics/>}/>
                <Route path="/topics/:topic/:article" element={<SingleArticle />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
};

export default App;
