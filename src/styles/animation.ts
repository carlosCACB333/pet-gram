import { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    filter: blur(8px);
  }
  to {
    opacity: 1;
    filter: blur(0px);
  }
`;

export const fadeInAnimation = (duration = '1s', type = 'ease') => {
  return css`
    animation: ${fadeIn} ${duration} ${type};
  `;
};
