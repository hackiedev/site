import React, { ReactNode } from "react";
import styled from "styled-components";
import { paddingMixin, PaddingMixingProps } from "../utils/style";

interface Props extends PaddingMixingProps {
  children: ReactNode;
  component?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
  color?: string;
}

const Txt = styled.span`
  font-family: "Raleway", sans-serif;
  color: ${(props: Props) => props.color || "#222"};
  ${paddingMixin}
`;

const Text = ({ children, component = "span", ...rest }: Props) => (
  <Txt as={component} {...rest}>
    {children}
  </Txt>
);

export default Text;
