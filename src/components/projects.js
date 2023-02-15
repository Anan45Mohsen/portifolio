import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Capture.PNG";
import projImg2 from "../assets/img/Capture2.PNG";
import projImg3 from "../assets/img/Capture3.PNG";
import projImg4 from "../assets/img/Capture4.PNG";
import projImg5 from "../assets/img/Capture5.PNG";
import projImg6 from "../assets/img/Capture6.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "online shop ",
      description: "online store for shoses",
      imgUrl: projImg2,
    },
    {
      title: "Ecourses",
      description: "for online courses & books",
      imgUrl: projImg3,
    },
    {
      title: "Caffee",
      description: "online site for book your caffee",
      imgUrl: projImg4,
    },
    {
      title: "online store ",
      description: "online store for buy cats & dogs and treatment it ",
      imgUrl: projImg5,
    },
    {
      title: "Travel ",
      description: "website for book tickets and hotels",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>some of my projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="social-icon">
                    <h3>This about my socialMedia</h3>
                <a href="https://www.linkedin.com/in/anan-mohsen-mahmoud-4671b3198" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/anan.elemery?mibextid=ZbWKwL"target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/"target="_blank"><img src={navIcon3} alt="" /></a>
                    </div> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>In tab1 you will see some of my projects and photos for my implementation of my projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}