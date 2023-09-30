import * as React from 'react';

import Login from './Login/Login';
import Register from './Register/Register';

import { Wrapper } from './styled';

const Auth = () => {
  const [type, setType] = React.useState<'login' | 'register'>('register');

  const onLoginPush = () => {
    setType('login');
  };

  const onRegisterPush = () => {
    setType('register');
  };

  return (
    <Wrapper>
      {type === 'login' && <Login onRegisterPush={onRegisterPush} />}
      {type === 'register' && <Register onLoginPush={onLoginPush} />}
    </Wrapper>
  );
};

export default Auth;
