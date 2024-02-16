import { styled } from '@linaria/react';

import { COLOR, MEDIA, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  color: var(${COLOR.MAIN_PALE});
  ${TEXT.TH};
  font-size: 8px;

  svg {
    fill: currentColor;
  }

  @media (min-width: ${MEDIA.MOBILE_2}) {
    font-size: 12px;
  }
`;

export const Column = styled.div<{ width: number }>`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &[data-has-width] {
    width: ${p => p.width}px;
  }

  &[data-flex] {
    flex: 1 1 auto;
    flex-shrink: initial;
  }

  &[data-center] {
    justify-content: center;
  }

  &[data-left] {
    justify-content: flex-end;
  }
`;
