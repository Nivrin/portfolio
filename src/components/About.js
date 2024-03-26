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
              <p>I'm experienced Software Developer with a background in an IDF technology unit and a small startup,
                currently working full-time at reserve military.
                I'm highly motivated team player, quick learner, and socially adept.
                Excels under pressure, guiding and presenting confidently to large groups.
                currently, I'm actively seeking a new role as Backend Developer or DevOps. </p>
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