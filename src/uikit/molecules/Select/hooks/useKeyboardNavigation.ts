import * as React from 'react';

import type { OptionType } from 'uikit/molecules/Select/types';
import { getOptionId } from 'uikit/molecules/Select/utils/selectUtils';
import { COLOR } from 'uikit/vars';

interface UseKeyboardNavigationProps {
  // eslint-disable-next-line no-unused-vars
  onSelect: (value: OptionType['value']) => void;
  options: OptionType[];
}

const useKeyboardNavigation = ({
  onSelect,
  options,
}: UseKeyboardNavigationProps) => {
  const focusedOptionIndexRef = React.useRef<number>(0);
  const optionsForFocusRef = React.useRef<OptionType[]>(options);

  React.useEffect(() => {
    optionsForFocusRef.current = options;
  }, [options]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.code)) {
        e.preventDefault();
        e.stopPropagation();

        const currentOption =
          optionsForFocusRef.current[focusedOptionIndexRef.current];

        if (!Number.isInteger(focusedOptionIndexRef.current)) {
          focusedOptionIndexRef.current = 0;
        } else if (
          e.code === 'ArrowDown' &&
          optionsForFocusRef.current.length - 1 > focusedOptionIndexRef.current
        ) {
          focusedOptionIndexRef.current++;
        } else if (e.code === 'ArrowUp' && focusedOptionIndexRef.current > 0) {
          focusedOptionIndexRef.current--;
        }

        const nextOption =
          optionsForFocusRef.current[focusedOptionIndexRef.current];

        if (['ArrowDown', 'ArrowUp'].includes(e.code)) {
          const id = getOptionId(nextOption);
          const nextElement = document.getElementById(id);

          // "focus" next option
          if (nextElement) {
            nextElement.style.backgroundColor = `var(${COLOR.BG_2})`;
            nextElement.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });
          }

          // reset bg of prev "focused" option
          if (currentOption) {
            const currentId = getOptionId(currentOption);
            const currentElement = document.getElementById(currentId);

            if (currentElement && currentId !== id) {
              currentElement.style.backgroundColor = 'transparent';
            }
          }
        }

        // select "focused" option
        if (e.code === 'Enter') {
          onSelect(nextOption.value);
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onSelect, options]);
};

export default useKeyboardNavigation;
