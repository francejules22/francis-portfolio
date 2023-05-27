import React from 'react';
import JS from '../../assets/JS-skill.png';
import HTML from '../../assets/HTML-skill.png';
import CSS from '../../assets/CSS-skill.png';
import Bootstrap from '../../assets/Bootstrap-skill.png';
import ReactJS from '../../assets/React-skill.png';
import PHP from '../../assets/PHP-skill.png';
import Node from '../../assets/Node-skill.png';
import MSQL from '../../assets/MSQL-skill.png';
import MySQL from '../../assets/mySQL-skill.png';
import Xampp from '../../assets/Xampp-skill.png';
import Figma from '../../assets/Figma-skill.png';
import Canva from '../../assets/Canva-skill.png';
import Illustrator from '../../assets/Illustrator-skill.png';
import Photoshop from '../../assets/Photoshop-skill.png';
import OS from '../../assets/OS-skill.png';
import Network from '../../assets/Network-skill.png';
import Security from '../../assets/Security-skill.png';
import Git from '../../assets/Git-skill.png';
import Github from '../../assets/Github-skill.png';
import NPM from '../../assets/NPM-skill.png';
import {Slide, Bounce} from 'react-reveal';


import './Skills.css';

const Skills = () => {
    return(
        <>
           <div className="container-fluid __skills-container" id="skills">
            <Slide right>
               <div className="__skills-title">
                   <h2>Skills</h2>
               </div>
            </Slide>
            <Bounce right>
               <div className="row d-block">
                  <div className="col">
                      <div className="__skills-wrapper">
                         <div className="__skills-content">
                            <h2>Front End Development</h2>
                         </div>
                         <div className="__skills-icon">
                            <ul>
                                <li><img src={JS} alt="Javascript"/></li>
                                <li><img src={HTML} alt="HTML"/></li>
                                <li><img src={CSS} alt="CSS"/></li>
                                <li><img src={Bootstrap} alt="Bootstrap"/></li>
                                <li><img src={ReactJS} alt="ReactJS"/></li>
                            </ul>
                         </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="__skills-wrapper">
                         <div className="__skills-content">
                            <h2>Back End Development</h2>
                         </div>
                         <div className="__skills-icon">
                            <ul>
                                <li><img src={PHP} alt="PHP"/></li>
                                <li><img src={Node} alt="Node"/></li>
                                <li><img src={MSQL} alt="MSQL"/></li>
                                <li><img src={MySQL} alt="MySQL"/></li>
                                <li><img src={Xampp} alt="Xampp"/></li>
                            </ul>
                         </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="__skills-wrapper">
                         <div className="__skills-content">
                            <h2>UI / UX Design</h2>
                         </div>
                         <div className="__skills-icon">
                            <ul>
                                <li><img src={Figma} alt="Figma"/></li>
                                <li><img src={Canva} alt="Canva"/></li>
                                <li><img src={Illustrator} alt="Illustrator"/></li>
                                <li><img src={Photoshop} alt="Photoshop"/></li>
                            </ul>
                         </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="__skills-wrapper">
                         <div className="__skills-content">
                            <h2>IT Support</h2>
                         </div>
                         <div className="__skills-icon">
                            <ul>
                                <li><img src={OS} alt="OS"/></li>
                                <li><img src={Network} alt="Network"/></li>
                                <li><img src={Security} alt="Security"/></li>
                            </ul>
                         </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="__skills-wrapper">
                         <div className="__skills-content">
                            <h2>Other Skills</h2>
                         </div>
                         <div className="__skills-icon">
                            <ul>
                                <li><img src={Git} alt="Git"/></li>
                                <li><img src={Github} alt="Github"/></li>
                                <li><img src={NPM} alt="NPM"/></li>
                            </ul>
                         </div>
                      </div>
                  </div>
               </div>
              </Bounce>
           </div>
        </>
    )
}
export default Skills