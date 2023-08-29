import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import {BiLogoGmail} from "react-icons/bi";
import {
  ImSkype
} from "react-icons/im";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Binary Ninja</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Jack </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Binary-Ninja-007"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://web.skype.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ImSkype/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiLogoGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/edwinjackson"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
// https://t.me/edwinjackson
export default Footer;
