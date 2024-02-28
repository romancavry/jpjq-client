import { styled } from '@linaria/react';

import { InteractiveIcon as _InteractiveIcon } from 'uikit/atoms';
import { COLOR, TRANSITION } from 'uikit/vars';

export const InteractiveIcon = styled(_InteractiveIcon)`
  svg {
    transition: var(${TRANSITION.MAIN});
    transform: rotate(0deg);
    fill: var(${COLOR.ACCENT});
  }

  &[data-opened] {
    svg {
      transform: rotate(180deg);
      fill: var(${COLOR.ACCENT_LIGHT});
    }
  }
`;
