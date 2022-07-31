import React from "react";
import styled from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";
import Breadcrumbs from "../BreadCrumbs";
import Select from "../Select";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = () => {
  const [sortID, setSortID] = React.useState("newest");

  return (
    <Wrapper>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ShoeSidebar />
      </LeftColumn>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortID}
            onChange={(e) => setSortID(e.target.value)}
          >
            <option value="newest">Newest Release</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <ShoeGrid />
      </MainColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 8px;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-basis: 0px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 48px;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
