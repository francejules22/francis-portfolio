import React, { useState } from 'react';
import  Facebook  from '../../assets/editFB.png';
import  LinkedIn  from '../../assets/editLinkedin.png';
import  Github  from '../../assets/GithubEdit.png';
import  Behance  from '../../assets/editBehance.png';
import {Slide, Fade} from 'react-reveal';
import emailjs from '@emailjs/browser';
import './Contact.css';


const Result = () => {
   return(
    <p className="__result">
        Your message has been successfully sent. I'll get back to you soon.
    </p>
   )
}


const Contact = () => {
    const [result, showResult] = useState(false);
    //Adding Contact Function using Email.js template
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cdnhe8d', 'template_h4xtwus', e.target, 'Tis3H7_em1Kw-TOhk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         e.target.reset();
         showResult(true);
      };


    return(
        <>
           <div className="container-fluid __contact-container" id="contact">
            <Slide right>
               <div className="__contact-title">
                 <h2>Contact</h2>
               </div>
            </Slide>
              <div className="row">
                <div className="col">
                    <div className="__contact-content">
                        <h2>Francis <span>Jules</span></h2>
                        <h3>Full Stack <span>Developer</span></h3> 
                    </div>
                    <div className="__contact-socials">
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href="https://www.facebook.com/francisjules.celeste/" target="__blank"><img src={Facebook} alt="Facebook Social"/></a></li>
                            <li><a href="https://www.linkedin.com/in/francis-jules-espartero-b81687226/?originalSubdomain=ph" target="__blank"><img src={LinkedIn} alt="LinkedIn Social"/></a></li>
                            <li><a href="https://github.com/francejules22" target="__blank"><img src={Github} alt="Github Social"/></a></li>
                            <li><a href="https://www.behance.net/gallery/167043083/Personal-Portfolio" target="__blank"><img src={Behance} alt="Behance Social"/></a></li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                  <Fade left>
                    <div className="__contact-wrapper">
                        <div className="__contact-details"> 
                            <h2>Get In Touch</h2>
                        </div>
                        <div className="__contact-card">
                     {/*Adding Contact Functionality */}
                           <form className="__contact-form"  onSubmit={sendEmail}>
                              <div className="group">
                                  <input placeholder=" " type="text" name="fullName" required="" />
                                  <label for="name">Full Name</label>
                              </div>
                              <div className="group"> 
                                  <input placeholder=" " type="email" id="email" name="email" required="" />
                                  <label for="email">Email</label>
                              </div>
                              <div className="group"> 
                                  <input placeholder=" " type="contact" id="contact" name="phoneNumber" required="" />
                                  <label for="number">Contact</label>
                              </div>
                              <div className="group">
                                <textarea placeholder="" id="message" name="message" rows="5" required=""></textarea>
                                <label for="message">Message</label>
                             </div>
                              <button type="submit">Submit</button>
                              <div className="__result-content">{ result ? <Result/> : null }</div>
                          </form>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <footer className="__contact-footer">
                  <p>&copy;France 2023. All Right Reserved.</p>
              </footer>
           </div>
        </>
    )
}
export default Contact