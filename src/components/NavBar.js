import { useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
//import { HashLink } from 'react-router-hash-link';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

 return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        <div class="logo fade-enter-done">
          <a href="#home" aria-label="home">
          <div class="logo-container">
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" width="60" height="60">
            <title>Logo</title>
            <g transform="translate(-8.000000, -2.000000)">
              <g transform="translate(11.000000, 5.000000)">
                <polygon id="Shape" stroke="#87cefa" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon>
                <text x="48%" y="60%" fill="#87cefa" font-family="sans-serif" font-size="42px" font-weight="bold" text-anchor="middle">P</text>
              </g>
            </g>
            </svg>
          </div>
          </a>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/puja-kakani041102/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/puja1102" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/puj.aa_11?igsh=aTk1bDExM2Rra3l0" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <a href="https://drive.google.com/file/d/17i6I7AgGOnk3wW5fxAdhL2e3A6i3A6Mf/view?usp=drive_link" target="_blank">
              <button className="vvd"><span>Resume</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 )  
}