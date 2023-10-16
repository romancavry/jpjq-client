import * as React from 'react';
import { useRouter } from 'found';
import { Form as FinalForm, Field } from 'react-final-form';

import routeNames from 'core/routes/routeNames';

import authApi from 'modules/auth/reducer';
import type { AuthValues } from 'modules/auth';

import { Button } from 'uikit/atoms';
import { alert } from 'uikit/molecules';

import { Input } from 'components/Form';

import validation from '../validation';
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
  const { router } = useRouter();

  const [login, { isLoading }] = authApi.useLoginMutation();

  const onLogin = React.useCallback(
    async (values: AuthValues) => {
      try {
        const { username, password } = values;

        await login({ username, password }).unwrap();

        alert.success({
          title: 'Вы успешно вошли',
        });

        router.replace({
          pathname: routeNames.my,
        });
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
    [login, router],
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
