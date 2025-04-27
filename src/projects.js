import React from 'react';
import './projects.css'; 

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div class="capy">
        <div class="capy-pic">
            <a href="https://pri-r.github.io/Catch-the-Capy-Game/" target="_blank" rel="noreferrer"> <img src="./prisha-port/capy.png" alt="Capybara_screenshot"/> </a>
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
              <a href="https://pri-r.github.io/technical-challange-devsoc-24t1-yay/" target="_blank" rel="noreferrer"> <img src="./prisha-port/web.png" alt="web_screenshot"/> </a>
          </div>
        <p>
          My first attempt at making a website was for a technical challange presented by Devsoc, where I learned all about HTML, CSS and Javascript<br></br> to build a website 
          based on the notion of time, I created a few functions to enable the backround to change colour as you scroll further down,<br></br> which was an incredible learning experience for me. 
        </p>
        <p>
          I also made it Cinderalla themed. Always running out of time.
        </p> 
      </div>
      <div class="Boo">
          <div class="web-pic">
            <a href="https://www.loom.com/share/14eefccaed6a49fd805af0039fc97213?sid=8a6852cf-2b0e-49f5-9915-ba1fea762333" target="_blank" rel="noreferrer"> <img src="./prisha-port/smth-awesome.png" alt="Capybara_screenshot"/> </a>
          </div>
        <p>
          This is one of my favourite projects, in one of my subjects, we were allowed to take full creative freedom to demonstrate any security concept. </p><p>
          I decided to build a keylogger that emails the system information and keylogs, as well as takes screenshots. I also conducted a MITM attack <br></br>
          to override 2FA. You can have a look at it in my public github repo, or watch the video linked above for a quick demo.
        </p>
      </div>
      <div class="Boo1">
          <div class="web-pic">
            <img src="./prisha-port/boo.png" alt="BooDo_screenshot"/>
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