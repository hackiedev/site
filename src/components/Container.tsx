import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import {
  flexMixin,
  FlexMixinProps,
  paddingMixin,
  PaddingMixingProps,
} from "../utils/style";

interface Props extends PaddingMixingProps, FlexMixinProps {
  children: ReactNode;
  fill?: boolean;
  background?: string;
}

const fillMixin = css`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.section`
  ${(props: Props) => (props.fill ? fillMixin : "")};
  background-color: ${(props: Props) => props.background};
  ${paddingMixin}
  ${flexMixin}
`;

const Container = ({ children, fill, background, ...rest }: Props) => (
  <Wrapper fill={fill} background={background} {...rest}>
    {children}
  </Wrapper>
);

export default Container;
