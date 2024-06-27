import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/aarushfun.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/stock.png";
import chatify from "../../Assets/Projects/hand (2).png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/CPI.png";

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
              imgPath={chatify}
              isBlog={false}
              title="AI Based Prosthetic Hand"
              description="An AI-based prosthetic hand that uses Arduino and computer vision to replicate natural hand movements. The system employs a computer's camera to identify finger positions and translates these actions onto the robotic hand. The prosthetic hand is trained on a comprehensive database of hand movements, ensuring accurate and responsive replication of gestures. This project showcases the integration of machine learning and robotics, demonstrating advanced assistive technology capabilities."
              ghLink="https://github.com/aarushk09/hand"
              demoLink="https://portfolio-v2f.vercel.app/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).webm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CPI"
              description="CPI, or Competitive Programming Initiative, is a dedicated platform aimed at enhancing the skills of students in the realm of competitive programming. It provides resources, training sessions, and a supportive community to help students excel in coding competitions. Through CPI, participants have access to expert guidance, practice problems, and opportunities to collaborate with peers, enabling them to develop their algorithmic thinking and problem-solving abilities. This initiative is instrumental in preparing students for various coding contests and fostering a passion for computer science.

"
              ghLink="https://github.com/aarushk09/usaco-guide"
              demoLink="https://usaco.guide/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI Stock Market Predictor"
              description="The Stock Market Predictor is a sophisticated application developed in Python that successfully predicts stock market trends with over 90% accuracy. Utilizing advanced machine learning algorithms, the model analyzes historical data and market indicators to forecast future stock movements. This high success rate is achieved through rigorous training and fine-tuning of the predictive models, making it a powerful tool for investors and traders looking to make informed decisions based on reliable data-driven insights.

"
              ghLink="https://github.com/aarushk09/stockmarket1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Aarush.fun"
              description="Aarush.fun is an engaging and versatile website designed to provide both entertainment and utility. It features a variety of games, including the popular Stack Tower, which challenges players to build the tallest tower possible by stacking blocks with precision. In addition to its gaming offerings, Aarush.fun also includes useful tools such as an HTML code compiler, enabling users to write, test, and debug their code directly within the browser. This combination of fun and functional elements makes Aarush.fun a go-to destination for both relaxation and productivity.

"
              ghLink="https://github.com/aarushk09/newaarushfun"
              demoLink="https://aarushk09.github.io/newaarushfun/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
