import React from "react";
import styled, { keyframes } from "styled-components";

const breathing = keyframes`
  0%, 100% {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 123, 255, 0.5);
  }
  50% {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 30px rgba(0, 123, 255, 0.8);
  }
`;

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  animation: ${breathing} 2s infinite;
  transition: transform 0.2s ease-in-out;
  /* z-index: 1000; */

  &:hover {
    transform: scale(1.1);
  }
`;

const CTA = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:observer1220@gmail.com";
  };

  return <StyledButton onClick={handleEmailClick}>聯絡我們</StyledButton>;
};

export default CTA;
