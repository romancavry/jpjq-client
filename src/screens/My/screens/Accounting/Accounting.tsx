import { Helmet } from 'react-helmet';

import { Card, CardTitle } from 'components/Card';
import { Columns } from 'components/Columns';

import { Currencies, Entering } from './components';
import { columnStyle, Wrapper } from './styled';

const Accounting = () => (
  <Wrapper>
    <Helmet>
      <title>Учет</title>
    </Helmet>

    <Entering />

    <Card>
      <CardTitle>Ваш доход</CardTitle>

      <Columns
        className={columnStyle}
        items={[
          {
            title: 'Торговые пары',
          },
          {
            title: 'Последняя цена',
          },
          {
            title: 'Цена покупки',
          },
          {
            title: 'Изменение',
          },
        ]}
      />

      <Currencies />
    </Card>
  </Wrapper>
);

export default Accounting;
