import './App.css';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';

// import pages (componentes)
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

// 1 - config react router

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1 id='title'>React Router</h1>
      
      <BrowserRouter>
        <Navbar/>
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* Rota dinâmica */}
          <Route path='/products/:id' element={<Product/>}/>
          {/* Nested Routes */}
          <Route path='/products/:id/info' element={<Info/>}/>
          {/* Página de busca */}
          <Route path='/search' element={<Search/>}/>
          {/* No match route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
                
      </BrowserRouter>
    </div>
  );
}

export default App;
