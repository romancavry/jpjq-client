import { styled } from '@linaria/react';

import { MEDIA } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  width: 100%;

  & > * {
    margin: 10px 0 0;
    width: 100%;
  }

  &[data-with-margin] {
    margin-top: 20px;
  }

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    & > * {
      width: auto;
      margin: 20px 0 0 20px;
    }
  }

  &[data-left-align] {
    justify-content: flex-start;

    @media (min-width: ${MEDIA.DESKTOP_1}) {
      & > * {
        margin: 20px 20px 0 0;
      }
    }
  }
`;
