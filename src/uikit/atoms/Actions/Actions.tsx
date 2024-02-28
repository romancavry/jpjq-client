import * as React from 'react';

import { Wrapper } from './styled';

export interface ActionsProps {
  children: React.ReactNode;
  className?: string;
  leftAlign?: boolean;
  withMargin?: boolean;
}

const Actions: React.FC<ActionsProps> = ({
  className,
  children,
  leftAlign,
  withMargin,
  ...rest
}) => (
  <Wrapper
    className={className}
    data-left-align={leftAlign || undefined}
    data-with-margin={withMargin || undefined}
    {...rest}
  >
    {children}
  </Wrapper>
);

export default Actions;
