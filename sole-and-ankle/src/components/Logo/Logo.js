import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const Logo = () => {
  return (
    <Link href="/">
      <Wrapper>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
