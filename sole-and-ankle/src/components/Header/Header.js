import React from "react";
import styled from "styled-components";

import SuperHeader from "../SuperHeader";
import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import MenuModal from "../MenuModal/MenuModal";
import { QUERIES } from "../../constants";

const Header = () => {
  const [menuIsShow, setMenuIsShow] = React.useState(false);

  const openMenu = () => {
    setMenuIsShow(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
  };

  return (
    <Wrapper>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <NavMenu>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavMenu>
        <Side>
          <MenuMobile openMenu={openMenu} />
        </Side>
      </MainHeader>
      <MenuModal menuIsShow={menuIsShow} setMenuIsShow={setMenuIsShow} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 24px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  &:first-of-type {
    flex: 0;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: clamp(1.9rem, 8vw - 4rem, 3rem);
  margin: 0px 0px 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  width: max-content;
  color: inherit;
  font-size: ${18 / 16}rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  &:first-child {
    color: var(--color-secondary);
  }
`;

export default Header;
