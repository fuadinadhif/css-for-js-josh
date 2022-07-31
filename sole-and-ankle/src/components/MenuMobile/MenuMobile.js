import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import { QUERIES } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenus = ({ openMenu }) => {
  return (
    <Wrapper>
      <UnstyledButton>
        <Icon name="shopping-bag" strokeWidth={1.5} />
        <VisuallyHidden>Open cart</VisuallyHidden>
      </UnstyledButton>
      <UnstyledButton>
        <Icon name="search" strokeWidth={1.5} />
        <VisuallyHidden>Open search</VisuallyHidden>
      </UnstyledButton>
      <Menu onClick={openMenu}>
        <Icon name="menu" strokeWidth={1.5} />
        <VisuallyHidden>Open menu</VisuallyHidden>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  justify-content: flex-end;
  gap: 40px;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 24px;
  }
`;

const Menu = styled(UnstyledButton)``;

export default MobileMenus;
