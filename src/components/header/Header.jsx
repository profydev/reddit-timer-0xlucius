import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/montserrat";
import { ReactComponent as logo } from "../../assets/logo.svg";

const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;
`;

const Logo = styled(logo)`
  margin-top: 8px;
`;

const NavbarLink = styled(Link)`
  font-family: "montserrat", sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #636363;
  margin-left: 26px;
`;

function Header() {
  return (
    <Navbar>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <NavbarLink to="/search/javascript">Search</NavbarLink>
        <NavbarLink to="#how-it-works">How it works</NavbarLink>
        <NavbarLink to="#about">About</NavbarLink>
      </nav>
    </Navbar>
  );
}

export default Header;
