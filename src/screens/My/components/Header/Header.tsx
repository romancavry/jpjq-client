import { Button } from 'uikit/atoms';

import { Wrapper } from './styled';

const Header = () => (
  <Wrapper>
    Привет,
    <Button variant='ghost'>Выйти</Button>
  </Wrapper>
);

export default Header;
