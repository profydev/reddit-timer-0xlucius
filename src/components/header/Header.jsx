import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/logo.svg";

const Logo = styled(logo)`
  margin-top: 8px;
`;

function Header() {
  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
}

export default Header;
