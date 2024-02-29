import * as React from 'react';

import { ArrowDown } from 'assets/icons/20';

import { Arrow, Input, Wrapper } from './styled';

interface ButtonProps {
  inputValue?: string | number;
  inputLabel?: string;
  helperText?: string;
  inputPlaceholder?: string;
  renderLeftActions: () => React.ReactNode;
  showHint?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  opened: boolean;
}

const Button = React.forwardRef<HTMLDivElement, ButtonProps>(
  (
    {
      inputValue,
      inputLabel,
      inputPlaceholder,
      opened,
      invalid,
      disabled,
      showHint,
      renderLeftActions,
      helperText,
      ...rest
    },
    ref,
  ) => (
    <Wrapper ref={ref} {...rest}>
      <Input
        readOnly
        renderLeftActions={renderLeftActions}
        label={inputLabel}
        placeholder={inputPlaceholder}
        value={inputValue ? String(inputValue) : ''}
        renderAction={() => (
          <Arrow data-opened={opened ? true : undefined}>
            <ArrowDown />
          </Arrow>
        )}
        error={invalid}
        disabled={disabled}
        containerProps={{
          'data-opened': opened ? true : undefined,
        }}
        helperText={helperText}
      />
    </Wrapper>
  ),
);

Button.propTypes = {};

export default Button;
