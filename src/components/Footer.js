import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'; 
import SocialButtons from "./SocialButtons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
             <SocialButtons/>
            </div>
            <p>Copyright 2022. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
