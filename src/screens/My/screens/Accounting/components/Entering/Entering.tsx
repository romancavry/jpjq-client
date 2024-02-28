import * as React from 'react';
import { Form as FinalForm } from 'react-final-form';

import { ENTERING_VALUES, type EnteringValues } from 'modules/my';

import { Actions, Button } from 'uikit/atoms';
import { Collapse } from 'uikit/molecules';

import { CardTitle } from 'components/Card';

import { Form } from './components';
import {
  collapseContentStyle,
  collapseHeaderStyle,
  collapseStyle,
  CollapseTitle,
} from './styled';

const Entering = () => {
  const onSubmit = React.useCallback((values: EnteringValues) => {
    // eslint-disable-next-line no-console
    console.log('onSubmit values: ', values);
  }, []);

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
        render={({ handleSubmit }) => (
          <div>
            <Form />

            <Actions withMargin>
              <Button variant='primary' onClick={handleSubmit}>
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
