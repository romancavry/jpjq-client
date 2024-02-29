import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 100px;
`;

export const interactiveIconStyle = css`
  height: 100%;

  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:active {
    transition: none;
  }

  &:disabled {
    cursor: default;
  }
`;

export const Caption = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 10px;

  user-select: none;
  cursor: pointer;

  ${TEXT.MAIN};
  color: var(${COLOR.MAIN});
  text-align: center;
`;
