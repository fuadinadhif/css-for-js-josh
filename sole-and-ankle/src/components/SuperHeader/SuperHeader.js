import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SearchInput from "../SearchInput";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput placeholder="Search..." width={175}></SearchInput>
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon name="shopping-bag" strokeWidth={1}></Icon>
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 32px;
  font-size: ${14 / 16}rem;
  background-color: var(--color-gray-900);
  color: var(--color-gray-300);

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MarketingMessage = styled.p`
  margin-right: auto;
  color: var(--color-white);
`;

const HelpLink = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 2px;
`;

export default SuperHeader;
