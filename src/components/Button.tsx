import React from "react";
import styled, { css } from "styled-components";

import Text, { Props as TextProps } from "./Text";
import {
  colors,
  flexMixin,
  FlexMixinProps,
  paddingMixin,
  PaddingMixingProps,
  separationSizes,
} from "../utils/style";

interface Props extends PaddingMixingProps, FlexMixinProps {
  children: string;
  color?: keyof typeof colors;
  disabled?: boolean;
  textColor?: keyof typeof colors;
  textProps?: TextProps;
  onClick: () => void;
}

const Btn = styled.button`
  background-color: ${(props: Props) =>
    colors[props.disabled ? "grey" : props.color]};
  border-radius: ${(props: Props) =>
    `calc(${separationSizes[props.padding]} / 2)`};
  border: none;
  cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 500;
  justify-content: center;
  outline: none;
  transition: transform 75ms;
  ${(props: Props) =>
    !props.disabled &&
    css`
      &:active {
        transform: scale(0.99);
      }
    `}
  ${flexMixin}
  ${paddingMixin}
`;

const Button = ({
  children,
  disabled,
  padding = "small",
  textColor,
  textProps,
  ...rest
}: Props) => (
  <Btn padding={padding} disabled={disabled} {...rest}>
    <Text color={disabled ? "grey" : textColor} {...textProps}>
      {children}
    </Text>
  </Btn>
);

export default Button;
