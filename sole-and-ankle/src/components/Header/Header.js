import React from "react";
import styled from "styled-components";

import SuperHeader from "../SuperHeader";
import Logo from "../Logo";
import { COLORS } from "../../constants";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <NavMenu>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavMenu>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 24px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Side = styled.div`
  flex: 1;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const NavLink = styled.a`
  width: max-content;
  color: inherit;
  font-size: ${18 / 16}rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  &:first-child {
    color: ${COLORS.secondary};
  }
`;

export default Header;
