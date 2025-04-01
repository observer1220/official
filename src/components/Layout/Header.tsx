import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import smile from "public/images/smile.png";
import Image from "next/image";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
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
      width: 50px;
      height: 50px;
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

const DropdownMenu = styled.div`
  position: relative;

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
    z-index: 10;

    a {
      display: block;
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: #333;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  &:hover .dropdown-content {
    display: block;
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
            <DropdownMenu>
              <span>服務項目</span>
              <div className="dropdown-content">
                <Link href="/services/web-development">網站製作</Link>
                <Link href="/services/transcription">逐字稿聽打</Link>
                <Link href="/services/translation">文件翻譯</Link>
              </div>
            </DropdownMenu>
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
