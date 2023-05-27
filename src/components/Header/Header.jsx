import React, {useRef, useEffect} from 'react';
import { Container } from 'reactstrap';
// import { Link } from 'react-scroll';
import 'remixicon/fonts/remixicon.css';
import './Header.css';

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Services',
        url: '#services'
    },
    {
        display: 'Skills',
        url: '#skills'
    },
    {
        display: 'Experience',
        url: '#experience'
    },
    {
        display: 'Certificates',
        url: '#certificates'
    },
    {
        display: 'Portfolio',
        url: '#portfolio'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]


const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header-shrink')
            } else {
                headerRef.current.classList.remove('header-shrink')
            }
        })
        
        return () => {
            window.removeEventListener('scroll')
        }
    },[])

    const menuToggle = () => menuRef.current.classList.toggle('menu__active');
   

    return <header className="header" ref={headerRef}>
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
               <div className="__logo-box">
                   <a className="__logo-link" href="#home">France</a>
               </div>

                <div className="__nav-menu" ref={menuRef} onClick={menuToggle}>
                    <ul className="__nav-list">
                        {
                            navLinks.map((item, index) =>  
                            <li smooth className="__nav-item" key={index}>
                                <a className="__nav-link" href={item.url}>{item.display}</a>
                            </li>)
                        }
                    </ul>
                </div>

                <div className="__nav-right d-flex align-items-center gap-4">
                    <button className="__button-content btn">Hire Me</button>
                    <span className="__mobile-menu">
                        <i class="ri-menu-fill" onClick={menuToggle}></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
}
export default Header;

