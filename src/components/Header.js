import React from "react";
import styled, { keyframes } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding-left: 2rem;
`;

const HeadingTitle = styled.h1.attrs({
  className: "header"
})`
  font-size: 3.5rem;
  color: rgb(245, 247, 250);
  animation: ${keyframes`from { opacity: 0; }`} 1s both;
`;

const Header = ({ children }) => (
  <StyledHeader>
    <HeadingTitle>{children}</HeadingTitle>
  </StyledHeader>
);

export { Header };
