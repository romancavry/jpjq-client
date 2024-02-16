import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 12px;
  max-width: 100px;

  background: var(${COLOR.SUCCESS});
  border-radius: 8px;

  &[data-loss] {
    background: var(${COLOR.ERROR});
  }
`;

export const Percentage = styled.p`
  ${TEXT.MAIN};
  color: var(${COLOR.WHITE});
`;
