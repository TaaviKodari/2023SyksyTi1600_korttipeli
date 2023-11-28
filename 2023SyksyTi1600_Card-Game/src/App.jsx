import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Koti';
import CardGame from './components/CardGame/CardGame';
import Breakout from './components/Breakout/Breakout';

export default function App(){
  return(
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cardGame">CardGame</Link>
              </li>
              <li>
                <Link to="/breakout">Breakout</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cardGame" element={<CardGame />}/>
          <Route path="/breakout" element={<Breakout />}/>
        </Routes>
      </Router>
    </>
  );
}