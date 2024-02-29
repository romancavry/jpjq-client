import { styled } from '@linaria/react';

import { Dropdown as _Dropdown } from 'uikit/atoms/index';
import { SHADOW } from 'uikit/vars/index';

export const Wrapper = styled.div`
  display: table;
`;

export const Control = styled.div``;

export const Dropdown = styled(_Dropdown)`
  padding: 10px 20px;
  max-width: 280px;

  box-shadow: var(${SHADOW.DARK});
`;

export const CalendarWrapper = styled.div`
  padding-right: 10px;

  transform: translateY(2px);
`;
