import React from "react";
import Particle from '../Particle'
import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";
function Map () {
    return(
        <Container fluid className="current-page-section">
        <Typewriter
            option={{
                strings:["This page is in Developing mode!"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}/>
        
        <Particle/>
        </Container>
    )

}
export default Map;