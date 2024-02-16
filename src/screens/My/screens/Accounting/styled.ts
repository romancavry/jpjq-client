import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

import { Card as _Card } from 'components/Card';
import { Columns as _Columns } from 'components/Columns';

export const Wrapper = styled.div`
  padding: 25px 15px;
`;

export const Card = styled(_Card)``;

export const CardTitle = styled.h4`
  margin-bottom: 24px;

  ${TEXT.H4};
  color: var(${COLOR.MAIN});
  font-weight: 600;
`;

export const Columns = styled(_Columns)``;
