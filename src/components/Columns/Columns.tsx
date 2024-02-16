import * as React from 'react';

import { Column, Wrapper } from './styled';

interface ColumnType {
  id?: string;
  title: React.ReactNode;
  width?: number;
  flex?: boolean;
  center?: boolean;
  left?: boolean;
  className?: string;
}

interface ColumnsProps {
  className?: string;
  items: ColumnType[];
}

const Columns: React.FC<ColumnsProps> = ({ items, className, ...rest }) => (
  <Wrapper className={className} {...rest}>
    {items.map(
      ({ title, width, flex, center, left, id, ...columnRest }, index) => (
        <Column
          key={id || (typeof title === 'string' ? title : index)}
          width={width || 0}
          data-has-width={Number.isFinite(width) ? true : undefined}
          data-flex={flex ? true : undefined}
          data-center={center ? true : undefined}
          data-left={left ? true : undefined}
          {...columnRest}
        >
          {title}
        </Column>
      ),
    )}
  </Wrapper>
);

export default Columns;
