import React, { ReactNode } from "react";
import styled from "styled-components";
import { paddingMixin, PaddingMixingProps } from "../utils/style";

export const fontSizes = {
  default: "1em",
  medium: "1.5em",
  big: "2em",
};

export interface Props extends PaddingMixingProps {
  children: ReactNode;
  component?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
  color?: string;
  size?: keyof typeof fontSizes;
}

const Txt = styled.span`
  font-family: "Raleway", sans-serif;
  color: ${(props: Props) => props.color || "#222"};
  font-size: ${(props: Props) => fontSizes[props.size || "default"]};
  ${paddingMixin}
`;

const Text = ({ children, component = "span", ...rest }: Props) => (
  <Txt as={component} {...rest}>
    {children}
  </Txt>
);

export default Text;
