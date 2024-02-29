import * as React from 'react';
import Popover from '@yumkit/popover';
import { format, isValid, parse, setYear } from 'date-fns';

import { Calendar, Input } from 'uikit/atoms/index';

import { Calendar as CalendarIcon } from 'assets/icons/20';

import { getDateFnsLocale } from './localeUtils';
import { CalendarWrapper, Control, Dropdown, Wrapper } from './styled';

export const LOCALES = {
  EN: 'en',
  RU: 'ru',
  KZ: 'kz',
} as const;

export type LocalesType = (typeof LOCALES)[keyof typeof LOCALES];

type PopoverProps = React.ComponentProps<typeof Popover>;

export interface DatePickerProps {
  label?: string;
  withIcon?: boolean;
  placeholder?: string;
  disabled?: boolean;
  locale?: LocalesType;
  error?: string;
  className?: string;
  placement?: PopoverProps['placement'];
  dateFormat?: string;
  value?: Date | '';
  readOnly?: boolean;
  forcedInputChangeByValue?: boolean;
  changeInputValueByValue?: boolean;
  disableFutureDatesSelect?: boolean;
  forcedSelectedYear?: number;
  modifiers?: {
    highlighted?: Date | Date[];
  };
  initVisibleDate?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (date: string | null) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (e: React.SyntheticEvent) => void;
  // eslint-disable-next-line no-unused-vars
  onFocus?: (e: React.SyntheticEvent) => void;
}

const DatePicker = React.forwardRef<HTMLElement, DatePickerProps>(
  (
    {
      label,
      withIcon,
      placeholder,
      error,
      locale = 'ru',
      className,
      value,
      readOnly,
      forcedInputChangeByValue,
      forcedSelectedYear,
      disableFutureDatesSelect,
      modifiers,
      dateFormat = 'dd.MM.yyyy',
      placement = 'bottom-start',
      onChange,
      onBlur,
      onFocus,
      disabled,
      initVisibleDate,
      ...rest
    },
    ref,
  ) => {
    // A flag which lets us know that the value was updated by an internal call
    const valueUpdated = React.useRef(false);

    const [opened, setOpened] = React.useState(false);

    const [inputValue, setInputValue] = React.useState(
      value
        ? format(new Date(value), dateFormat, {
            locale: getDateFnsLocale(locale),
          })
        : '',
    );

    const onCalendarChange = React.useCallback(
      // @ts-ignore
      day => {
        onChange(day.toISOString());
        setInputValue(
          format(day, dateFormat, {
            locale: getDateFnsLocale(locale),
          }),
        );
        setOpened(false);
      },
      [onChange, dateFormat, locale],
    );

    const onInputChange = React.useCallback(
      // @ts-ignore
      e => {
        const newValue = e.target.value;

        setInputValue(newValue);

        const newDate = parse(newValue, dateFormat, new Date());

        setOpened(true);

        valueUpdated.current = true;

        if (isValid(newDate) || !newValue) {
          if (forcedInputChangeByValue) {
            const valueCorrect: boolean = newValue && newValue.length === 10;
            // avoid autocomplete, because character deleting will trigger input clear
            onChange(valueCorrect ? newDate.toISOString() : null);
          } else {
            onChange(newValue ? newDate.toISOString() : null);
          }
        } else {
          onChange(null);
        }
      },
      [dateFormat, forcedInputChangeByValue, onChange],
    );

    const onInputFocus = React.useCallback(
      (e: React.ChangeEvent<Element>) => {
        if (onFocus) {
          onFocus(e);
        }

        setOpened(true);
      },
      [onFocus],
    );

    const onInputBlur = React.useCallback(
      (e: React.FocusEvent<Element, Element>) => {
        if (onBlur) {
          onBlur(e);
        }

        setOpened(false);
      },
      [onBlur],
    );

    const onInputClick = React.useCallback(() => {
      setOpened(true);
    }, []);

    // @ts-ignore
    const onInputKeyDown = React.useCallback(e => {
      if (e.key === 'Escape') {
        setOpened(false);
      }
    }, []);

    // @ts-ignore
    const onDayMouseDown = React.useCallback((day, modifiers, e) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    React.useEffect(() => {
      if (forcedInputChangeByValue) {
        if (value) {
          setInputValue(
            format(new Date(value), dateFormat, {
              locale: getDateFnsLocale(locale),
            }),
          );
        } else {
          setInputValue('');
        }
      }
    }, [dateFormat, forcedInputChangeByValue, locale, value]);

    const calendarValue = React.useMemo(() => {
      if (forcedSelectedYear) {
        if (value) {
          return setYear(new Date(value), forcedSelectedYear);
        }

        return setYear(new Date(), forcedSelectedYear);
      }

      if (value) {
        return new Date(value);
      }

      return null;
    }, [forcedSelectedYear, value]);

    return (
      <Wrapper className={className} {...rest}>
        <Dropdown
          className={className}
          trigger='manual'
          opened={opened}
          placement={placement}
          renderContent={() => (
            <Calendar
              forcedSelectedYear={forcedSelectedYear}
              locale={locale}
              onChange={onCalendarChange}
              value={calendarValue}
              onDayMouseDown={onDayMouseDown}
              disableFutureDatesSelect={disableFutureDatesSelect}
              modifiers={modifiers}
              initVisibleDate={initVisibleDate}
            />
          )}
        >
          <Control>
            <Input
              ref={ref}
              label={label}
              placeholder={placeholder}
              error={error}
              readOnly={readOnly}
              value={inputValue}
              onChange={onInputChange}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onClick={onInputClick}
              onKeyDown={onInputKeyDown}
              disabled={disabled}
              renderAction={() =>
                withIcon ? (
                  <CalendarWrapper onClick={onInputClick}>
                    <CalendarIcon />
                  </CalendarWrapper>
                ) : null
              }
            />
          </Control>
        </Dropdown>
      </Wrapper>
    );
  },
);

export default DatePicker;
