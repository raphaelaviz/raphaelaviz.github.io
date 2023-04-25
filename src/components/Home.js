import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import logoBackground from "../assets/logoBackground.png";


const HomeContainer = styled.div`
  background-color: #212121;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${logoBackground});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 60%;
    opacity: 0.05;
    z-index: 0;
  }
`;


const HomeContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -15%;
    left: -25%;
    width: 75%;
    height: 1%;
    background-color: gold;
    transition: left 1.3s;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25%;
    left: 50%;
    width: 75%;
    height: 1%;
    background-color: gold;
    transition: left 1.3s;
  }

  &:hover::before {
    left: 50%;
  }

  &:hover::after {
    left: -25%;
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Presentation = styled.h1`
  font-size: 6rem;
  color: white;

  @media (max-width: 1024px) {
    margin-left: 0;
    font-size: 2.4rem;
  }
`;

const JobPresentation = styled.h1`
  font-size: 1.88rem;
  color: white;
  margin-left: 25%;

  @media (max-width: 1024px) {
    margin-left: 0;
    font-size: 1.25rem;
  }
`;

const Quote = styled.h3`
  position: relative;
  top: 30%;
  font-size: 0.7rem;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    top: 0;
    margin-top: 1rem;
  }
`;


const Home = () => {
  return (
    <HomeContainer id="home">
      <Navbar />
      <HomeContent>
        <TextContainer>
          <Presentation>Raphael Aviz</Presentation>
          <JobPresentation>Front-end Developer</JobPresentation>
        </TextContainer>
        <Quote>
          "Doing anything with dedication impacts life positively."
        </Quote>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
