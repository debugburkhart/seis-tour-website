import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HowItWorks from './components/How-it-works';
import Stats from './components/Stats';
import Rules from './components/Rules';
import PrevStats from './components/Previous-stats';
import AllTimeStats from './components/All-time-stats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/how-it-works" element={<HowItWorks/>} />
        <Route path="/stats" element={<Stats/>} />      
        <Route path="/rules" element={<Rules/>} />  
        <Route path="/previous-seasons-stats" element={<PrevStats/>} />    
        <Route path="/all-time-stats" element={<AllTimeStats/>} />    

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
