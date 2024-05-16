import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/styles.css'
import logo from '../assets/misc/SeisTourLogo-removebg-preview.png';

import sandSharksLogo from '../assets/team-logos/Sand Sharks logo.png';
import roughRidersLogo from '../assets/team-logos/Rough Riders Logo.png';
import wedgeWizardsLogo from '../assets/team-logos/Wedge Wizards Logo.png';
import greensideGoatsLogo from '../assets/team-logos/Greenside Goats logo.png';
import fairwayFiendsLogo from '../assets/team-logos/Fairway Fiends Logo.png';

const Home = () => {
  return (
    <div className="russo-one-regular">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Seis Tour" width="100" className="logo" />
          <div className="title-container">
            <h1 className="title">Seis Tour Golf</h1>
            <nav className="navbar">
              <ul className="nav-links">
                <li><Link to="/stats" className="nav-link">Stats</Link></li>
                <li><Link to="/rules" className="nav-link">Rules</Link></li>
                <li><Link to="/how-it-works" className="nav-link">How It Works</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section id="teams">
          <h2>Team Standings</h2>
          <table>
            <tbody>
              <tr>
                <td><img src={sandSharksLogo} alt="Sand Sharks" width="50" /></td>
                <td>Sand Sharks</td>
                <td>0</td>
              </tr>
              <tr>
                <td><img src={roughRidersLogo} alt="Rough Riders" width="50" /></td>
                <td>Rough Riders</td>
                <td>0</td>
              </tr>
              <tr>
                <td><img src={wedgeWizardsLogo} alt="Wedge Wizards" width="50" /></td>
                <td>Wedge Wizards</td>
                <td>0</td>
              </tr>
              <tr>
                <td><img src={greensideGoatsLogo} alt="Greenside Goats" width="50" /></td>
                <td>Greenside Goats</td>
                <td>0</td>
              </tr>
              <tr>
                <td><img src={fairwayFiendsLogo} alt="Fairway Fiends" width="50" /></td>
                <td>Fairway Fiends</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="results">
          <h2>Past Season Points Leaders</h2>
          <p>2023 - Corbin VandeSampel</p>
          <br />
          <br />
          <h2>Past Event Winners</h2>
          <h3>2023</h3>
          <p>Founder's Invitational (Major) - Corbin VandeSampel</p>
          <br />
          <p>Seis Scramble (Major) - Corbin VandeSampel & Henry Burkhart</p>
          <br />
          <p>Cornfield Cup (Major) - Team Iowa</p>
          <br />
          <p>Tremont Tees Classic (Regular) - Willie Terry</p>
          <br />
          <p>Willie's Weekly Series Week 1 (Regular) - Willie Terry</p>
          <br />
          <p>Willie's Weekly Series Week 2 (Regular) - TJ Arzola</p>
          <br />
          <p>Willie's Weekly Series Week 3 (Regular) - Simeon Campbell</p>
          <br />
          <p>Willie's Weekly Series Week 4 (Regular) - Corbin VandeSampel</p>
        </section>
      </main>
      <footer>
        <p>Updated March 20, 2024</p>
        <p>&copy; 2024 Seis Tour Golf</p>
      </footer>
    </div>
  );
};

export default Home;
