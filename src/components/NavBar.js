import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/rimon.png';
import { BoxArrowInUpRight } from "react-bootstrap-icons";
import nivCV from '../assets/cv/niv.pdf';
import {
    BrowserRouter as Router, 
} from "react-router-dom";
import SocialButtons from './SocialButtons'; // Import the SocialButtons component
import './NavBar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const openPdf = () => {
        window.open(nivCV, '_blank')
        const link = document.createElement('a');
        link.href = nivCV; 
        link.target = '_blank';
        link.download = 'Niv Rimon Software Developer CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>       
                        </Nav>
                        <span className="navbar-text">
                           <SocialButtons inNavbar={true} />
                            <button
                                className="vvd"
                                onMouseOver={() => setIsHovered(true)}
                                onMouseOut={() => setIsHovered(false)}
                                onClick={openPdf}>
                                <span>{isHovered ? <BoxArrowInUpRight /> : 'CV 📜'}</span>
                            </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
