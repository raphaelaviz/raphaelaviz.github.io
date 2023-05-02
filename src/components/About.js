import React from 'react';
import styled from 'styled-components';
import photo3 from "../assets/photo3.png";
import { Link } from 'react-scroll';

const AboutContainer = styled.div`
  background-color: #212121;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow-y: auto;
   
  }
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
  
  @media (max-width: 768px) {
    font-size: 55px;
  }

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

const HeaderCertificates = styled.h2`
`;

const ContentContainer = styled.div`
  display: flex;
  position: absolute;
  top: 25%;
  left: 9.5%;
  width: 80%;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Introduction = styled.p`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 1.1rem;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: lighter;
  
  @media (max-width: 768px) {
    width: 95%;
  }
  
`;

const Certificates = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  font-weight: lighter;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const GetInTouchLink = styled(Link)`
  cursor: pointer;
  color: gold;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  margin-top: -17%;
  align-self: center;

  @media (max-width: 768px) {
    display: none;
  }

`;

const SkillsContainer = styled.div`
  display: flex;
  border: 2px solid gold;
  border-radius: 30px;
  padding: 30px;
  color: white;
  font-size: 0.9rem;
  font-family: 'Lato', sans-serif;
  font-weight: lighter;
  margin-top: 15%;
  padding-left: 13%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 95%;
    font-size: 0.79rem;
    flex-wrap: wrap;
    margin-top: 0%;
    padding-bottom: 11px;
  }
`;


const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;


const SkillItem = styled.span`
`;


const About = () => {
  return (
    <AboutContainer id="about">
      <Header>About me</Header>
      <ContentContainer>
        <Introduction>
          <div>
            Hello there! I’m Raphael, a Front-End developer with focus on the
            Javascript, React and React Native side of things.
            <br />
            <br />
            I see myself as a very mature person with a knack for dealing with
            people, and I take pride in being the most focused and hard-working
            person I know. Ever since I started coding I’ve been studying{" "}
            <strong>very hard</strong> and developing small projects nonstop as
            practice, and now I feel more than ready to be part of a team.
            <br />
            <br />
            I'm currently looking for an entry-level position as a
            Front-End Developer in a company where my energy and true passion
            for coding can be put to good use. My priority at the moment is to
            really improve and prove myself as your most dedicated and
            fast-learning employee.{" "}
            <GetInTouchLink to="contact" smooth={true} duration={500}>
              Get in touch!
            </GetInTouchLink>
            <br />
            <br />
          </div>
          <HeaderCertificates>My certificates</HeaderCertificates>
          <Certificates>
        <a href="https://www.coursera.org/account/accomplishments/professional-cert/9WHEH65E642H" target="_blank" rel="noopener noreferrer">
          <SkillItem>● Professional Certificate Front-End Developer Meta</SkillItem>
        </a>
        <a href="https://www.coursera.org/account/accomplishments/specialization/U55B8TFDBQTK" target="_blank" rel="noopener noreferrer">
          <SkillItem>● Meta React Native Specialization</SkillItem>
        </a>
        <a href="https://www.udemy.com/certificate/UC-6cccd46d-640d-4792-97a6-6c97548d763f/" target="_blank" rel="noopener noreferrer">
          <SkillItem>● JavaScript Algorithms and Data Structures Masterclass</SkillItem>
        </a>
      </Certificates>
        </Introduction>
        <RightSideContainer>
          <Image src={photo3} alt="Raphael's photo" />
          <SkillsContainer>
            <SkillColumn>
              <SkillItem>► JavaScript</SkillItem>
              <SkillItem>► React</SkillItem>
              <SkillItem>► React Native</SkillItem>
            </SkillColumn>
            <SkillColumn>
              <SkillItem>► Core Java</SkillItem>
              <SkillItem>► Node.js</SkillItem>
              <SkillItem>► TypeScript</SkillItem>
            </SkillColumn>
            <SkillColumn>
              <SkillItem>► Redux</SkillItem>
              <SkillItem>► CSS (Tailwind, Sass, Styled Components...)</SkillItem>
            </SkillColumn>
          </SkillsContainer>
        </RightSideContainer>
      </ContentContainer>
    </AboutContainer>
  );
};


export default About;
