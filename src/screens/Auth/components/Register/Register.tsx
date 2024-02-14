import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form as FinalForm, Field } from 'react-final-form';

import routes from 'core/routes/routes';

import { api } from 'api/index';
import type { AuthValues } from 'modules/auth';

import { Button } from 'uikit/atoms';
import { alert } from 'uikit/molecules';

import { Input } from 'components/Form';

import validation from '../../validation';
import {
  TypeWrapper as Wrapper,
  Text,
  Inputs,
  submitButtonStyle,
} from '../../styled';

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

        navigate(routes.my);
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
