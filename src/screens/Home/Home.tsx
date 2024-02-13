import { Link } from 'react-router-dom';

import routes from 'core/routes/routes';

import { useAuth } from 'modules/auth/hooks';

import { Button } from 'uikit/atoms';

import { LendingLines } from 'assets/icons/other';

import { Wrapper, Title, Subtitle, linesStyle } from './styled';

const Home = () => {
  const { data } = useAuth();

  return (
    <Wrapper>
      <LendingLines className={linesStyle} />

      <Title>JPJQ</Title>
      <Subtitle>Pretty simple app to prevent family conflicts</Subtitle>

      <Link to={data ? routes.my : routes.auth}>
        <Button>Let&apos;s go</Button>
      </Link>
    </Wrapper>
  );
};

export default Home;
