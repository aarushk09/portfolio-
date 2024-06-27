import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hello, I am <span className="purple">Aarush Kute </span>
            from <span className="purple"> Cumming, Georgia.</span>
            <br />
            I am currently a Junior at South Forsyth High School.
            <br />
            I am currently working with proffesors from UNG on a research paper, along with a couple independent research papers.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dont do it for the reward, do it for the impact"{" "}
          </p>
          <footer className="blockquote-footer">Aarush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
