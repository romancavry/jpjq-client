import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { COLOR, MEDIA, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  overflow: hidden;

  position: relative;

  width: 100vw;
  height: 100vh;

  background: #2c4a90; // image background color
`;

export const Background = styled.img`
  position: absolute;
  top: 23%;
  left: 50%;

  width: 138%;

  object-fit: contain;
  transform: translateX(-50%);
`;

export const Main = styled.main`
  position: absolute;
  bottom: 0;

  margin-top: auto;
  padding: 60px 25px 25px;
  width: 100%;

  background: var(${COLOR.WHITE});
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
`;

export const Title = styled.h1`
  margin: 0 auto 8px;
  width: fit-content;

  // TEXT.H1, only font-size is changed
  font-size: 34px;
  font-weight: 500;
  line-height: 48px;

  font-size: 28px;
  color: var(${COLOR.MAIN});

  @media (min-width: ${MEDIA.MOBILE_1}) {
    ${TEXT.H1};
  }
`;

export const Subtitle = styled.p`
  margin: 0 auto 40px;
  width: fit-content;

  ${TEXT.H4};
  color: var(${COLOR.MAIN});
`;

export const linkStyle = css`
  display: block;
  margin-bottom: 12px;
  width: 100%;

  button {
    width: 100%;
  }
`;

export const Register = styled.div`
  margin: 0 auto;
  width: fit-content;

  ${TEXT.MEDIUM_2};
  color: var(${COLOR.MAIN});

  a {
    color: var(${COLOR.ACCENT});
  }
`;
