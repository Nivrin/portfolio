import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ConnectButton } from '../components/ConnectButton';

import './Banner.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [loopNum, isDeleting, text, period]); 

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => {
            clearInterval(ticker);
        };
    }, [delta, tick]);

    const toRotate = ["Software Developer", "Backend Developer"];

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <h1>{`Hi I'm Niv Rimon🎗️ -`}<span className="wrap"> {text} </span></h1>
                        <p>I'm a software engineer. I have profound interest in software development, devops, AI, and everything in between.</p>
                        <ConnectButton />
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
