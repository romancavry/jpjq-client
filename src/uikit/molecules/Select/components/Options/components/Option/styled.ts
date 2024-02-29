import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars/index';

export const IconWrapper = styled.div`
  margin-right: 8px;

  color: transparent;

  svg {
    display: block;
    width: 24px;
    height: auto;

    fill: currentColor;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;

  ${TEXT.MEDIUM_1};
  color: var(${COLOR.MAIN});

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid var(${COLOR.PALE});
  }

  &:hover,
  &:focus {
    background-color: var(${COLOR.BG_3});
  }

  &[data-disabled] {
    cursor: not-allowed;
    color: var(${COLOR.BG_3});
  }

  &[data-checked] {
    ${IconWrapper} {
      color: var(${COLOR.ACCENT});
    }
  }
`;
