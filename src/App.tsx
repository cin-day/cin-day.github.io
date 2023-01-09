import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
  return (
    <>
    <div className="App">
      NavBar
    </div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
    <div>
      Footer
    </div>
    </>
  );
}

export default App;
