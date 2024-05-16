import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/styles.css'
import logo from '../assets/misc/SeisTourLogo-removebg-preview.png';

import rules from '../assets/rules/2024SeisTourRules.png'

const Rules = () => {
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
                <li><Link to="/how-it-works" className="nav-link">How It Works</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section id="rules">
            <h2>Rules</h2>
            <img src={rules} width="350" />
        </section>
      </main>
      <footer>
        <p>Updated March 13, 2024</p>
        <p>&copy; 2024 Seis Tour Golf</p>
      </footer>
    </div>
  );
};

export default Rules;
