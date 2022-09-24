import './App.css';
import Home from './pages/Home.js';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/articles-list" element={<ArticlesList/>}/>
          <Route path="/article" element={<Article/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
