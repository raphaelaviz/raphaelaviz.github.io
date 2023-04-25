import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-top-color: #ffc107;
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, -50%) rotate(270deg);
  }
`;

const LinkedInIcon = styled(FaLinkedin)`
  height: 30px;
  width: 30px;
  color: white;
  transition: color 0.3s ease-in-out;

  ${IconLink}:hover & {
    color: #ffc107;
  }
`;

const GithubIcon = styled(FaGithub)`
  height: 30px;
  width: 30px;
  color: white;
  transition: color 0.3s ease-in-out;

  ${IconLink}:hover & {
    color: #ffc107;
  }
`;

const Links = () => {
  return (
    <Sidebar>
      <IconLink href="https://www.linkedin.com/in/raphael-aviz/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </IconLink>
      <IconLink href="https://github.com/raphaelaviz" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </IconLink>
    </Sidebar>
  );
};

export default Links;
