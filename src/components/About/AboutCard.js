import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {GiLaurelsTrophy} from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kushagra Sharma </span>
            from <span className="purple"> Gurugram, India.</span>
            <br />I have completed my B.Tech in Computer Science from NCU, Gurugram,
            <br />Currently I am working as a Software Engineer at <span className="purple">RTDS.</span>
            <br /><br />I love to learn about new technologies, what problems are they solving and How can I use them to build better and scalable products.
            <br />
            I have also participated in many national and international <span className="purple">Hackathons.</span>
          </p>
          <ul>
            <li className="about-activity">
              <GiLaurelsTrophy /> EY GDS Hackpions 3.0 Winners
            </li>
            <li className="about-activity">
              <GiLaurelsTrophy /> SIH 2022 Finalists
            </li>
            <li className="about-activity">
              <GiLaurelsTrophy /> EY GDS Hackpions 2.0 Runners Up
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You have to fight to reach your dream. You have to sacrifice and work hard for it."
          </p>
          <footer className="blockquote-footer">Leo Messi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
