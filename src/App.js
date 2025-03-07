import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav  from './Nav.js';
import {BrowserRouter} from 'react-router-dom'
import { Gallery } from './Gallery.js';

const App = () => {
    return (
        <div className="App">

          <Gallery/>

          <footer className="footer-social">
          <p>
              Shane Gravestock 2018 &#x00a9;
            </p>
            <ul className="social">
                <li>
                  <a className="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shanegravestock/">
                    <span>Instagram - Shane Gravestock</span>
                  </a>
                </li>
                <li>
                  <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://twitter.com/ShaneGravestock">
                    <span>Twitter - Shane Gravestock</span>
                  </a>
                </li>
                <li>
                  <a className="twitter" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shanegravestock/">
                    <span>LinkedIn - Shane Gravestock</span>
                  </a>
                </li>
            </ul>
          </footer>
        </div>

    );
}

export default App;
