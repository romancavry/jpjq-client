import * as React from 'react';

import { Wrapper } from './styled';

interface RoundedIconProps {
  children: React.ReactNode;
  background?: string;
  className?: string;
  iconColor?: string;
  width?: number;
  height?: number;
  borderColor?: string;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  children,
  iconColor,
  background,
  className,
  width = 34,
  height = 34,
  borderColor,
}) => (
  <Wrapper
    className={className}
    iconColor={iconColor}
    background={background}
    width={width}
    height={height}
    border={borderColor}
  >
    {children}
  </Wrapper>
);

export default RoundedIcon;
