import React from 'react';
import ReactJS from '../../assets/reactjs.png';
import Javascript from '../../assets/Javascript2.png';
import Bootstrap from '../../assets/bootstrap.png';
import Sass from '../../assets/sass.png';
import CSS from '../../assets/css.png';
import HTML from '../../assets/HTML2.png';
import PHP from '../../assets/PHP2.png';
import Node from '../../assets/node.png';
import MicrosoftSQL from '../../assets/microsoftSQL.png';
import MySQL from '../../assets/mySQL.png';
import Xampp from '../../assets/Xampp.png';
import Figma from '../../assets/Figma.png';
import Photoshop from '../../assets/photoshop.png';
import Illustrator from '../../assets/illustrator.png';
import {Slide, Zoom} from 'react-reveal';
import 'boxicons';
import './Services.css';

const Services = () => {
    return(
        <>
           <div className="container-fluid __services-container" id="services">
            <Slide left>
               <div className="__services-title-heading">
                    <h2>Services</h2>
                </div>
            </Slide>
                <div className="row">
                    <div className="col">
                      <Zoom right>
                        <div className="__services-wrapper">
                             <div className="__services-content">
                                <div className="__services-img">
                                    <box-icon name='code-alt' color="#6475B7" size="lg"></box-icon>
                                </div>
                                <div className="__services-title">
                                    <h2>Front End Development</h2>
                                    <p>Experienced in building website using Javascript, HTML5, CSS3, Javascript, Bootstrap and ReactJS libraries.</p>
                                </div>
                                <div className="__services-icon">
                                     <ul>
                                        <li><img src={ReactJS} alt="React JS"/></li>
                                        <li><img src={Javascript} alt="Javascript"/></li>
                                        <li><img src={Bootstrap} alt="Bootstrap"/></li>
                                        <li><img src={Sass} alt="Sass"/></li>
                                        <li><img src={CSS} alt="CSS"/></li>
                                        <li><img src={HTML} alt="HTML"/></li>
                                     </ul>
                                </div>
                             </div>
                        </div>
                       </Zoom>
                    </div>


                    <div className="col">
                     <Zoom left>
                        <div className="__services-wrapper">
                             <div className="__services-content">
                                <div className="__services-img">
                                    <box-icon name='data' type='solid'color="#6475B7" size="lg" ></box-icon>
                                </div>
                                <div className="__services-title">
                                    <h2>Back End Development</h2>
                                    <p>Create a PHP-based website backend, implement APIs, and utilized server side handle the database with NodeJS using Microsoft SQL and mySQL Xampp server is used.</p>
                                </div>
                                <div className="__services-icon">
                                     <ul>
                                        <li><img src={PHP} alt="PHP"/></li>
                                        <li><img src={Node} alt="Node"/></li>
                                        <li><img src={MicrosoftSQL} alt="Microsoft SQL"/></li>
                                        <li><img src={MySQL} alt="My SQL"/></li>
                                        <li><img src={Xampp} alt="Xampp"/></li>
                                     </ul>
                                </div>
                             </div>
                        </div>
                      </Zoom>
                    </div>


                    <div className="col">
                      <Zoom left>
                        <div className="__services-wrapper">
                             <div className="__services-content">
                                <div className="__services-img">
                                    <box-icon name='pen' type='solid' color="#6475B7" size="lg"></box-icon>
                                </div>
                                <div className="__services-title">
                                    <h2>UI / UX Designer</h2>
                                    <p>Build beautiful web designs using Figma, Adobe Illustrator, Adobe Photoshop with responsive interfaces, prototyping, interactive visual design, and cohesive user experience.</p>
                                </div>
                                <div className="__services-icon">
                                     <ul>
                                        <li><img src={Figma} alt="Figma"/></li>
                                        <li><img src={Photoshop} alt="Photoshop"/></li>
                                        <li><img src={Illustrator} alt="Illustrator"/></li>
                                     </ul>
                                </div>
                             </div>
                        </div>
                      </Zoom>
                    </div>
                </div>
                <div className="__services-button">
                    <button><a href="https://github.com/francejules22" target="__blank">Visit Github</a></button>
                </div>
           </div>
        </>
    )
}
export default Services