import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import crave from "../assets/projects/crave.png";
// import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import stay from "../assets/projects/stay.png";
import snake from "../assets/projects/snake.png";
import guess from "../assets/projects/guess.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crave}
              isBlog={false}
              title="Crave-IT-Now"
              description="Crave It Now is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that functions as a food delivery platform. It connects users enabling them to browse menus, place orders, and track deliveries"
              ghLink="https://github.com/jiwankumar/Crave-It-Now"
              demoLink="https://crave-it-now-frontend.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Grocery-Store"
              description="An online grocery store is a web-based platform where customers can browse, select, and purchase groceries and household items. It offers convenience, a wide product selection, and home delivery, making it an increasingly popular option for modern shoppers."
              ghLink="https://github.com/jiwankumar/Online-Grocery-Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stay}
              isBlog={false}
              title="Stay-Finder Website"
              description="Stay Finder is a travel booking platform built with MERN stack. Users can search and book various accommodations like hotels, hostels, and vacation rentals. The website features user-friendly search filters, detailed property listings, secure payment gateways, and booking management tools."
              ghLink="https://github.com/jiwankumar/Stay-Finder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Word Guess Game"
              description="A word guessing game built with HTML, CSS, and JavaScript. Users attempt to guess a hidden word by inputting letters. The game displays correct guesses and provides feedback, with visual elements enhanced by CSS. JavaScript handles game logic, including random word selection, win/lose conditions, and user interaction."
              ghLink="https://github.com/jiwankumar/GuessWord"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Quiz Application"
              description="The Quiz App is a simple web application that allows users to take quizzes on various topics. The app presents multiple-choice questions and provides immediate feedback on whether the selected answer is correct or incorrect. The score is updated in real-time, and users can see their final score at the end of the quiz"
              ghLink="https://github.com/jiwankumar/Quiz_App"
              demoLink="https://quiz-app-git-main-jiwans-projects-f18159d1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Application"
              description="A classic arcade game developed in Java. The player controls a snake, navigating a grid to consume food and grow. Core elements include snake movement, food generation, collision detection, and scorekeeping. The game ends when the snake collides with itself or the game boundaries."
              ghLink="https://github.com/jiwankumar/Snake_Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects