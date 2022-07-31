import React from "react";
import styled from "styled-components";

const Breadcrumbs = ({ children }) => {
  return (
    <Wrapper aria-label="Breadcrumb">
      <ol>{children}</ol>
    </Wrapper>
  );
};

Breadcrumbs.Crumb = ({ href, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbWrapper>
  );
};

const Wrapper = styled.nav`
  height: 48px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 960px) {
    height: max-content;
    margin-bottom: 0px;
  }
`;

const CrumbWrapper = styled.li`
  display: inline;

  &:not(:first-child) {
    margin-left: 8px;

    &:before {
      content: "/";
      margin-right: 8px;
      color: var(--color-gray-300);
    }
  }
`;

const CrumbLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;

  &:hover {
    color: var(--color-gray-900);
  }
`;

export default Breadcrumbs;
