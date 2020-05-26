import React from "react";
import styled, { css } from "styled-components";

interface Props {
  children: Element;
  fullScreen?: boolean;
  background?: string;
}

const fillMixin = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.section`
  ${(props: Props) => (props.fullScreen ? fillMixin : "")}
  background-color: ${(props: Props) => props.background};
`;

const Container = ({ children, fullScreen, background, ...rest }: Props) => (
  <Wrapper fullScreen={fullScreen} background={background} {...rest}>
    {children}
  </Wrapper>
);

export default Container;
