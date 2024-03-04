import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { Card } from 'components/Card';

export const Wrapper = styled(Card)``;

export const columnStyle = css`
  grid-template-columns: 1fr 1fr 1fr 90px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
