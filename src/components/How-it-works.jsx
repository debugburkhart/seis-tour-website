import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/styles.css'

import logo from '../assets/misc/SeisTourLogo-removebg-preview.png';
import captain from '../assets/how-it-works/captain.png';
import seiscupplayoffs from '../assets/how-it-works/seiscupplayoffs.png';
import seisscramble from '../assets/how-it-works/seisscramble.png';
import team from '../assets/how-it-works/team.png';
import virtual from '../assets/how-it-works/virtual.png';
import scramblepoints from '../assets/how-it-works/scramblepoints.png';
import major from '../assets/how-it-works/major.png';
import draft from '../assets/how-it-works/draft.png';

const HowItWorks = () => {
  return (
    <div className="russo-one-regular">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Seis Tour" width="100" className="logo" />
          <div className="title-container">
            <h1 className="title">Seis Tour Golf</h1>
            <nav className="navbar">
              <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/stats" className="nav-link">Stats</Link></li>
                <li><Link to="/rules" className="nav-link">Rules</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section id="how-it-works">
            <h2>How it Works</h2>
            <img src={captain} width="350" />
            <img src={draft} width="350" />
            <img src={seiscupplayoffs} width="350" />
            <img src={seisscramble} width="350" />
            <img src={virtual} width="350" />
            <img src={major} width="350" />
            <img src={scramblepoints} width="350" />
            <img src={team} width="350" /> 
        </section>
        </main>
        <footer>
            <p>Updated March 20, 2024</p>
            <p>&copy; 2024 Seis Tour Golf</p>
        </footer>
    </div>
  );
};

export default HowItWorks;
