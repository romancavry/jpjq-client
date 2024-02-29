import { styled } from '@linaria/react';

import { COLOR } from 'uikit/vars';

export const Wrapper = styled.div<{ maxWidth?: number }>`
  transition: opacity 0.2s ease-in-out;

  &[data-max-width] {
    max-width: ${p => p.maxWidth || 0}px;
  }

  &[data-out-of-boundaries] {
    opacity: 0 !important;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;

  margin: 5px 0 0;

  background: var(${COLOR.WHITE});
  border: 1px solid var(${COLOR.PALE});
  border-radius: 10px;
`;
