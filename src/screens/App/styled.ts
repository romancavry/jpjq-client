import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  &[data-text-error] {
    p {
      ${TEXT.H1};
      color: var(${COLOR.ERROR});
    }
  }
`;
