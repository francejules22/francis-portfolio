import React from 'react';
import './Experience.css';
import {Slide, Fade} from 'react-reveal';

const Experience = () => {
    return(
        <>
           <div className="container-fluid __experience-container" id="experience">
              <Slide left>
                 <div className="__experience-title">
                    <h2>Education <br/>Experience</h2>
                 </div>
              </Slide>
              <Fade bottom>
                <div className="row">
                    <div className="col">
                        <div className="__experience-wrapper __wrapper1">
                            <div className="__experience-content __content1">
                                <h2>Google IT Support Professional Certificate</h2>
                                <h3>Coursera | 2022-2023</h3>
                                <p>I  attended training in Google IT Support through Coursera as one of the recipients of the Google Career Certificate Scholarship Program, which is sponsored by the Department of Information and Communication Technology DICT Region VI. My training included hands-on and practical-based assessments  in areas such as networking, operating systems, system administration, security, and customer service.</p>
                            </div>
                        </div>

                        <div className="__experience-wrapper __wrapper1">
                            <div className="__experience-content __content1">
                                <h2>Bachelor of Science in Computer Science</h2>
                                <h3>ISAT University | 2019-2023</h3>
                                <p>I studied Computer Science for my Bachelor of Science degree at Iloilo Science and Technology University Main Campus at Burgos St. La Paz, Iloilo City.</p>
                            </div>
                        </div>
                    </div>

                
                    <div className="__line"></div>
                
 
                    <div className="col">
                        <div className="__experience-wrapper __wrapper2">
                            <div className="__experience-content __content2">
                                <h2>Web Development Training Program</h2>
                                <h3>Coursera | 2021-2022</h3>
                                <p>I participated in numerous front-end development and back-end development training sessions offered by Bayan Academy Technical Vocational Program and Coursera. HTML5, CSS3, Javascript, Jquery, JSON, PHP, MySQL, and WordPress are the skills I've acquired. Also, I gained knowledge of how to use Microsoft SQL Server and ReactJS libraries for user interface and database management.</p>
                            </div>
                        </div>


                        <div className="__experience-wrapper __wrapper2">
                            <div className="__experience-content __content2">

                                <h2>Full Stack Developer & UI Designer</h2>
                                <h3>GECO Asia Pte Ltd | Feb-Apr 2023</h3>
                                <p>I participated  in my onsite internship program with GECO Asia Pte Ltd in Iloilo City. I was assigned in the digital marketing as UI / UX Designer and Full Stack Developer. It was my responsibility to design the company handbook website, digital posters, realtime savings calculator and human resource email support system. I used HTML5, CSS3, Javascript, ReactJS, JQuery, Ajax, Bootstrap, PHP, MySQL, and Adobe Illustrator in addition to Canva. I have obtained expertise in web development and cutting-edge software like Adobe Illustrator and Adobe Effects</p>
                            </div>
                        </div>
                    </div>
                </div>
              </Fade>
           </div>
        </>
    )
}

export default Experience