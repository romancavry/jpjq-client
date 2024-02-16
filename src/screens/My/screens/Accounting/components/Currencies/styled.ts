import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Table = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 90px;
  align-items: center;
  gap: 12px;
`;

export const Abbr = styled.abbr`
  ${TEXT.MAIN};
  color: var(${COLOR.MAIN});

  span {
    ${TEXT.SMALL_1};
    color: var(${COLOR.MAIN_PALE});
  }
`;

export const Price = styled.p`
  ${TEXT.MAIN_BOLD};
  color: var(${COLOR.MAIN});
`;
