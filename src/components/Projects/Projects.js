import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import callerdesk from "../../Assets//Projects/callerdesk.png"
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import medicalService from "../../Assets/Projects/medical service.png"
import Blockchain from "../../Assets/Projects/blockchain.png"
import houseofcoco from "../../Assets/Projects/house of coco.png"
import businessfriend from "../../Assets/Projects/businessfriend.png"
import WordPress from "../../Assets/Projects/wordpress.png"
import wordpresselementor from "../../Assets/Projects/wordpress(elementor).png"
import shopifysocks from "../../Assets/Projects/shopify(socks) .png"
import shopifyglasses from "../../Assets/Projects/shopify(glasses) .png"
import Casino from "../../Assets/Projects/casino.png"
import Fitness from "../../Assets/Projects/fitness.png"
import Game from "../../Assets/Projects/game.png"
import systemagency from "../../Assets/Projects/systemagency.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={callerdesk}
              isBlog={false}
              title="Callerdesk"
              description="CallerDesk is a revolutionary site that leverages the power of WebRTC technology to enable seamless audio and video communication between businesses and their customers. With its easy-to-use interface and advanced features, CallerDesk offers a hassle-free solution for online conferences, customer support, and sales calls. Experience crystal-clear and secure communications with CallerDesk's innovative WebRTC solution."
              demoLink="https://callerdesk.io"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalService}
              isBlog={false}
              title="Medical Service"
              description="I developed a medical service site, which provided a user-friendly interface for patients to schedule appointments, access their medical records, and communicate with healthcare professionals. The site integrated advanced security measures to protect sensitive patient information, ensuring confidentiality and compliance with privacy regulations. I received positive feedback from users, highlighting the site's efficiency, convenience, and improved access to medical services."
              demoLink="https://www.redsalud.cl/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blockchain}
              isBlog={false}
              title="Chikoroko"
              description="I developed the Chikoroko website utilizing blockchain technology, which allowed for increased transparency and immutability of data. The integration of blockchain also enhanced security measures, making transactions and user interactions more secure. Through this project, I gained invaluable experience in leveraging blockchain to create innovative and secure web platforms."
              demoLink="https://chikoroko.art/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseofcoco}
              isBlog={false}
              title="House of Coco"
              description="I developed the House of Coco website using PHP, leveraging my expertise in web development and programming. Through this project, I gained valuable experience in creating dynamic and user-friendly websites, enhancing my skills in PHP development."
              demoLink="http://www.houseofcoco.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={businessfriend}
              isBlog={false}
              title="BusinessFriend"
              description="I developed BusinessFriend.com, a website using Angular and webrtc, showcasing my expertise in front-end development and real-time communication integration. Utilizing Angular's powerful framework, I created an intuitive and responsive user interface, while implementing webrtc allowed for seamless audio and video communication between users. This experience solidified my skills in both technology and user-focused solutions."
              demoLink="https://www.businessfriend.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WordPress}
              isBlog={false}
              title="Japanese Inspired Cuisine"
              description="I successfully created a Japanese Inspired Cuisine website utilizing WordPress, showcasing my expertise in design and development. Leveraging my knowledge of Japanese cuisine and WordPress functionalities, I crafted a visually appealing and user-friendly platform that effectively promotes the culinary artistry of Japan. The completed website serves as a testament to my proficiency in WordPress and passion for Japanese cuisine."
              demoLink="https://adachirestaurant.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordpresselementor}
              isBlog={false}
              title="AXEL KOLLOCK JUN."
              description="I gained hands-on experience in web development by successfully creating AXEL KOLLOCK JUN. website using WordPress elementor. This project allowed me to demonstrate my skills in utilizing the elementor tool and implementing a visually appealing design. The website showcases my ability to effectively incorporate different elements and enhance user experience."
              demoLink="https://kollock.de/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopifysocks}
              isBlog={false}
              title="ONDERGOED ENZO.NL"
              description="I developed ONDERGOED ENZO.NL, an online store that specializes in selling high-quality socks. Leveraging the user-friendly functionalities of Shopify, I created a seamless shopping experience for customers, resulting in increased sales and customer satisfaction."
              demoLink="https://www.ondergoedenzo.nl/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopifyglasses}
              isBlog={false}
              title="LA LENTERiA"
              description=""
              demoLink="https://lalenteria.mx/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Casino}
              isBlog={false}
              title="Casino"
              description=""
              demoLink="https://lasatlantisbonuses.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fitness}
              isBlog={false}
              title="Fitness"
              description=""
              demoLink="http://www.centralpennfitnesscenter.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game}
              isBlog={false}
              title="Game"
              description=""
              demoLink="http://stardewvalley.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={systemagency}
              isBlog={false}
              title="System of agency"
              description=""
              demoLink="https://www.systemagency.com"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Jacks-London/Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Jacks-London/AI_Project_1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="PLANT-AI [Recognition of Plant Diseases by Leaf Image Classification]"
              description="Food security for billions of people on earth requires minimizing crop damage by timely detection of diseases.Developing methods for detection of plant diseases serves the dual purpose of increasing crop yield and reducing pesticide use without knowing about the proper disease. Along with development of better crop varieties, disease detection is thus paramount goal for achieving food security. The traditional method of disease detection has been to use manual examination by either farmers or experts, which can be time consuming and costly, proving infeasible for millions of small and medium sized farms around the world.

              This project is an approach to the development of plant disease recognition model, based on leaf image classification, by the use of deep convolutional networks. The developed model is able to recognize 38 different types of plant diseases out of of 14 different plants with the ability to distinguish plant leaves from their surroundings."
              ghLink="https://github.com/Jacks-London/AI_Project_1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
