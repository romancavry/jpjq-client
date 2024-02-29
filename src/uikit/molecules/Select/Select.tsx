import * as React from 'react';

import { Dropdown } from 'uikit/atoms/index';

import { Button, Options } from './components';
import { ContentWrapper, Search, Wrapper } from './styled';
import type { OptionType } from './types';

type DropdownProps = React.ComponentProps<typeof Dropdown>;

export type { OptionType };
export interface SelectProps {
  value?: any;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: OptionType['value'] | OptionType['value'][]) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  // eslint-disable-next-line no-unused-vars
  getInputValue?: (value: OptionType['value']) => void;
  searchValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChangeSearch?: (e: React.ChangeEvent) => void;
  renderButtonLeft?: () => void;
  // eslint-disable-next-line no-unused-vars
  renderButtonValue?: (data: { value: OptionType['value'] }) => void;
  // eslint-disable-next-line no-unused-vars
  renderOptions?: (data: {
    value: OptionType['value'];
    // eslint-disable-next-line no-unused-vars
    onSelect: (newValue: OptionType['value']) => void;
  }) => React.ReactNode;
  options: OptionType[];
  showHint?: boolean;
  withSearch?: boolean;
  multi?: boolean;
  disabled?: boolean;
  allowOpen?: boolean;
  label?: string;
  error?: string;
  helperText?: string;
  placement?: DropdownProps['placement'];
  maxWidth?: DropdownProps['maxWidth'];
  className?: string;
  searchPlaceholder?: string;
  buttonComponent?: any;
  placeholder?: string;
}

const getMultipleInputValue = (values: OptionType[]) =>
  values.map(item => item.title).join(', ');

const getSingleInputValue = (value: OptionType) => value.title;

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  onFocus,
  onBlur,
  buttonComponent,
  multi: multiple = false,
  getInputValue: customGetInputValue,
  allowOpen,
  label: inputLabel,
  placeholder: inputPlaceholder,
  error,
  disabled,
  className,
  placement = 'bottom-end',
  helperText,
  withSearch,
  showHint = false,
  renderOptions,
  renderButtonValue,
  renderButtonLeft,
  onChangeSearch,
  searchValue,
  searchPlaceholder,
  maxWidth,
  ...rest
}) => {
  const [opened, setOpened] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const preventOptionsClick = React.useRef(false);
  const preventBlur = React.useRef(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const openedRef = React.useRef<boolean>(false);

  const filteredOptions = React.useMemo(
    () =>
      withSearch && search
        ? (options || []).filter(
            option =>
              typeof option.title === 'string' &&
              option.title.toLowerCase().includes(search.toLowerCase()),
          )
        : options,
    [options, search, withSearch],
  );

  const onSelect = (newValue: OptionType['value']) => {
    if (multiple) {
      if (value.includes(newValue)) {
        onChange(
          value.filter((item: OptionType['value']) => item !== newValue),
        );
      } else {
        onChange([...value, newValue]);
      }
    } else {
      onChange(newValue);

      setOpened(false);
    }
  };

  const selected = multiple
    ? value?.length > 0 &&
      (options || []).filter(item => value.includes(item.value))
    : (options || []).find(item => item.value === value);

  const defaultGetInputValue = multiple
    ? getMultipleInputValue
    : getSingleInputValue;

  const getInputValue = customGetInputValue || defaultGetInputValue;

  const inputValue = selected ? getInputValue(selected) : null;

  React.useEffect(() => {
    if (opened) {
      const listener = (e: MouseEvent) => {
        if (
          !wrapperRef?.current?.contains(e.target as Node) &&
          !optionsRef?.current?.contains(e.target as Node)
        ) {
          if (!preventOptionsClick.current) {
            setOpened(false);

            if (onBlur) {
              onBlur();
            }
          }
        }
      };

      window.addEventListener('click', listener);

      return () => {
        window.removeEventListener('click', listener);
      };
    }

    return undefined;
  }, [opened, onBlur]);

  const onOptionsMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    preventBlur.current = true;

    e.stopPropagation();
  };

  const onButtonMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (opened) {
      preventBlur.current = true;
    } else {
      preventOptionsClick.current = true;

      setTimeout(() => {
        preventOptionsClick.current = false;
      }, 150);

      if (onFocus) {
        onFocus();
      }
    }

    setOpened(prevOpened => !prevOpened);
  };

  const onButtonKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        !openedRef.current &&
        ['Space', 'ArrowDown', 'ArrowUp'].includes(e.code)
      ) {
        e.preventDefault();

        if (openedRef.current) {
          preventBlur.current = true;
        } else {
          preventOptionsClick.current = true;

          setTimeout(() => {
            preventOptionsClick.current = false;
          }, 150);

          if (onFocus) {
            onFocus();
          }
        }

        setOpened(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  React.useEffect(() => {
    openedRef.current = opened;
  }, [opened]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (openedRef.current && e.code === 'Escape') {
        setOpened(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onButtonBlur = () => {
    if (!preventBlur.current) {
      setOpened(false);

      if (onBlur) {
        onBlur();
      }
    } else {
      preventBlur.current = false;
    }
  };

  const buttonProps = {
    setOpened,
    renderLeftActions: renderButtonLeft,
    disabled: disabled && !allowOpen,
    filled: !!selected,
    opened,
    onFocus,
    onMouseDown: !disabled ? onButtonMouseDown : null,
    onKeyDown: !disabled ? onButtonKeyDown : null,
    onBlur: !disabled ? onButtonBlur : null,
    inputValue: renderButtonValue ? renderButtonValue({ value }) : inputValue,
    invalid: !!error,
    inputLabel,
    inputPlaceholder,
    showHint,
    helperText,
  };

  const ButtonComponent = buttonComponent || Button;

  return (
    <Wrapper ref={wrapperRef} className={className} {...rest}>
      <Dropdown
        maxWidth={maxWidth}
        usePortal
        trigger='manual'
        opened={opened}
        placement={placement}
        renderContent={() => (
          <ContentWrapper>
            {withSearch && (
              <Search
                autoFocus
                onClick={e => e.stopPropagation()}
                value={searchValue || search}
                onChange={onChangeSearch || (e => setSearch(e.target.value))}
                placeholder={searchPlaceholder}
              />
            )}

            {renderOptions ? (
              renderOptions({ value, onSelect })
            ) : (
              <Options
                multiple={multiple}
                options={filteredOptions}
                value={value}
                onSelect={onSelect}
                onMouseDown={onOptionsMouseDown}
                ref={optionsRef}
                disabled={disabled}
              />
            )}
          </ContentWrapper>
        )}
      >
        <ButtonComponent {...buttonProps} />
      </Dropdown>
    </Wrapper>
  );
};

export default Select;
