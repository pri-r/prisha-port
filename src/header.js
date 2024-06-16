import React from 'react';
import './header.css';

import { WavyLink } from 'react-wavy-transitions';


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><WavyLink to="/" color= "#3A3B3C">About Me</WavyLink></li>
          <li><WavyLink to="/projects" color= "#3A3B3C" >Projects</WavyLink></li>
          <li><WavyLink to="/contactme" color= "#3A3B3C">Contact Me</WavyLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;