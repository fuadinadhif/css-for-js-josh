import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";

const Select = ({ label, value, onChange, children }) => {
  const selectedChild = children.find((child) => child.props.value === value);
  const displayedValue = selectedChild.props.children;

  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>
      <SelectWrapper>
        <NativeSelect onChange={onChange}>{children}</NativeSelect>
        <CustomSelect>
          {displayedValue}
          <Icon name="chevron-down" size={24} strokeWidth={1.5} />
        </CustomSelect>
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const VisibleLabel = styled.span`
  color: ${COLORS.gray[700]};
  font-size: ${16 / 16}rem;
  font-weight: 500;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: max-content;
  padding: 12px 10px 12px 16px;
  border-radius: 8px;
  background: ${COLORS.gray[100]};
  color: ${COLORS.gray[900]};
  font-size: ${16 / 16}rem;
  font-weight: 600;
  pointer-events: none;
`;

export default Select;
