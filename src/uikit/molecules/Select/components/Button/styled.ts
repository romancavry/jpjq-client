import { styled } from '@linaria/react';

import { Input as _Input } from 'uikit/atoms/index';
import { COLOR } from 'uikit/vars/index';

const inputOpenedStyle = `
  border-color: var(${COLOR.MAIN_PALE});
`;

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

export const Input = styled(_Input)`
  width: 100%;

  & > div {
    cursor: pointer !important;
  }

  &[data-opened] {
    & > div {
      ${inputOpenedStyle};
    }
  }

  input {
    text-overflow: ellipsis;
  }
`;

export const Arrow = styled.div`
  flex-shrink: 0;
  padding: 10px;

  svg {
    display: block;
    fill: var(${COLOR.ACCENT});
    transition: transform 0.2s ease-in-out;
  }

  &[data-opened] {
    svg {
      transform: rotate(180deg);
    }
  }
`;
