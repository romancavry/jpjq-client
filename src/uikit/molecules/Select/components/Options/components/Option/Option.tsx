import * as React from 'react';

import { Checkmark } from 'assets/icons/40';

import { IconWrapper, Wrapper } from './styled';

interface OptionsProps {
  id?: string;
  title: string | React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Option: React.FC<OptionsProps> = ({
  id,
  title,
  disabled,
  onClick,
  checked,
  className,
}) => (
  <Wrapper
    tabIndex={-1}
    id={id}
    onClick={disabled ? () => null : onClick}
    data-checked={checked ? true : undefined}
    data-disabled={disabled ? true : undefined}
    className={className}
  >
    <IconWrapper>
      <Checkmark />
    </IconWrapper>

    {title}
  </Wrapper>
);

export default Option;
