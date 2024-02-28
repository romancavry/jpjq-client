import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { COLOR } from 'uikit/vars';

export const collapseStyle = css`
  margin-bottom: 20px;
`;

export const collapseHeaderStyle = css`
  width: 100%;
  padding: 15px;

  background: var(${COLOR.WHITE});
  border-radius: 20px;

  &[data-opened] {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const CollapseTitle = styled.div``;

export const collapseContentStyle = css`
  background: var(${COLOR.WHITE});
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
