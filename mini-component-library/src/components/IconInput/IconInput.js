import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14 / 16 + "rem",
    iconSize: 16,
    borderSize: "1px",
    paddingSize: "4px 4px 4px 24px",
  },
  large: {
    fontSize: 18 / 16 + "rem",
    iconSize: 24,
    borderSize: "2px",
    paddingSize: "8px 8px 8px 36px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <TextInput
        type="text"
        style={{
          "--width": width + "px",
          "--fontSize": styles.fontSize,
          "--borderSize": styles.borderSize,
          "--paddingSize": styles.paddingSize,
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--width);
  padding: var(--paddingSize);
  border: none;
  border-bottom: var(--borderSize) solid ${COLORS.black};
  outline-offset: 4px;
  color: ${COLORS.gray500};
  font-size: var(--fontSize);
  font-weight: 700;

  &:hover {
    color: inherit;
  }

  &::placeholder {
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: max-content;
`;

export default IconInput;
