import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  max-width: 720px;

  background: var(${COLOR.WHITE});
  border-radius: 40px;
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px;

  & > * {
    margin: 0 10px 20px;
  }

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  margin: 40px 0 30px;

  color: var(${COLOR.MAIN});
  ${TEXT.H3};
  text-align: center;
`;

export const Msg = styled.p`
  color: var(${COLOR.MAIN});
  ${TEXT.H4};
  text-align: center;
`;
