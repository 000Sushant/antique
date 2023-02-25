import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Item from './pages/item';
import Hxample from './pages/secpage';
import Footer from './components/Footer';
import Item2 from './pages/items/item2';

function App() {
  return (
    // <Navbar />
    <BrowserRouter>
      <nav>
        <Navbar/>
        {/* <Footer/> */}
      </nav>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path='/collection' element={<Hxample/>} />
          <Route exact path='/item' element={<Item/>} />
          <Route exact path='/item2' element={<Item2/>} />
      </Routes>
      <footer>
        <Footer/>
      </footer>
    </BrowserRouter>
    // <Footer/>
  );
}

export default App;
