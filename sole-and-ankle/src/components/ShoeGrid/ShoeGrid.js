import React from "react";
import styled from "styled-components";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 36px;
  row-gap: 64px;
`;

const ShoeWrapper = styled.div`
  flex: 1;
  min-width: 312px;
`;

export default ShoeGrid;
