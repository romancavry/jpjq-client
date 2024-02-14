import { css } from '@linaria/core';

import { TRANSITION, COLOR, SHADOW } from '../vars';

export default css`
  ${COLOR.ACCENT}: #44dbc8;
  ${COLOR.ACCENT_LIGHT}: #94d8cf;

  ${COLOR.MAIN}: #2E2A36;
  ${COLOR.MAIN_PALE}: #9DADB9;

  ${COLOR.BG}: #F8F9FA;
  ${COLOR.BG_2}: #2c4a90;

  ${COLOR.PALE}: #CFD8DC;
  ${COLOR.ERROR}: #F55252;
  ${COLOR.INFO}: #2094F0;
  ${COLOR.ALERT}: #FFC107;
  ${COLOR.SUCCESS}: #4AB34F;

  ${COLOR.WHITE}: #FFFFFF;
  ${COLOR.BLACK}: #000000;

  ${COLOR.GRADIENT_ACCENT}: linear-gradient(
    0deg,
    #FFFFFF 0%,
    #0d7473 100%
  );

  ${SHADOW.DARK}: 0px 15px 30px rgba(38, 50, 56, 0.15);

  ${TRANSITION.MAIN}: 0.2s ease-in-out;
`;
