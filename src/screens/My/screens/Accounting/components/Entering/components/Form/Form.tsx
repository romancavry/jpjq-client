import { Field } from 'react-final-form';

import { DatePicker, Input, Select } from 'components/Form';

import { Wrapper } from './styled';

const Form = () => (
  <Wrapper>
    <Field
      name='currency'
      component={Select}
      label='Монета'
      placeholder='Выберите монету из списка'
      options={[
        { title: 'Aptos', value: 'APT' },
        { title: 'Bitcoin', value: 'BTC' },
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
    />
  </Wrapper>
);

export default Form;
