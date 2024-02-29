import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
`;

export const Search = styled.input`
  margin: 5px 10px 10px;
  padding: 10px 15px;

  ${TEXT.MAIN};

  border-radius: 4px;
  border: 1px solid var(${COLOR.PALE});
`;
