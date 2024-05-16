import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/styles.css'
import logo from '../assets/misc/SeisTourLogo-removebg-preview.png';

const Stats = () => {
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
                <li><Link to="/how-it-works" className="nav-link">How It Works</Link></li>
                <li><Link to="/rules" className="nav-link">Rules</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section id="stats" class="statslinks">
            <h2>Current Season Stats</h2>
            <h5> 
                <nav> 
                    <ul>
                        <li><Link to="/previous-seasons-stats" className="nav-link">Previous Seasons</Link></li>
                        <li><Link to="/all-time-stats" className="nav-link">All Time</Link></li>
                    </ul>
                </nav>
            </h5>
            <p>Current Season Leaderboard found on 18Birdies</p>
            <p>Current Season Wins, Birdies or Better, and other stats will become available when the season begins</p>
        </section>
    </main>
    <footer>
        <p>Updated March 13, 2024</p>
        <p>&copy; 2024 Seis Tour Golf</p>
    </footer>
    </div>
  );
};

export default Stats;
