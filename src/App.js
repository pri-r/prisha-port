import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Projects from './projects.js'
import Contact from './contact.js'

import { WavyContainer } from 'react-wavy-transitions';

const AppContent = () => {
  const location = useLocation();
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    if (location.pathname === '/prisha-port/projects'|| location.pathname === '/prisha-port/contactme') {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <WavyContainer />
        <Routes>
          <Route path="/prisha-port/" element={<Main />} />
          <Route path="/prisha-port/projects" element={<Projects />} />
          <Route path="/prisha-port/contactme" element={<Contact />} />
        </Routes>
        {showImage && (
          <div className="image-container">
            <img src="./prisha-port/public/prisha_pic.png" alt="Prisha_pic" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#854747",
  "#88494a",
  "#8f5051",
  "#9b5a5c",
  "#a96769",
  "#b97579",
  "#c9848a",
  "#e8a1a9",
  "#f4acb6",
  "#eba7ba",
  "#fab2bf",
  "#fcb3be",
  "#ffb6c1",
  "#e7a4b8",
  "#ffb8c1",
  "#ffb8c1",
  "#ffb8c1",
  "#ffb8c1",
  "#ffb8c1",
  "#ffb8c1",
  "#ffb8c1",
  "#ffb8c1",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


export default App;

