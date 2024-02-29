import * as React from 'react';

import { Container, Wrapper } from './styled';

interface ContentProps {
  className?: string;
  outOfBoundaries?: boolean;
  hideOnClick?: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpened?: (open: boolean) => void;
  props?: Record<string, unknown>;
  children?: React.ReactNode;
  maxWidth?: number;
}

const Content: React.FC<ContentProps> = ({
  children,
  props,
  outOfBoundaries,
  hideOnClick,
  className,
  setOpened,
  maxWidth,
  ...rest
}) => (
  <Wrapper
    {...props}
    maxWidth={maxWidth}
    data-max-width={maxWidth ? true : undefined}
    data-out-of-boundaries={outOfBoundaries ? true : undefined}
    {...rest}
  >
    <Container
      className={className}
      onClick={e => {
        if (hideOnClick && setOpened) {
          e.preventDefault();
          setOpened(false);
        }
      }}
    >
      {children}
    </Container>
  </Wrapper>
);

export default Content;
