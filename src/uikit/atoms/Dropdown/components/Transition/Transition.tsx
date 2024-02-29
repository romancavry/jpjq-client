import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { animationTimeout, transitionClassName, Wrapper } from './styled';

interface TransitionProps {
  style: Record<string, unknown>;
  placement?: string;
  usePortal?: boolean;
  opened: boolean;
  content: React.ReactNode;
}

const PORTAL_Z_INDEX = 9999;

const Transition = React.forwardRef<HTMLDivElement, TransitionProps>(
  ({ style, opened, content, placement, usePortal }, ref) => {
    const mainPlacement = placement && placement.split('-')[0];

    return (
      <Wrapper ref={ref} style={style} zIndex={usePortal ? PORTAL_Z_INDEX : 1}>
        <TransitionGroup component={null}>
          {opened && (
            <CSSTransition
              appear
              classNames={transitionClassName}
              timeout={animationTimeout}
            >
              <div data-placement={mainPlacement}>{content}</div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Wrapper>
    );
  },
);

export default Transition;
