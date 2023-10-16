import { useRouter } from 'found';

import routeNames from 'core/routes/routeNames';

import { Button } from 'uikit/atoms';

import { LendingLines } from 'assets/icons/other';

import { Wrapper, Title, Subtitle, linesStyle } from './styled';

const Home = () => {
  const { router } = useRouter();

  return (
    <Wrapper>
      <LendingLines className={linesStyle} />

      <Title>JPJQ</Title>
      <Subtitle>Pretty simple app to prevent family conflicts</Subtitle>

      <Button
        onClick={() =>
          router.replace({
            pathname: routeNames.my,
          })
        }
      >
        Let&apos;s go
      </Button>
    </Wrapper>
  );
};

export default Home;
