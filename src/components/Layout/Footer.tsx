import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #4b8bbe;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  /* width: 100%; */
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} 箴雅數位工作室</p>
    </FooterContainer>
  );
};

export default Footer;
