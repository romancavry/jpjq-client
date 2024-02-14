import { Link } from 'react-router-dom';

import { AUTH_TYPES, buildAuthPath } from 'modules/auth';
import { useAuth } from 'modules/auth/hooks';
import { DEFAULT_MY_PAGE_ROUTE } from 'modules/common';

import { Button } from 'uikit/atoms';

import { Market } from 'assets/img';

import {
  Wrapper,
  Background,
  Main,
  Title,
  Subtitle,
  linkStyle,
  Register,
} from './styled';

const Home = () => {
  const { data } = useAuth();

  return (
    <Wrapper>
      <Background src={Market} alt='market_background' />

      <Main>
        <Title>Cripto accounting</Title>
        <Subtitle>Keep it clever</Subtitle>

        <Link
          to={
            data
              ? DEFAULT_MY_PAGE_ROUTE
              : buildAuthPath({ type: AUTH_TYPES.LOGIN })
          }
          className={linkStyle}
        >
          <Button>Начать</Button>
        </Link>

        <Register>
          Нет аккаунта?{' '}
          <Link
            to={
              data
                ? DEFAULT_MY_PAGE_ROUTE
                : buildAuthPath({ type: AUTH_TYPES.REGISTER })
            }
          >
            Регистрация
          </Link>
        </Register>
      </Main>
    </Wrapper>
  );
};

export default Home;
