import * as React from 'react';

import { api } from 'api/index';
import { useAppSelector } from 'api/store';

import { getCurrenciesBySlug } from 'modules/crypto/selectors';
import type { Transaction as TransactionType } from 'modules/my';

import { CardTitle } from 'components/Card';
import { Columns } from 'components/Columns';
import { NoData } from 'components/NoData';

import { Transaction } from './components';
import { columnStyle, List, Wrapper } from './styled';

const Income = () => {
  const currenciesBySlug = useAppSelector(getCurrenciesBySlug);

  const { data, isLoading: loading } = api.useGetTransactionsQuery();
  const transactions: TransactionType[] = data ? data.data : [];

  // Update store data
  api.useGetCryptoCurrenciesQuery();

  return (
    <Wrapper>
      <CardTitle>Ваш доход</CardTitle>

      {transactions.length && Object.keys(currenciesBySlug).length ? (
        <React.Fragment>
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

          <List>
            {transactions.map(transaction => (
              <Transaction key={transaction.id} item={transaction} />
            ))}
          </List>
        </React.Fragment>
      ) : (
        !loading && !transactions.length && <NoData />
      )}
    </Wrapper>
  );
};

export default Income;
