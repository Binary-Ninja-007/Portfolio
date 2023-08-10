import React from "react";
import Particle from "../Particle";
import { Container} from 'react-bootstrap'
import Typewriter from "typewriter-effect";
export default () => {
    return(
        <div style={{padding:"50px"}}>
            <Container style={{margin:"200px"}}>
            <Typewriter
             options={{
                     strings: [
                         "This page is in developing mode."],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
            />
            </Container>
            <Particle/>
        </div>
    )
}