import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  height: 100vh;

  background: var(${COLOR.WHITE});
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding: 15px 20px;

  border-bottom: 1px solid var(${COLOR.PALE});
`;

export const linkStyle = css`
  transform: translateY(3px);

  svg {
    transform: rotate(180deg);
  }
`;

export const Title = styled.p`
  ${TEXT.H2};
  color: var(${COLOR.MAIN});
`;

export const Main = styled.main``;

// Login & Register
export const TypeWrapper = styled.div`
  padding: 20px;
  min-width: 350px;

  background: var(${COLOR.WHITE});
  border-radius: 15px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`;

export const submitButtonStyle = css`
  margin-bottom: 10px;
  width: 100%;
`;

export const Text = styled.p`
  ${TEXT.SMALL_1};
  color: var(${COLOR.MAIN});
  text-align: center;

  button {
    ${TEXT.SMALL_1};
    color: var(${COLOR.ACCENT}) !important;
  }
`;
