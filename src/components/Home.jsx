import React, { useState } from 'react';
import './Home.css'
import Naveen from '../components/Naveen.jpg'
import Inter from '../components/12marksheet.png'

function App() {

  return (
    <>
      <main>
        <img className="Naveen" id="Naveen" src={Naveen} alt="" />
        <h2>Naveen Kr Gupta</h2>
        <h4>BCA</h4>
        <section className='section' id="home">
          <h2><span className='hading'>Hello !</span> Welcome to My Portfolio</h2>
          <p>I'm a passionate <span className="link">@MERN Stack developer</span> skilled in building dynamic, responsive web applications using MongoDB, Express, React, and Node.js. Let’s create something amazing!</p>
        </section>

        <section className='section' id="projects">
          <h2>My <span className='hading'>Projects</span></h2>
          <p>Full-stack web app built with modern MERN technologies and design.</p>
          <ul className="proj">
            <li >
           <a className="gith" href="https://naveen-gupta99.github.io/My-Portfolio/"><span className='link'>Projects.com</span></a>
            </li>
            <li >

              {/* second */}


            </li>
            <li id="three">

              {/* third */}

            </li>
          </ul>

        </section>
        <section className='section'>
          <h2>Github <span className='hading'>Link</span> </h2>
          <p>My GitHub showcases clean, well-documented code, real-world MERN stack projects, and consistent contributions that reflect my growth, dedication, and passion for development.

          </p>
          <a className="gith" href="https://github.com/Naveen-Gupta99"><span className='link'>Github.com</span></a>
        </section>
        <section id="achievements">

          <ul className="section">
            <h2>My <span className='hading'>Achievements</span></h2>
            <p>Successfully built and deployed multiple full-stack applications, contributed to open-source projects, and continuously enhanced skills through certifications, hackathons, and real-world client experiences.</p>
            <span id="inter"><img className="inter" src={Inter} alt="12marksheet" /></span>
            <h5>12th Marksheet</h5>

          </ul>
        </section>

      </main>

    </>
  );
}

export default App;
