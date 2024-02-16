import * as React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { api } from 'api/index';

import type { AuthValues } from 'modules/auth';
import { DEFAULT_MY_PAGE_ROUTE } from 'modules/common';

import { Button } from 'uikit/atoms';
import { alert } from 'uikit/molecules';

import { Input } from 'components/Form';

import { getError } from 'utils/errorUtils';

import {
  Inputs,
  submitButtonStyle,
  Text,
  TypeWrapper as Wrapper,
} from '../../styled';
import validation from '../../validation';

interface LoginProps {
  onRegisterPush: () => void;
}

const Login: React.FC<LoginProps> = ({ onRegisterPush }) => {
  const navigate = useNavigate();

  const [login, { isLoading }] = api.useLoginMutation();

  const onLogin = React.useCallback(
    async (values: AuthValues) => {
      try {
        const { username, password } = values;

        await login({ username, password }).unwrap();

        alert.success({
          title: 'Вы успешно вошли!',
        });

        navigate(DEFAULT_MY_PAGE_ROUTE);
      } catch (err) {
        const error = getError(err);

        alert.error({
          title: error.msg,
        });
      }
    },
    [login, navigate],
  );

  return (
    <FinalForm
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={onLogin}
      validate={validation()}
      render={({ handleSubmit, valid }) => (
        <Wrapper>
          <Inputs>
            <Field
              name='username'
              label='Никнейм'
              component={Input}
              placeholder='Введите свой никнейм'
            />

            <Field
              name='password'
              label='Пароль'
              component={Input}
              type='password'
              placeholder='Введите пароль'
            />
          </Inputs>

          <Button
            onClick={handleSubmit}
            className={submitButtonStyle}
            loading={isLoading}
            disabled={!valid}
          >
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
