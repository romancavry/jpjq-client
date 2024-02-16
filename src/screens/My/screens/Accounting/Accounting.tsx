import { Currencies } from './components';
import { Card, CardTitle, Columns, Wrapper } from './styled';

const Accounting = () => (
  <Wrapper>
    <Card>
      <CardTitle>Ваш доход</CardTitle>

      <Columns
        items={[
          {
            title: 'Торговые пары',
            flex: true,
          },
          {
            title: 'Последняя цена',
            flex: true,
          },
          {
            title: 'Цена покупки',
            flex: true,
          },
          {
            title: 'Изменение',
            width: 90,
          },
        ]}
      />

      <Currencies />
    </Card>
  </Wrapper>
);

export default Accounting;
