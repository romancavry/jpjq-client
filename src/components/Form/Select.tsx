import * as React from 'react';
import { mapProps } from 'recompose';
import type { FieldRenderProps } from 'react-final-form';

import { withEmptyOption } from 'modules/common';

import { Select } from 'uikit/molecules';
import type { OptionType, SelectProps } from 'uikit/molecules/Select/Select';

type SelectFieldType = FieldRenderProps<string, HTMLElement> & SelectProps;

const SelectForm = mapProps<SelectProps, SelectFieldType>(props => {
  const { input, meta, onChange, ...rest } = props;
  const { error, touched, submitFailed, dirty } = meta;

  const onChangeCallback = (newValue: OptionType['value']) => {
    input.onChange(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return {
    ...rest,
    ...input,
    onChange: onChangeCallback,
    error: dirty || (touched && submitFailed) ? error : null,
  };
})(Select);

const SelectCmp: React.FC<SelectFieldType & { withEmpty: boolean }> = ({
  withEmpty,
  emptyText,
  options,
  ...rest
}) => (
  <SelectForm
    searchPlaceholder='Поиск'
    options={
      withEmpty || emptyText ? withEmptyOption(options, emptyText) : options
    }
    placeholder={withEmpty ? 'Не выбрано' : undefined}
    {...rest}
  />
);

export default SelectCmp;
