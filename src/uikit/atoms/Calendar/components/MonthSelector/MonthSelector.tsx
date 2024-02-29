import * as React from 'react';
import { addMonths, format, getMonth, setMonth, subMonths } from 'date-fns';

import { ArrowSelector } from 'uikit/atoms';

interface MonthSelectorProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (date: Date) => void;
  value: Date | number;
  monthNames: string[];
  forcedSelectedYear?: number;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  onChange,
  value,
  monthNames,
  forcedSelectedYear,
  ...rest
}) => {
  const label = React.useMemo(() => {
    const monthNumber = format(value, 'M');

    return monthNames[+monthNumber - 1];
  }, [value, monthNames]);

  const onPrevious = React.useCallback(() => {
    if (forcedSelectedYear && getMonth(value) === 0) {
      onChange(setMonth(value, 11));
      return;
    }

    onChange(subMonths(value, 1));
  }, [forcedSelectedYear, value, onChange]);

  const onNext = React.useCallback(() => {
    if (forcedSelectedYear && getMonth(value) === 11) {
      onChange(setMonth(value, 0));
      return;
    }

    onChange(addMonths(value, 1));
  }, [forcedSelectedYear, value, onChange]);

  return (
    <ArrowSelector
      onPrevious={onPrevious}
      onNext={onNext}
      label={label}
      {...rest}
    />
  );
};

export default MonthSelector;
