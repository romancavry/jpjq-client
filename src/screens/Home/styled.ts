import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  overflow: hidden;

  position: relative;

  padding: 12vw 15vw;
  width: 100vw;
  height: 100vh;

  background: var(${COLOR.GRADIENT_ACCENT});
`;

export const linesStyle = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0.1;
  transform: scale(5);
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  ${TEXT.H1};
  color: var(${COLOR.WHITE});
`;

export const Subtitle = styled.p`
  margin-bottom: 50px;

  ${TEXT.H4};
  color: var(${COLOR.MAIN});
`;
