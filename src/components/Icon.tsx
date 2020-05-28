import styled, { css } from "styled-components";
import animation from "../utils/animation";
import * as availableIcons from "@styled-icons/material";
import { colors } from "../utils/style";

interface Props {
  name: keyof typeof availableIcons;
  animation?: keyof typeof animation;
  color: keyof typeof colors;
  size: number;
}

const animationMixin = css`
  animation: ${(props: Props) => animation[props.animation]} 1.25s linear
    infinite;
`;

const StyledIcon = styled.i`
  ${(props: Props) => (props.animation ? animationMixin : "")};
  color: ${(props: Props) => props.color};
`;

const Icon = ({ name, ...rest }: Props) => (
  <StyledIcon {...rest} as={availableIcons[name]} />
);

export default Icon;
