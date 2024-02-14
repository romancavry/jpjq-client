import { Link } from 'react-router-dom';

import routes from 'core/routes/routes';

import { useAuth } from 'modules/auth/hooks';

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

        <Link to={data ? routes.my : routes.auth} className={linkStyle}>
          <Button>Get Started</Button>
        </Link>

        <Register>
          Нет аккаунта?{' '}
          <Link to={data ? routes.my : routes.auth}>Регистрация</Link>
        </Register>
      </Main>
    </Wrapper>
  );
};

export default Home;
