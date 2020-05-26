import React from "react";
import styled from "styled-components";

interface Props {
  children: Element;
}

const Wrapper = styled.span`
  font-family: Comic-sans;
`;

const Text = ({ children, ...rest }: Props) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Text;
