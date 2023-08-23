import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {TbBrandReactNative} from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiRuby
} from "react-icons/di";
import {
  SiTypescript,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiCsharp
} from "react-icons/si";
import {
  GiBubbles
} from "react-icons/gi";
import {
  BiLogoFlutter,
  BiLogoVuejs,
  BiLogoAngular,
  BiLogoWordpress,
  BiLogoUnity
} from "react-icons/bi"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <SiTypescript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiBubbles />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
      </Col>
    </Row>
  );
}

export default Techstack;
