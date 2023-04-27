import React from 'react';
import styled from 'styled-components';
import projectsData from './projectsData';

const ProjectsContainer = styled.div`
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Header = styled.h1`
  
  font-size: 60px;
  position: absolute;
  top: 3%;
  left: 10%;
  color: white;
  display: inline-block;
  overflow: hidden;
  padding-left: 2px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -100%;
    width: 100%;
    height: 0.5px;
    background-color: gold;
    transition: left 0.45s;
  }

  &:hover::after {
    left: 100%;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 4rem;
  height: auto;
  overflow: visible;
  margin-top: 11rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 13rem;
  }
`;

const Card = styled.div`
  position: relative;
  width: 550px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid gold;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  margin-bottom: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90vw;
    height: 50vh;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 70vh;
  }

  @media (max-height: 480px) and (orientation: landscape) {
    width: 90vw;
    height: 70vh;
  }
`;

const CardHover = styled.div`
  ${Card}:hover & {
    opacity: 1;
  }

  ${Card}:hover &:after {
    bottom: 0;
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 2;
  opacity: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100%;
    background: gold;
    z-index: -2;
    transition: bottom 0.6s ease;
  }

  ${Card}:hover & {
    opacity: 1;
  }

  ${Card}:hover &::after {
    bottom: 0;
  }

  @media (max-width: 768px) {
    opacity: 1;
    padding: 1.5rem; 
    justify-content: space-between;

    &::before {
      background: rgba(0, 0, 0, 0.8); 
    }

    &::after {
      display: none;
    }
  }
`;
const CardTitle = styled.h3`
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 1.7rem; 
  white-space: nowrap;
  z-index: 2;
  margin: 0;

  @media (max-width: 768px) {
    color: white;
    font-size: 6vw;
  }

`;

const CardDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: black;

  @media (max-width: 768px) {
    color: white;
    font-size: 1rem;
  }

`;

const CardLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;

`;

const CardLink = styled.a`
  font-family: 'Roboto', sans-serif;
  color: black;
  text-decoration: underline;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    color: white;
  }
`;



const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Header>Projects</Header>
        <CardsWrapper>
          {projectsData.map((project, index) => (
            <Card key={index} bgImage={project.image}>
              <CardHover />
              <CardContent className="card-content">
              <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardLinks>
                  <CardLink href={project.linkGithub} target="_blank" rel="noreferrer">
                    GitHub Repo
                  </CardLink>
                  <CardLink href={project.page} target="_blank" rel="noreferrer">
                    Project Page
                  </CardLink>
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </CardsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
