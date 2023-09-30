import * as React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';

import type { AuthValues } from 'core/api/modules';

import { Button } from 'uikit/atoms';

import { Input } from 'components/Form';

import {
  Title,
  TypeWrapper as Wrapper,
  Text,
  Inputs,
  submitButtonStyle,
} from '../styled';

interface RegisterProps {
  onLoginPush: () => void;
}

const Register: React.FC<RegisterProps> = ({ onLoginPush }) => {
  const onRegister = React.useCallback((values: AuthValues) => {
    try {
      console.log('on Register values: ', values);
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
      onSubmit={onRegister}
      render={({ handleSubmit }) => (
        <Wrapper>
          <Title>Регистрация</Title>

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
            Зарегистрироваться
          </Button>

          <Text>
            Уже есть аккаунт?{' '}
            <Button type='button' variant='ghost' onClick={onLoginPush}>
              Войти
            </Button>
          </Text>
        </Wrapper>
      )}
    />
  );
};

export default Register;
