import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { WEIGHTS, QUERIES } from "../../constants";

const MenuModal = ({ menuIsShow, setMenuIsShow }) => {
  const handleDismiss = () => {
    setMenuIsShow(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };

  if (!menuIsShow) {
    return null;
  }

  return (
    <Overlay>
      <Filler onClick={() => handleDismiss()} />
      <Content>
        <CloseButton onClick={() => handleDismiss()}>
          <Icon name="close" strokeWidth={1.5} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <MenuList>
          <MenuLink href="/sale">sale</MenuLink>
          <MenuLink href="/new">new releases</MenuLink>
          <MenuLink href="/men">men</MenuLink>
          <MenuLink href="/women">women</MenuLink>
          <MenuLink href="/kids">kids</MenuLink>
          <MenuLink href="/collections">collections</MenuLink>
        </MenuList>
        <Footer>
          <FooterLink href="/toc">Terms and Conditions</FooterLink>
          <FooterLink href="/pp">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background-color: var(--color-gray-overlay);
  z-index: 1;
`;

const Filler = styled.div`
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100%;
  padding: 32px;
  background: var(--color-white);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 16px;

  @media ${QUERIES.phoneAndSmaller} {
    top: 14px;
    right: 14px;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  height: max-content;
  margin-top: auto;
  margin-bottom: auto;
`;

const MenuLink = styled.a`
  color: var(--color-gray-900);
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
`;

export default MenuModal;
