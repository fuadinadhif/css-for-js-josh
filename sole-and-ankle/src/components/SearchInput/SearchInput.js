import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SearchInput = ({ placeholder, width }) => {
  return (
    <Wrapper>
      <VisuallyHidden>Search</VisuallyHidden>
      <IconWrapper>
        <Icon
          name="search"
          color="var(--color-gray-300)"
          size={16}
          strokeWidth={1}
        ></Icon>
      </IconWrapper>
      <TextInput
        type="text"
        placeholder={placeholder}
        style={{ "--width": width + "px" || "175px" }}
      ></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: max-content;
  margin: auto;
`;

const TextInput = styled.input`
  width: var(--width);
  padding: 6px 6px 6px 24px;
  border: none;
  border-bottom: 1px solid var(--color-gray-300);
  background: transparent;
  color: var(--color-gray-500);
  outline-offset: 2px;
`;

export default SearchInput;
