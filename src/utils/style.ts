import { css } from "styled-components";

export type PaddingProp = keyof typeof separationSizes;

export const separationSizes = {
  default: "1rem",
  small: "1.5rem",
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
