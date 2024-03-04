import * as React from 'react';

import { useAppSelector } from 'api/store';

import { roundNumber } from 'modules/common';
import { getCurrenciesBySlug } from 'modules/crypto/selectors';
import { Transaction as TransactionType } from 'modules/my';

import { PriceChanging } from 'components/PriceChanging';

import { Abbr, Item, Price } from './styled';

interface TransactionProps {
  item: TransactionType;
}

const Transaction: React.FC<TransactionProps> = ({ item }) => {
  const currenciesBySlug = useAppSelector(getCurrenciesBySlug);

  const { values } = currenciesBySlug[item.coinSlug.toLowerCase()];
  const valuesKey = Object.keys(values)[0];

  const currentPrice = valuesKey
    ? roundNumber({
        number:
          currenciesBySlug[item.coinSlug.toLowerCase()].values[valuesKey].price,
        toFixed: 2,
      })
    : null;

  const priceChangingPercentage = React.useMemo(() => {
    if (typeof currentPrice !== 'number') {
      return null;
    }

    const average = Number(item.averagePrice);

    return roundNumber({
      number: ((currentPrice - average) / average) * 100,
      toFixed: 2,
    });
  }, [currentPrice, item.averagePrice]);

  return (
    <Item>
      <Abbr>
        {item.coinSlug.toUpperCase()} <span>/USDT</span>
      </Abbr>

      <Price>{currentPrice ?? '...'}</Price>

      <Price>{Number(item.averagePrice).toFixed(2).toLocaleString()}</Price>

      {typeof priceChangingPercentage === 'number' ? (
        <PriceChanging percentage={priceChangingPercentage} />
      ) : (
        <div />
      )}
    </Item>
  );
};

export default Transaction;
