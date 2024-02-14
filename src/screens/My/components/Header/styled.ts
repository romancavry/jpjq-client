import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Name = styled.p`
  ${TEXT.MAIN};
  color: var(${COLOR.BLACK});
`;
