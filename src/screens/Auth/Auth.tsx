import { Link, useNavigate, useParams } from 'react-router-dom';

import routes from 'core/routes/routes';

import { AUTH_TYPES, buildAuthPath } from 'modules/auth';

import { Button } from 'uikit/atoms';

import { ArrowRight } from 'assets/icons/20';

import { Login, Register } from './components';
import { Header, Title, Wrapper, linkStyle, Main } from './styled';

const Auth = () => {
  const { type } = useParams();

  const navigate = useNavigate();

  const onLoginPush = () => {
    navigate(buildAuthPath({ type: AUTH_TYPES.LOGIN }));
  };

  const onRegisterPush = () => {
    navigate(buildAuthPath({ type: AUTH_TYPES.REGISTER }));
  };

  return (
    <Wrapper>
      <Header>
        <Link to={routes.home} className={linkStyle}>
          <Button variant='ghost'>
            <ArrowRight />
          </Button>
        </Link>

        {type === AUTH_TYPES.LOGIN && <Title>Вход</Title>}
        {type === AUTH_TYPES.REGISTER && <Title>Регистрация</Title>}
      </Header>

      <Main>
        {type === AUTH_TYPES.LOGIN && <Login onRegisterPush={onRegisterPush} />}
        {type === AUTH_TYPES.REGISTER && <Register onLoginPush={onLoginPush} />}
      </Main>
    </Wrapper>
  );
};

export default Auth;
