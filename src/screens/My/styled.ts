import { styled } from '@linaria/react';

import { NAV_MENU_HEIGHT } from 'modules/my';

import { COLOR } from 'uikit/vars';

export const Wrapper = styled.div`
  padding-bottom: ${NAV_MENU_HEIGHT}px;
  min-height: 100vh;

  background: var(${COLOR.BG_3});
`;
