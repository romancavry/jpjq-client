import { styled } from '@linaria/react';

import { NAV_MENU_HEIGHT } from 'modules/my';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: ${NAV_MENU_HEIGHT}px;

  background: var(${COLOR.WHITE});
  border-top: 1px solid var(${COLOR.PALE});
`;

export const List = styled.ul`
  display: flex;
  margin: 0 auto;
  width: fit-content;
  height: 100%;
`;

export const Item = styled.li`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  &[data-active] {
    background: var(${COLOR.ACCENT});
  }
`;

export const Icon = styled.div`
  svg {
    fill: var(${COLOR.MAIN});
  }

  &[data-active] {
    svg {
      fill: var(${COLOR.WHITE});
    }
  }
`;

export const Title = styled.p`
  ${TEXT.MAIN};
  color: var(${COLOR.MAIN});

  &[data-active] {
    color: var(${COLOR.WHITE});
  }
`;
