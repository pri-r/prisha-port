import React from 'react';
import './header.css';

import { WavyLink } from 'react-wavy-transitions';


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><WavyLink to="/" color= "#121212">About Me</WavyLink></li>
          <li><WavyLink to="/projects" color= "#121212" >Projects</WavyLink></li>
          <li><WavyLink to="/contactme" color= "#121212">Contact Me</WavyLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;