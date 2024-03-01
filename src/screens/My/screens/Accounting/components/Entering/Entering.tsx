import * as React from 'react';
import { Form as FinalForm } from 'react-final-form';

import { api } from 'api/index';

import { ENTERING_VALUES, type EnteringValues } from 'modules/my';

import { Actions, Button } from 'uikit/atoms';
import { alert, Collapse } from 'uikit/molecules';

import { CardTitle } from 'components/Card';

import { getError } from 'utils/errorUtils';

import { Form } from './components';
import {
  collapseContentStyle,
  collapseHeaderStyle,
  collapseStyle,
  CollapseTitle,
} from './styled';
import validation from './validation';

const Entering = () => {
  const [createTransaction] = api.useCreateTransactionMutation();

  const onSubmit = React.useCallback(
    async (values: EnteringValues) => {
      try {
        await createTransaction(values).unwrap();

        alert.success({
          title: 'Транзакция успешно добавлена!',
        });
      } catch (err) {
        const error = getError(err);

        alert.error({
          title: error.msg,
        });
      }
    },
    [createTransaction],
  );

  return (
    <Collapse
      className={collapseStyle}
      headerClassName={collapseHeaderStyle}
      contentClassName={collapseContentStyle}
      title={
        <CollapseTitle>
          <CardTitle data-no-margin>Введите ваши покупки</CardTitle>
        </CollapseTitle>
      }
    >
      <FinalForm
        initialValues={ENTERING_VALUES}
        onSubmit={onSubmit}
        validate={validation()}
        render={({ handleSubmit, valid }) => (
          <div>
            <Form />

            <Actions withMargin>
              <Button
                variant='primary'
                onClick={handleSubmit}
                disabled={!valid}
              >
                Отправить
              </Button>
            </Actions>
          </div>
        )}
      />
    </Collapse>
  );
};

export default Entering;
