import * as React from 'react';
import DayPicker from 'react-day-picker';
import { format, isFuture, isToday, isValid } from 'date-fns';

import { MonthSelector, YearSelector } from './components';
import { Selectors, Wrapper } from './styled';

export const MONTHS = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  kz: [
    'Қаңтар',
    'Ақпан',
    'Наурыз',
    'Сәуір',
    'Мамыр',
    'Маусым',
    'Шілде',
    'Тамыз',
    'Қыркүйек',
    'Қазан',
    'Қараша',
    'Желтоқсан',
  ],
};

export interface CalendarProps {
  value?: any;
  locale?: 'ru' | 'en' | 'kz';
  // eslint-disable-next-line no-unused-vars
  onChange: (date: Date) => void;
  onDayMouseDown: (
    // eslint-disable-next-line no-unused-vars
    day: Date,
    // eslint-disable-next-line no-unused-vars
    modifiers: unknown,
    // eslint-disable-next-line no-unused-vars
    e: React.SyntheticEvent,
  ) => void;
  className?: string;
  disableFutureDatesSelect?: boolean;
  forcedSelectedYear?: number;
  modifiers?: {
    highlighted?: Date | Date[];
  };
  initVisibleDate?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  locale = 'ru',
  onChange,
  className,
  onDayMouseDown,
  disableFutureDatesSelect,
  forcedSelectedYear,
  modifiers,
  initVisibleDate,
  ...rest
}) => {
  const [visibleDate, setVisibleDate] = React.useState(
    value || (initVisibleDate ? new Date(initVisibleDate) : new Date()),
  );

  React.useEffect(() => {
    if (
      value !== visibleDate &&
      value &&
      isValid(value) &&
      +format(value, 'yyyy') > 2000
    ) {
      setVisibleDate(value);
    }
  }, [value]); // eslint-disable-line

  const onDayClick = React.useCallback(
    // @ts-ignore
    (day, modifiers, e) => {
      e.stopPropagation();
      e.preventDefault();

      if (disableFutureDatesSelect && !isToday(day) && isFuture(day)) {
        return;
      }

      onChange(day);
    },
    [disableFutureDatesSelect, onChange],
  );

  return (
    <Wrapper
      className={className}
      onMouseDown={e => {
        e.stopPropagation();
        e.preventDefault();
      }}
      {...rest}
    >
      <Selectors>
        <MonthSelector
          forcedSelectedYear={forcedSelectedYear}
          value={visibleDate}
          monthNames={MONTHS[locale]}
          onChange={setVisibleDate}
        />

        <YearSelector
          nextDisabled={!!forcedSelectedYear}
          previousDisabled={!!forcedSelectedYear}
          value={visibleDate}
          onChange={setVisibleDate}
        />
      </Selectors>

      <DayPicker
        captionElement={() => null}
        showWeekDays={false}
        canChangeMonth={false}
        firstDayOfWeek={1}
        enableOutsideDaysClick={false}
        showOutsideDays
        month={visibleDate}
        selectedDays={value || null}
        onDayMouseDown={onDayMouseDown}
        onDayClick={onDayClick}
        modifiers={modifiers}
        disabledDays={
          disableFutureDatesSelect ? { after: new Date() } : undefined
        }
      />
    </Wrapper>
  );
};

export default Calendar;
