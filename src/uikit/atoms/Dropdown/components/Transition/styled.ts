import { styled } from '@linaria/react';

const offset = 10;

export const animationTimeout = 400;
export const transitionClassName = 'dropdown';

export const Wrapper = styled.div<{ zIndex: number }>`
  z-index: ${p => p.zIndex};

  .${transitionClassName}-enter, .${transitionClassName}-appear {
    opacity: 0;

    &[data-placement*='bottom'] {
      transform: translate3d(0, -${offset}px, 0);
    }
    &[data-placement*='top'] {
      transform: translate3d(0, ${offset}px, 0);
    }
    &[data-placement*='left'] {
      transform: translate3d(${offset}px, 0, 0);
    }
    &[data-placement*='right'] {
      transform: translate3d(-${offset}px, 0, 0);
    }
  }

  .${transitionClassName}-enter-active, .${transitionClassName}-appear-active {
    opacity: 1;
    transition-duration: ${animationTimeout}ms;
    transition-property: opacity, transform;

    &[data-placement*='bottom'] {
      transform: translate3d(0, 0px, 0);
    }
    &[data-placement*='top'] {
      transform: translate3d(0, 0px, 0);
    }
    &[data-placement*='left'] {
      transform: translate3d(0, 0, 0);
    }
    &[data-placement*='right'] {
      transform: translate3d(0, 0, 0);
    }
  }

  .${transitionClassName}-exit {
    opacity: 1;

    &[data-placement*='bottom'] {
      transform: translate3d(0, 0px, 0);
    }
    &[data-placement*='top'] {
      transform: translate3d(0, 0px, 0);
    }
    &[data-placement*='left'] {
      transform: translate3d(0, 0, 0);
    }
    &[data-placement*='right'] {
      transform: translate3d(0, 0, 0);
    }
  }

  .${transitionClassName}-exit-active {
    opacity: 0;
    transition-duration: ${animationTimeout}ms;
    transition-property: opacity, transform;

    &[data-placement*='bottom'] {
      transform: translate3d(0, -${offset}px, 0);
    }
    &[data-placement*='top'] {
      transform: translate3d(0, ${offset}px, 0);
    }
    &[data-placement*='left'] {
      transform: translate3d(${offset}px, 0, 0);
    }
    &[data-placement*='right'] {
      transform: translate3d(-${offset}px, 0, 0);
    }
  }
`;
