import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";
import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <ShoeIndex />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 48px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export default App;
