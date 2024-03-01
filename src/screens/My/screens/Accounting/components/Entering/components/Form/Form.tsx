import * as React from 'react';
import { Field } from 'react-final-form';

import { DATE_FORMAT } from 'modules/common';

import { DatePicker, Input, Select } from 'components/Form';

import formatDateFormat from 'utils/form/formatDateFormat';
import parseDateFormat from 'utils/form/parseDateFormat';

import { Wrapper } from './styled';

const Form = () => {
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
        options={[
          { title: 'Aptos', value: 'apt' },
          { title: 'Bitcoin', value: 'btc' },
        ]}
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
