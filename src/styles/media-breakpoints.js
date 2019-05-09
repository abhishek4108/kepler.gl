import {css} from 'styled-components';

export const breakPoints = {
  palm: 588,
  desk: 768
};

export const media = {
  palm: (...args) => css`
    @media (max-width: ${breakPoints.palm}px) {
      ${css(...args)};
    }
  `,

  portable: (...args) => css`
    @media (max-width: ${breakPoints.desk}px) {
      ${css(...args)};
    }
  `,

  desk: (...args) => css`
    @media (min-width: ${breakPoints.desk + 1}px) {
      ${css(...args)};
    }
  `
};
