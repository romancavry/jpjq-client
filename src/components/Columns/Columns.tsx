import * as React from 'react';

import { Column, Wrapper } from './styled';

interface ColumnType {
  title: React.ReactNode;
  center?: boolean;
  left?: boolean;
  className?: string;
}

interface ColumnsProps {
  items: ColumnType[];
  className: string;
}

const Columns: React.FC<ColumnsProps> = ({ items, className }) => (
  <Wrapper className={className}>
    {items.map(({ title, center, left, ...columnRest }, index) => (
      <Column
        key={typeof title === 'string' ? title : index}
        data-center={center ? true : undefined}
        data-left={left ? true : undefined}
        {...columnRest}
      >
        {title}
      </Column>
    ))}
  </Wrapper>
);

export default Columns;
