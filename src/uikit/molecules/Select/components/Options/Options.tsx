import * as React from 'react';

import { useKeyboardNavigation } from 'uikit/molecules/Select/hooks';
import type { OptionType } from 'uikit/molecules/Select/types';
import { getOptionId } from 'uikit/molecules/Select/utils/selectUtils';

import { Option } from './components';
import { Wrapper } from './styled';

interface OptionsProps {
  options: OptionType[];
  value?: any;
  // eslint-disable-next-line no-unused-vars
  onSelect: (value: OptionType['value']) => void;
  // eslint-disable-next-line no-unused-vars
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  multiple?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
  className?: string;
}

const Options = React.forwardRef<HTMLDivElement, OptionsProps>(
  ({ options, value, onSelect, onMouseDown, multiple, className }, ref) => {
    useKeyboardNavigation({ onSelect, options });

    React.useEffect(() => {
      const firstSelected = options.find(item =>
        multiple ? value.includes(item.value) : value === item.value,
      );

      if (firstSelected) {
        const firstSelectedElement = document.getElementById(
          getOptionId(firstSelected),
        );

        if (firstSelectedElement?.parentElement) {
          firstSelectedElement.parentElement.scrollTop =
            firstSelectedElement.offsetTop -
            firstSelectedElement.parentElement.offsetTop;
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Wrapper onMouseDown={onMouseDown} ref={ref}>
        {options.map(item => {
          const checked = multiple
            ? value.includes(item.value)
            : value === item.value;

          return (
            <Option
              id={getOptionId(item)}
              key={item.id ?? item.value ?? 'not-select-key'}
              onClick={() => onSelect(item.value)}
              checked={checked}
              title={item.title}
              disabled={item.disabled}
              className={className}
            />
          );
        })}
      </Wrapper>
    );
  },
);

export default Options;
