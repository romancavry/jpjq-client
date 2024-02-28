import * as React from 'react';

import { CaretDown } from 'assets/icons/40';

import { InteractiveIcon } from './styled';

export interface OpeningArrowProps {
  opened: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpened: (newOpened: boolean) => void;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const OpeningArrow: React.FC<OpeningArrowProps> = ({
  setOpened,
  opened,
  icon = CaretDown,
  ...rest
}) => (
  <InteractiveIcon
    icon={icon}
    data-opened={opened ? true : undefined}
    onClick={() => setOpened(!opened)}
    variant='accent'
    {...rest}
  />
);

export default OpeningArrow;
