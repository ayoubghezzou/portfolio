import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Ayoub Ghezou</span>{" "}
            from <span className="purple">Algeria</span>.
            <br />
            I'm a passionate{" "}
            <span className="purple">Front-End Developer</span> focused on
            creating modern and user-friendly web experiences.
            <br />
            I enjoy working with{" "}
            <span className="purple">React and modern web technologies</span>{" "}
            to turn creative ideas into functional and attractive interfaces.
            <br />
            I'm always eager to improve my skills, explore new technologies,
            and take on new challenges.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and Developing New Skills 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ayoub</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;