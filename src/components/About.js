import nivPorfile from '../assets/img/niv.jpg';
import { Container, Row, Col } from "react-bootstrap"

import './About.css';


export const About = () => {
  return (

    <section className="about" id="about">
      <Container>
        <div className="about-bx">
          <Row className="align-items-center">
          <Col xs={12} md={10} xl={7}>
          <h2>About</h2>
          </Col>
            <Col xs={12} md={6} xl={7}>
              <p>I am an experienced Software Developer with a background in both 
                an IDF technology unit and a small startup. Throughout my career, 
                I have worked with a diverse range of technologies, specializing
                 in backend development. Currently, I am serving full-time in the reserve military.
                 </p>
                 <p>
                  
                  My experience has honed my skills in navigating complex challenges, leading teams under pressure, 
                  and presenting confidently to large groups. I am known for my ability to adapt quickly to new technologies 
                  and environments, as well as my strong interpersonal skills. I am actively seeking opportunities to apply my 
                  expertise as a Backend Developer or DevOps </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={nivPorfile} alt="Header Img" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>

  );
}