import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


const App = () => {
  return(
    <>
       <Header />
       <Home />
       <About />
       <Services />
       <Skills />
       <Experience />
       <Certificates />
       <Portfolio />
       <Contact />   
    </>
  )
}
export default App