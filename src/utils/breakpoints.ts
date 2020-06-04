import { css } from "styled-components";

export const cssFor = {
  // 320px — 480px: Mobile devices.
  mobile: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)};
    }
  `,
  // 481px — 768px: iPads, Tablets.
  tablet: (...args) => css`
    @media (min-width: 481px) and (max-width: 768px) {
      ${css(...args)};
    }
  `,
  // 769px — 1200px: Small screens, laptops, desktops, large screens..
  laptop: (...args) => css`
    @media (min-width: 769px) and (max-width: 1200px) {
      ${css(...args)};
    }
  `,
  // 1201px and more — Extra large screens, TV.
  desktop: (...args) => css`
    @media (min-width: 1201px) {
      ${css(...args)};
    }
  `,
};
