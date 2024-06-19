import React from 'react';
import './projects.css'; 

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div class="capy">
        <div class="capy-pic">
            <a href="https://pri-r.github.io/Catch-the-Capy-Game/" target="_blank"> <img src="capy.png"/> </a>
        </div>
        <p>
          One of the previous projects that I have worked on is 'Catch-the-Capy' game. It was my first step into game development. 
          After working <br></br> on it for 4hrs straight, I sadly realised that the game will not reach the halls of fame for being cute and earn me millions.
        </p>
        <p>
          But a cute game did come out of my sad realisation. You can try it out by clicking on the image.
        </p> 
      </div>
      <div class="website">
          <div class="web-pic">
              <a href="https://pri-r.github.io/technical-challange-devsoc-24t1-yay/" target="_blank"> <img src="web.png"/> </a>
          </div>
        <p>
          My first attempt at making a website was for a technical challange presented by Devsoc, where I learned all about HTML, CSS and Javascript<br></br> to build a website 
          based on the notion of time, I created a few functions to enable the backround to change colour as you scroll further down,<br></br> which was an incredible feat as for me a first year. 
        </p>
        <p>
          I also made it Cinderalla themed. Always running out to time.
        </p> 
      </div>
      <div class="Boo">
          <div class="web-pic">
              <a href=""> <img src="boo.png"/> </a>
          </div>
        <p>
          This project is still under construction, called BooDo. It is your productive day planner that takes inspiration from the app Todoist, 
          and includes <br></br> my own creative elements to compete against your friends/teammates and gain points from completing tasks. 
        </p>
      </div>
    </div>
  );
}

export default Projects;