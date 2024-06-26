import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/puja-kakani041102/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/puja1102" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/puj.aa_11?igsh=aTk1bDExM2Rra3l0" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <p>Built by Puja Kakani</p>
            </div>
        </Row>
      </Container>
    </footer>
  )
}