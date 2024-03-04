import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;

  ${TEXT.MAIN};
  color: var(${COLOR.MAIN});
  text-align: center;
  white-space: pre-wrap;

  background: var(${COLOR.BG});
  border-radius: 30px;

  &[data-with-margin] {
    margin: 18px 0;
  }
`;
