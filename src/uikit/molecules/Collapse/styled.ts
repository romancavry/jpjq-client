import { styled } from '@linaria/react';

import { COLOR, MEDIA, TEXT, TRANSITION } from 'uikit/vars';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: var(${COLOR.BG});
  border-radius: 30px;

  .ReactCollapse--collapse {
    transition: height var(${TRANSITION.MAIN});
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;

  cursor: pointer;

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 10px 10px 10px 30px;
  }
`;

export const Title = styled.div`
  height: 100%;
  min-height: 40px; // opening arrow height
  display: flex;
  align-items: center;

  ${TEXT.H3};
`;

export const Content = styled.div`
  width: 100%;
  padding: 12px 20px 20px 20px;

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    padding: 12px 30px 30px 30px;
  }

  &[data-no-padding] {
    padding: 0;
  }
`;
