import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

const Nav = () => {
        return (
            <div>
                <div className="navigation">
                    <h1><Link to="/">Shane Gravestock</Link></h1>
                    <ul className="menu-items">
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/showreel">Showreel</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <ul className="social">
                        <li>
                            <a className="instagram" aria-label="instagram" name="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shanegravestock/">
                                <span>Instagram - Shane Gravestock</span>
                            </a>
                        </li>
                        <li>
                            <a className="linkedin" aria-label="linkedin" name="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shanegravestock/">
                                <span>LinkedIn - Shane Gravestock</span>
                            </a>
                            </li>
                        <li>
                            <a className="twitter" aria-label="twitter" name="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/ShaneGravestock">
                                <span>Twitter - Shane Gravestock</span>
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        );
}

export default Nav;