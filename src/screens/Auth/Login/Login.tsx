import * as React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';

import type { AuthValues } from 'modules';

import { Button } from 'uikit/atoms';

import { Input } from 'components/Form';

import {
  Title,
  TypeWrapper as Wrapper,
  Text,
  Inputs,
  submitButtonStyle,
} from '../styled';

interface LoginProps {
  onRegisterPush: () => void;
}

const Login: React.FC<LoginProps> = ({ onRegisterPush }) => {
  const onLogin = React.useCallback((values: AuthValues) => {
    try {
      console.log('on Login values: ', values);
    } catch (err) {
      // ...
    }
  }, []);

  return (
    <FinalForm
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={onLogin}
      render={({ handleSubmit }) => (
        <Wrapper>
          <Title>Вход</Title>

          <Inputs>
            <Field
              name='username'
              component={Input}
              placeholder='Имя пользователя'
            />

            <Field
              name='password'
              component={Input}
              type='password'
              placeholder='Пароль'
            />
          </Inputs>

          <Button onClick={handleSubmit} className={submitButtonStyle}>
            Войти
          </Button>

          <Text>
            Нет аккаунта?{' '}
            <Button type='button' variant='ghost' onClick={onRegisterPush}>
              Регистрация
            </Button>
          </Text>
        </Wrapper>
      )}
    />
  );
};

export default Login;
