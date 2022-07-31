import React from "react";
import styled from "styled-components";
import { Search, Menu, ShoppingBag, ChevronDown, X } from "react-feather";

const icons = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
  close: X,
};

const Icon = ({ name, color, size, strokeWidth }) => {
  const Component = icons[name];

  if (!Component) {
    throw new Error(`[${name}] icon did not exist.`);
  }

  return (
    <Wrapper>
      <Component
        color={color}
        size={size}
        strokeWidth={strokeWidth}
      ></Component>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
  }
`;

export default Icon;
