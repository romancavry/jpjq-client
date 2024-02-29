import * as React from 'react';
import { addYears, format, subYears } from 'date-fns';

import { ArrowSelector } from 'uikit/atoms';

interface YearSelectorProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (date: Date) => void;
  value: Date | number;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  onChange,
  value,
  ...rest
}) => {
  const onPrevious = React.useCallback(() => {
    onChange(subYears(value, 1));
  }, [value, onChange]);

  const onNext = React.useCallback(() => {
    onChange(addYears(value, 1));
  }, [value, onChange]);

  const label = format(value, 'yyyy');

  return (
    <ArrowSelector
      onPrevious={onPrevious}
      onNext={onNext}
      label={label}
      {...rest}
    />
  );
};

export default YearSelector;
