import { Field } from 'react-final-form';

import { Input } from 'components/Form';

import { Wrapper } from './styled';

const Form = () => (
  <Wrapper>
    <Field name='currency' component={Input} label='Валюта' />

    <Field name='marketPrice' component={Input} label='Рыночная цена' />

    <Field name='buyPrice' component={Input} label='Кол-во' />
  </Wrapper>
);

export default Form;
