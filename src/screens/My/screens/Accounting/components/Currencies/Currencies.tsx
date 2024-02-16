import { PriceChanging } from 'components/PriceChanging';

import { Abbr, Item, Price, Table } from './styled';

const Currencies = () => (
  <Table>
    <Item>
      <Abbr>
        BTC <span>/USDT</span>
      </Abbr>

      <Price>{(52120.04).toFixed(2).toLocaleString()}</Price>

      <Price>{(37126).toFixed(2).toLocaleString()}</Price>

      <PriceChanging percentage={0.41} />
    </Item>

    <Item>
      <Abbr>
        ETH <span>/USDT</span>
      </Abbr>

      <Price>{(2838.9).toFixed(2).toLocaleString()}</Price>

      <Price>{(1801.21).toFixed(2).toLocaleString()}</Price>

      <PriceChanging percentage={-0.22} />
    </Item>
  </Table>
);

export default Currencies;
