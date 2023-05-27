import React from 'react';
import './Portfolio.css';
import DiabetesApp from '../../assets/DiabetesImg.png';
import HREmailSupport from '../../assets/HRSupport.png';
import RealtimeCalculator from '../../assets/realtimecalculator.png';
import SnackApp from '../../assets/SnackApp.png';
import CifarApp from '../../assets/CifarApp.png';
import ArchiImg from '../../assets/architecture.png';
import FruitImg from '../../assets/fruit.png';
import TravelImg from '../../assets/travel.png';
import TodoImg from '../../assets/todoImg.png';
import Atom from '../../assets/atom.png';
import FoodImg from '../../assets/FoodImg.png';
import FitnessImg from '../../assets/FitnessImg.png';
import {Slide, Fade} from 'react-reveal';



//Using Array Map
const data_images = [

    {
        id: 1,
        image: DiabetesApp,
        title: 'Diabetest App',
        description: 'DiabeTest is a free app that helps you detect the Type 2 Diabetes Mellitus Disease using Machine Learning Algorithm and provides with better results.This was also my Thesis Proposal requirements for graduation. Also our Thesis Project was awarded as a Best in Research Paper (Technology Category) at the ISAT-U Research Colloquium 2023 held at ISATU Miagao Campus on May 16, 2023.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        iconFour: 'ri-bootstrap-fill',
        iconFive: 'ri-reactjs-line',
        github: 'https://github.com/francejules22/DiabetestApp',
        demo: 'https://diabetestapp.netlify.app/'
    },
    {
        id: 2,
        image: HREmailSupport,
        title: 'HR Email Support System',
        description: 'Human Resource Email Support System is my Internship Project at GECO Asia Pte Ltd. This project intended to help HR to send multiple files in multiple and single email. Also it uses CRUD functionality to add, update, edit and delete data. It has features to archive all data and view history of the email status either send or fail.I used PHP, AJAX, JQuery and PHPmailer.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        iconFive: 'ri-bootstrap-fill',
        iconSix: 'ri-database-2-fill',
        github: 'https://github.com/francejules22/EmailSupport_HR',
        demo: 'https://github.com/francejules22/EmailSupport_HR'
    },
    {
        id: 3,
        image: RealtimeCalculator,
        title: 'Realtime Savings Calculator',
        description: 'Real Time Savings Calculator is my second project in my Internship at GECO Asia Pte Ltd.This project is intended to calculate your potential savings and allow others to calculate their potential savings when using GECO Asia outsourcing service.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        iconFour: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/geco-realtime-savings',
        demo: 'https://francejules22.github.io/gecocalc.github.io/'
    },
    {
        id: 4,
        image: SnackApp,
        title: 'Snack App',
        description: 'This is the project in our web information system which a website for food business to order the goods and product through online. Technology used was HTML5, CSS3 and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/SnackHack',
        demo: 'https://francejules22.github.io/SnackHackApp/'
    },
    {
        id: 5,
        image: CifarApp,
        title: 'CIFAR10 Image Classification',
        description: 'CIFAR10 Image Classification that can predict the image using Convolutional Neural Networks and give accurate results. A Convolutional Neural Network is a kind of network architecture for deep learning algorithms used for image recognition.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/ImageClassificationUsingCIFAR10',
        demo: 'http://france22.pythonanywhere.com/'
    },
    {
        id: 6,
        image: ArchiImg,
        title: 'Architecture',
        description: 'A website for architecture and interior design .Technology used was HTML5, CSS3 and some Javascript ',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/Architecture-Website',
        demo: 'https://francejules22.github.io/architecture/'
    },
    {
        id: 7,
        image: FruitImg,
        title: 'Fruit',
        description: 'This is simple web design project using different fruits with unique design.Technology used was HTML5, CSS3, and Javascript ',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/Fruit-Scroll-Animation',
        demo: 'https://francejules22.github.io/Fruit-Scroll-Animation/'
    },
    {
        id: 8, 
        image: TravelImg,
        title: 'Travel',
        description: 'A website which the user can book beautiful tourist destination and tour around the world.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/Travel-Website',
        demo: 'https://francejules22.github.io/Travel-Website/'
    },
    {
        id: 9, 
        image: TodoImg,
        title: 'Todo List App',
        description: 'To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-reactjs-line',
        iconFour: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/todolist',
        demo: 'https://francejules22.github.io/todolist/'
    },
    {
        id: 10, 
        image: Atom,
        title: 'Atom Marketing Agency',
        description: 'ATOM Marketing Consultancy believes that a business succeeds not because it is long established and using only HTML, CSS and Javascript',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/atomweb.github.io',
        demo: 'https://francejules22.github.io/atomweb.github.io/'
    },
    {
        id: 11, 
        image: FoodImg,
        title: 'Food',
        description: 'This is a food website which the user can order online and shows different delicacies.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/Food-Website',
        demo: 'https://francejules22.github.io/Food-Website/'
    },
    {
        id: 12, 
        image: FitnessImg,
        title: 'Fitness',
        description: 'This is a fitness website which the user can view available gym online.Technology used was HTML5, CSS3, and Javascript.',
        iconOne: 'ri-html5-fill',
        iconTwo: 'ri-css3-fill',
        iconThree: 'ri-javascript-fill',
        github: 'https://github.com/francejules22/Fitness-Website',
        demo: 'https://francejules22.github.io/Fitness-Website/'
    }
]


const Portfolio = () => {
    return(
        <>
         <div className="container-fluid __portfolio-container" id="portfolio">
         <Slide left>
             <div className="__portfolio-title">
                 <h2>Portfolio</h2>
             </div>
         </Slide>  

         <Fade top>   
            <div className="__portfolio-wrapper">
              <div className="__portfolio-content-box">
                {
                    data_images.map(({id, image, title, description,iconOne,iconTwo, iconThree, iconFour, iconFive, iconSix, github, demo}) => {
                        return(
                            <article key={id} className="__portfolio-item">
                                <div className="__portfolio-item-image"> 
                                   <img src={image} alt={title} className="__portfolio-image"/>
                                </div>
                                   <h3 className="__portfolio-head">{title}</h3>
                                   <p className="__portfolio-para">{description}</p>

                                <div className="__portfolio-icons">
                                    <span><i class={iconOne}></i></span>
                                    <span><i class={iconTwo}></i></span>
                                    <span><i class={iconThree}></i></span>
                                    <span><i class={iconFour}></i></span>
                                    <span><i class={iconFive}></i></span>
                                    <span><i class={iconSix}></i></span>
                                </div>

                                <div className="__portfolio-btn">
                                   <button className="_btn"><a href={github}  target="_blank" rel="noreferrer">Github</a></button>
                                   <button className="__btn"><a href={demo} target='_blank' rel="noreferrer">Demo</a></button>
                                </div>
                           </article>
                        )
                    })
                 }
               </div>
            </div>
          </Fade>   
         </div>
        </>
    )
}
export default Portfolio