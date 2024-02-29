import { mapProps } from 'recompose';
import type { FieldRenderProps } from 'react-final-form';

import { DatePicker } from 'uikit/molecules';
import type { DatePickerProps } from 'uikit/molecules/DatePicker/DatePicker';

type DatePickerFieldType = FieldRenderProps<string, HTMLElement> &
  DatePickerProps;

const enhance = mapProps((props: DatePickerFieldType) => {
  const { input, meta, ...rest } = props;
  const { error, touched, submitFailed, dirty } = meta;

  return {
    ...rest,
    ...input,
    error: dirty || (touched && submitFailed) ? error : null,
  };
});

// @ts-ignore
const DatePickerControl = enhance(DatePicker);

export default DatePickerControl;
