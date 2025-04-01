import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CTA from "../ui/CTA";
import styled from "styled-components";

const MainContainer = styled.main`
  padding: 20px;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <MainContainer>{children}</MainContainer>
      <CTA />
      <Footer />
    </div>
  );
};

export default Layout;
