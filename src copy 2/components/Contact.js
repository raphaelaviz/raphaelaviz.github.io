import React from 'react';
import styled from 'styled-components';
import emailjs from "@emailjs/browser";
import logoBackground from "../assets/logoBackground.png";
import { useRef, useState } from "react";

const ContactContainer = styled.div`
  background-color: #212121;
  height: 100vh;
  display: flex;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${logoBackground});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 60%;
    opacity: 0.05;
    
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

const ContentContainer = styled.div`
  display: flex;
  position: absolute;
  top: 30%;
  left: 12%;
  width: 80%;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  background-color: #212121;
  border: 2px solid gold;
  border-radius: 5px;
  color: white;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 150%;
    flex-direction: column;
    align-items: center;
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 150px;
  padding: 10px;
  background-color: #212121;
  border: 3px solid gold;
  border-radius: 5px;
  color: white;

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 150%;}
  
`;

const SendButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  margin-top: 20px;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 50%;

  &:hover {
    background-color: gold;
    color: black;
    font-weight: 600;
    border: 1px solid black;
  }
`;

const SuccessMessage = styled.p`
  color: white;
  margin-top: 10px;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_157av3e",
        "template_zuud0q9",
        ref.current,
        "4nmXz0ngGplr6c7Z5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          ref.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <Header>Contact me</Header>
      <ContentContainer>
      <FormContainer ref={ref} onSubmit={handleSubmit}>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <SendButton type="submit">Send</SendButton>
            <SuccessMessage>
            {success &&
              "Your message has been sent. I'll get back to you as soon as possible."}
            </SuccessMessage>
          </FormContainer>
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;
