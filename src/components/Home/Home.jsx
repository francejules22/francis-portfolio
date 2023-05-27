import React from 'react';
import HomeImg from '../../assets/home-pic.png';
import Facebook from '../../assets/facebook-social.png';
import LinkedIn from '../../assets/linkedin-social.png';
import Github from '../../assets/github-social.png';
import Instagram from '../../assets/instagram-social.png';
import Behance from '../../assets/behance.png';
import {Fade , Slide, Bounce} from 'react-reveal';
import './Home.css';


const Home = () => {
    return(
         <div className="container-fluid __home-container" id="home">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <div className="__home-content">
                        <Slide left>
                           <p className="__home-para-title">Hello</p>
                        </Slide>
                        <p className="__home-para">
                            <span className="__para-1">just call me,</span> 
                            <br/> 
                            <span className="__para-2">Francis <Bounce top duration={900} delay={500}><span className="__para-border">Jules</span></Bounce></span> 
                            <br /> 
                            <span className="__para-3">An aspiring full-stack developer</span>
                       </p>
                    </div>
                    <div className="__home-button">
                        <button><a href="#about">Get to know more</a></button>
                    </div>
                </div>

                <div className="col-6">
                    <Fade right>
                      <div className="__home-img">
                         <img src={HomeImg} alt="Home Background"/>
                      </div>
                    </Fade>
                </div>

                <div className="col-2">
                    <div className="__home-social">
                        <div className="__home-social-links">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/francisjules.celeste" target="__blank"><img src={Facebook} alt="Facebook" /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/francis-jules-espartero-b81687226/?originalSubdomain=ph" target="__blank"><img src={LinkedIn} alt="LinkedIn" /></a>
                                </li>
                                <li>
                                    <a href="https://github.com/francejules22" target="__blank"><img src={Github}  alt="Github" /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/frnce_juls/" target="__blank"><img src={Instagram} alt="Instagram" /></a>
                                </li>
                                <li>
                                    <a href="https://www.behance.net/gallery/167043083/Personal-Portfolio" target="__blank"><img src={Behance} alt="Behance" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home