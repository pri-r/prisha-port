import React from 'react';
import './main.css';

const Main = () => {
  return (
    <main className="main">
      <h1>Prisha Rao</h1>
      <p>A passionate computer science student at UNSW, who enjoys films, long walks and cooking.</p>
      <p><b>Fun fact:</b> You just accessed this website at <b>{new Date().toLocaleString()} </b>Sydney time 🇦🇺</p>
    </main>
  );
}

export default Main;