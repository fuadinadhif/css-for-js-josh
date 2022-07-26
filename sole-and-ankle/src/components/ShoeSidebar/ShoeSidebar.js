import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";

const ShoeSidebar = () => {
  return (
    <Wrapper>
      <Link href="/lifestyle">Lifestyle</Link>
      <Link href="/jordan">Jordan</Link>
      <ActiveLink href="/running">Running</ActiveLink>
      <Link href="/basketball">Basketball</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/us-football">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link>
    </Wrapper>
  );
};

const Wrapper = styled.aside``;

const Link = styled.a`
  display: block;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  line-height: 2;
  text-decoration: none;
`;

const ActiveLink = styled(Link)`
  color: ${COLORS.primary};
`;

export default ShoeSidebar;
