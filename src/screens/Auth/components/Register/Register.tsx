import * as React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { api } from 'api/index';

import type { AuthValues } from 'modules/auth';
import { DEFAULT_MY_PAGE_ROUTE } from 'modules/common';

import { Button } from 'uikit/atoms';
import { alert } from 'uikit/molecules';

import { Input } from 'components/Form';

import {
  Inputs,
  submitButtonStyle,
  Text,
  TypeWrapper as Wrapper,
} from '../../styled';
import validation from '../../validation';

interface RegisterProps {
  onLoginPush: () => void;
}

const Register: React.FC<RegisterProps> = ({ onLoginPush }) => {
  const navigate = useNavigate();

  const [register, { isLoading }] = api.useRegisterMutation();

  const onRegister = React.useCallback(
    async (values: AuthValues) => {
      try {
        const { username, password } = values;

        await register({ username, password }).unwrap();

        alert.success({
          title: 'Вы успешно зарегистрировались!',
        });

        navigate(DEFAULT_MY_PAGE_ROUTE);
      } catch (err) {
        // @ts-ignore
        const { errors } = err.data;

        errors.forEach((error: any) => {
          alert.error({
            title: error.message,
          });
        });
      }
    },
    [navigate, register],
  );

  return (
    <FinalForm
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={onRegister}
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
