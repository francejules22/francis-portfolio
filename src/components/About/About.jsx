import React from 'react';
import AboutImg from '../../assets/about-pic.png';
import AwardsImg from '../../assets/awards.png';
import ClientsImg from '../../assets/clients.png';
import ProjectsImg from '../../assets/projects.png';
import ExperienceImg from '../../assets/experience.png';
import {Fade, Slide} from 'react-reveal';
import './About.css';
 

const About = () => {
    return(
      <>
        <div className="container-fluid __about-container" id="about">
            <Slide right>
              <div className="__para-about-title">
                 <h2>About</h2>
              </div>
            </Slide>
            <div className="row">
              <div className="col">
                <Fade left>
                   <div className="__about-img-wrapper">
                       <img src={AboutImg} alt="About" />
                   </div>
                </Fade>
              </div>
              <div className="col">
                  <div className="__para-about-content">
                      <p className="__about-1">
                          I am a graduate of Bachelor of Science in Computer Science at Iloilo Science and Technology University ISAT-U main campus  and a passionate self-taught web developer.I have strong foundation in HTML5, CSS3, Javascript, PHP, JQuery, AJAX, SASS, Bootstrap and basic knowledge in ReactJS libraries for building userinterfaces.
                      </p>
                      <p className="__about-2">
                           I am also skilled in developing and maintaining web applications including designing, integrating APIs, implementing database structures, testing and debugging code. 
                      </p>
                      <p className="__about-3">
                           Additionally, I am experience with version control systems, such as Git,  Github and comfortable working with Windows operating systems.I am thrill and excited 
                           to bring my Web Development skills to new project and help bring them to successful completion.
                      </p>
                  </div>

                <Fade right>
                  <div className="__about-info-wrapper d-flex">
                      <div className="__about-info">
                           <div className="__about-info-content">
                              <img src={AwardsImg} alt="Awards" />
                              <h2><span>4+</span> Awards</h2>
                           </div>
                      </div>

                      <div className="__about-info">
                           <div className="__about-info-content">
                              <img src={ProjectsImg} alt="Projects" />
                              <h2><span>5+</span> Projects</h2>
                           </div>
                      </div>

                      <div className="__about-info">
                           <div className="__about-info-content">
                              <img src={ClientsImg} alt="Clients" />
                              <h2><span>3+</span> Clients</h2>
                           </div>
                      </div>

                      <div className="__about-info">
                           <div className="__about-info-content">
                              <img src={ExperienceImg} alt="Experience" />
                              <h2><span>2</span> years of experience</h2>
                           </div>
                      </div>
                  </div>
                </Fade>
                  <div className="__about-button">
                      <button><a href="https://drive.google.com/file/d/1cz4hUU5bvLfJSSRm2rti42QrYokck4ns/view?usp=sharing" target="__blank">Download Resume</a></button>
                  </div>
              </div>
            </div>
        </div>
      </>  
    )
}
export default About