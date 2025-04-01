import React from "react";
import Link from "next/link";
import styled from "styled-components";
import smile from "public/images/smile.png";
import Image from "next/image";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  /* width: 100%; */
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;

    img {
      margin-right: 0.5rem;
      width: 50px; /* Adjust size as needed */
      height: 50px; /* Adjust size as needed */
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 2rem;

    a {
      text-decoration: none;
      color: #333;
      transition: color 0.3s ease;

      &:hover {
        color: #666;
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">
          <Image src={smile} alt="Logo" width={50} height={50} />
          箴雅數位工作室
        </Link>
      </Logo>
      <Nav>
        <NavList>
          <li>
            <Link href="/services">服務項目</Link>
          </li>
          <li>
            <Link href="/projects">專案作品</Link>
          </li>
          <li>
            <Link href="/articles">文章</Link>
          </li>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
