import { Field } from 'react-final-form';

import { Input, Select } from 'components/Form';

import { Wrapper } from './styled';

const Form = () => (
  <Wrapper>
    <Field
      name='currency'
      component={Select}
      label='Валюта'
      options={[
        { title: 'aboba', value: 'aboba' },
        { title: 'aboba2', value: 'aboba2' },
      ]}
    />

    <Field name='marketPrice' component={Input} label='Рыночная цена' />

    <Field name='buyPrice' component={Input} label='Кол-во' />
  </Wrapper>
);

export default Form;
