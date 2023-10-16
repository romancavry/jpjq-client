import * as React from 'react';

import authApi from 'modules/auth/reducer';

import { Button } from 'uikit/atoms';

import { Wrapper } from './styled';

const Header = () => {
  // const user = authApi.endpoints.getUser.select()(getState()).isSuccess;

  return (
    <Wrapper>
      Привет, 
      <Button variant='ghost'>Выйти</Button>
    </Wrapper>
  );
};

export default Header;
