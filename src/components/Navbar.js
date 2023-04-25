import React from 'react';
import styled from 'styled-components';
import logo3 from "../assets/logo3.png";
import { Link } from 'react-scroll';

const NavbarContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  z-index: 2;
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  cursor: pointer;

  img {
    height: 3rem;
    width: auto;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 3rem;
  color: white;
  margin-right: 100px;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-right: 20px;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/" smooth={true} duration={500}>
        <img src={logo3} alt="Logo" />
      </Logo>
      <NavbarLinks>
        <StyledLink to="about" smooth={true} duration={500}>
          About
        </StyledLink>
        <StyledLink to="projects" smooth={true} duration={500}>
          Projects
        </StyledLink>
        <StyledLink to="contact" smooth={true} duration={500}>
          Contact
        </StyledLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
