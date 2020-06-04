import { css } from "styled-components";

export const separationSizes = {
  default: "1rem",
  small: "0.5rem",
  large: "6rem",
};

export type PaddingProp = keyof typeof separationSizes;

export const colors = {
  blue: "#1C4D63",
  black: "#232323",
  red: "#C52F38",
  grey: "#E0DED5",
  white: "#FFFFFF",
};

export interface PaddingMixingProps {
  padding?: PaddingProp;
  paddingHorizontal?: PaddingProp;
  paddingVertical?: PaddingProp;
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
`;
