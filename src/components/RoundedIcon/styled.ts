import { styled } from '@linaria/react';

import { COLOR } from 'uikit/vars';

export const Wrapper = styled.div<{
  width: number;
  height: number;
  iconColor?: string;
  background?: string;
  border?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${p => p.width}px;
  height: ${p => p.height}px;

  border-radius: 50%;
  background: ${p => (p.background ? `var(${p.background})` : 'transparent')};
  border: 1px solid ${p => (p.border ? `var(${p.border})` : 'transparent')};

  & > svg {
    fill: ${p => (p.iconColor ? `var(${p.iconColor})` : `var(${COLOR.WHITE})`)};
  }
`;
