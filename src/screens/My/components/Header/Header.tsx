import { Link } from 'react-router-dom';

import routes from 'core/routes/routes';

import { useAuth } from 'modules/auth/hooks';

import { Button } from 'uikit/atoms';

import { Avatar } from 'components/Avatar';

import { Name, User, Wrapper } from './styled';

const Header = () => {
  const { data } = useAuth();
  const user = data!;

  return (
    <Wrapper>
      <User>
        <Avatar src='https://random.imagecdn.app/50/50' title={user.username} />

        <div>
          <Name>{user.username}</Name>
        </div>
      </User>

      <Link to={routes.logout}>
        <Button variant='ghost'>Выйти</Button>
      </Link>
    </Wrapper>
  );
};

export default Header;
