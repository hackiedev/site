import { keyframes } from "styled-components";

const bounceY = keyframes`
  0%,
  100% {
    transform: translate3d(0, -10px, 0);
  }

  50% {
    transform: translate3d(0, 10px, 0);
  }
`;

export default {
  bounceY,
};
