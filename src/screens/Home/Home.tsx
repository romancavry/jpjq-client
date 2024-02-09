import { Link } from 'react-router-dom';

import routes from 'core/routes/routes';

import { Button } from 'uikit/atoms';

import { LendingLines } from 'assets/icons/other';

import { Wrapper, Title, Subtitle, linesStyle } from './styled';

const Home = () => (
  <Wrapper>
    <LendingLines className={linesStyle} />

    <Title>JPJQ</Title>
    <Subtitle>Pretty simple app to prevent family conflicts</Subtitle>

    <Link to={routes.auth}>
      <Button>Let&apos;s go</Button>
    </Link>
  </Wrapper>
);

export default Home;
