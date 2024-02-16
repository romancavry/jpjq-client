import { styled } from '@linaria/react';

import { COLOR, MEDIA } from 'uikit/vars';

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;

  background: var(${COLOR.WHITE});
  border-radius: 20px;

  &[data-row] {
    flex-direction: row;
  }

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 30px;
  }
`;
