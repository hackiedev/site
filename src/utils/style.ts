import { css } from "styled-components";

export const separationSizes = {
  default: "1rem",
  small: "0.5rem",
  large: "6rem",
};

export type SeparationSize = keyof typeof separationSizes;

export const flexDirection = {
  row: "row",
  column: "column",
};

export type FlexDirection = keyof typeof flexDirection;

export const colors = {
  blue: "#1C4D63",
  black: "#232323",
  red: "#C52F38",
  grey: "#E0DED5",
  white: "#FFFFFF",
};

export interface PaddingMixingProps {
  padding?: SeparationSize;
  paddingHorizontal?: SeparationSize;
  paddingVertical?: SeparationSize;
  paddingLeft?: SeparationSize;
  paddingRight?: SeparationSize;
  paddingTop?: SeparationSize;
  paddingBottom?: SeparationSize;
}

export const paddingMixin = css`
  ${(props: PaddingMixingProps) =>
    props.padding ? `padding: ${separationSizes[props.padding]};` : ""}
  ${(props: PaddingMixingProps) =>
    props.paddingHorizontal
      ? `padding: 0 ${separationSizes[props.paddingHorizontal]};`
      : ""}
  ${(props: PaddingMixingProps) =>
    props.paddingVertical
      ? `padding: ${separationSizes[props.paddingVertical]} 0;`
      : ""}
  ${(props: PaddingMixingProps) =>
    props.paddingTop
      ? `padding-top: ${separationSizes[props.paddingTop]};`
      : ""}
  ${(props: PaddingMixingProps) =>
    props.paddingRight
      ? `padding-right: ${separationSizes[props.paddingRight]};`
      : ""}
  ${(props: PaddingMixingProps) =>
    props.paddingBottom
      ? `padding-bottom: ${separationSizes[props.paddingBottom]};`
      : ""}
  ${(props: PaddingMixingProps) =>
    props.paddingLeft
      ? `padding-left: ${separationSizes[props.paddingLeft]};`
      : ""}
`;

export interface FlexMixinProps {
  direction?: FlexDirection;
  size?: number;
}

const flexCss = css`
  display: flex;
  flex-direction: ${(props: FlexMixinProps) => props.direction || "row"};
  flex: ${(props: FlexMixinProps) => props.size || 1};
`;

export const flexMixin = css`
  ${(props) => (props.direction || props.size) && flexCss}
`;
