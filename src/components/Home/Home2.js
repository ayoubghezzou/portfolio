import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Front-End Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning creative ideas into clean, functional interfaces using React and modern web technologies. I'm always eager to learn, explore new tools, and create meaningful digital experiences.
              <br />
              <br />
              I'm familiar with
              <i>
                <b className="purple">
                  {" "} React, HTML, CSS, JavaScript, Tailwind CSS, Git, GitHub, C {" "}
                </b>
              </i>
              and enjoy transforming designs into functional interfaces while continuously improving my development skills.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "} Web Applications, Responsive Websites, User Interface Design {" "}
                </b>
              </i>
              and exploring new technologies to improve web experiences.
              <br />
              <br />
              Whenever possible, I love building projects with
              <i>
                <b className="purple"> React.js </b> and{" "}
                <b className="purple"> Tailwind CSS </b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;