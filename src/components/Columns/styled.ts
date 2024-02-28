import { styled } from '@linaria/react';

import { COLOR, MEDIA, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%;

  ${TEXT.TH};
  font-size: 8px;
  color: var(${COLOR.MAIN_PALE});

  svg {
    fill: currentColor;
  }

  @media (min-width: ${MEDIA.MOBILE_1}) {
    font-size: 10px;
  }

  @media (min-width: ${MEDIA.DESKTOP_2}) {
    font-size: 12px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;

  &[data-center] {
    justify-content: center;
  }

  &[data-left] {
    justify-content: flex-end;
  }
`;
