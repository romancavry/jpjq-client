import { Helmet } from 'react-helmet';

import { Entering, Income } from './components';
import { Wrapper } from './styled';

const Accounting = () => (
  <Wrapper>
    <Helmet>
      <title>Учет</title>
    </Helmet>

    <Entering />

    <Income />
  </Wrapper>
);

export default Accounting;
