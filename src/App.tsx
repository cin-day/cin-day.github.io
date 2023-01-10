import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About"
import NavBar from './components/NavBar'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
