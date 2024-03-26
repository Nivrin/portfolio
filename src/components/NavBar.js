import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/rimon.png';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import facebookIcon from '../assets/img/nav-icon2.svg';
import { BoxArrowInUpRight } from "react-bootstrap-icons";
import nivCV from '../assets/cv/niv.pdf';
import phoneIcon from '../assets/img/phone-icon.png';
import mailIcon from '../assets/img/email-svgrepo-com.svg';

import {
    BrowserRouter as Router, 
} from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showCopiedNotification, setShowCopiedNotification] = useState(false);


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

    const openPdf= () => {
        window.open(nivCV, '_blank');
    };

    const handleConnectButtonClick = () => {
        window.location.href = 'mailto:nivrimn@gmail.com';
    };

    
    const handlePhoneClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = "tel:+972586490590"; 
        } else {
            navigator.clipboard.writeText("+972586490590");
            setShowCopiedNotification(true);
            setTimeout(() => {
                setShowCopiedNotification(false);
            }, 2000); // Hide notification after 2 seconds
        }
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
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/niv-rimon/"><img src={linkedinIcon} alt="linkedin-icon" /></a>
                                <a href="https://www.facebook.com/niv.rimon"><img src={facebookIcon} alt="facebook-icon" /></a>
                                <a href="#email" onClick={handleConnectButtonClick}> <img src={mailIcon} alt="mail-icon" /></a>
                                <a href="#phone" onClick={handlePhoneClick}><img src={phoneIcon} alt="call-me" /></a>
                            {showCopiedNotification && <div className="copied-notification">Phone number copied!</div>}
                            </div>
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
    )
}
