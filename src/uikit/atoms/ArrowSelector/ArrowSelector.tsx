import * as React from 'react';

import { InteractiveIcon } from 'uikit/atoms';

import { ArrowLeft, ArrowRight } from 'assets/icons/40';

import { Caption, interactiveIconStyle, Wrapper } from './styled';

export interface ArrowSelectorProps {
  onNext: () => void;
  onPrevious: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  label: string;
  className?: string;
}

const ArrowSelector: React.FC<ArrowSelectorProps> = ({
  onNext,
  onPrevious,
  label,
  previousDisabled,
  nextDisabled,
  className,
  ...rest
}) => (
  <Wrapper className={className} {...rest}>
    <InteractiveIcon
      className={interactiveIconStyle}
      onClick={onPrevious}
      disabled={previousDisabled}
      size='xs'
    >
      <ArrowLeft />
    </InteractiveIcon>

    <Caption>{label}</Caption>

    <InteractiveIcon
      className={interactiveIconStyle}
      onClick={onNext}
      disabled={nextDisabled}
      size='xs'
    >
      <ArrowRight />
    </InteractiveIcon>
  </Wrapper>
);

export default ArrowSelector;
