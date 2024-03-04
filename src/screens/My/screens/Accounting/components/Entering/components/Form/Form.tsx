import * as React from 'react';
import { Field } from 'react-final-form';

import { api } from 'api/index';
import { useAppSelector } from 'api/store';

import { DATE_FORMAT } from 'modules/common';
import { getCurrenciesBySlug } from 'modules/crypto/selectors';

import type { OptionType } from 'uikit/molecules';

import { DatePicker, Input, Select } from 'components/Form';

import formatDateFormat from 'utils/form/formatDateFormat';
import parseDateFormat from 'utils/form/parseDateFormat';

import { Wrapper } from './styled';

const Form = () => {
  const currenciesBySlug = useAppSelector(getCurrenciesBySlug);

  api.useGetCryptoCurrenciesQuery(undefined, {
    skip: !!Object.keys(currenciesBySlug).length,
  });

  const slugOptions = React.useMemo(() => {
    const options: OptionType[] = [];

    Object.values(currenciesBySlug).forEach(currency => {
      options.push({ title: currency.name, value: currency.slug });
    });

    return options;
  }, [currenciesBySlug]);

  const parseDate = React.useCallback(
    (value: string) => parseDateFormat(value, DATE_FORMAT),
    [],
  );

  const formatDate = React.useCallback(
    (value: string) => formatDateFormat(value, DATE_FORMAT) as string,
    [],
  );

  return (
    <Wrapper>
      <Field
        name='slug'
        component={Select}
        label='Монета'
        placeholder='Выберите монету из списка'
        options={slugOptions}
      />

      <Field
        name='amount'
        component={Input}
        label='Кол-во монет'
        placeholder='Укажите кол-во купленных монет'
      />

      <Field
        name='buyPriceRub'
        component={Input}
        label='Сумма в рублях'
        placeholder='Введите сумму покупки в ₽'
      />

      <Field
        name='buyDate'
        component={DatePicker}
        label='Дата покупки'
        placeholder='Укажите дату покупки'
        format={formatDate}
        parse={parseDate}
      />
    </Wrapper>
  );
};

export default Form;
