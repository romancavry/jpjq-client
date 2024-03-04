import * as React from 'react';

import { Wrapper } from './styled';

interface NoDataProps {
  msg?: React.ReactNode;
  withMargin?: boolean;
}

const NoData: React.FC<NoDataProps> = ({ msg, withMargin, ...rest }) => (
  <Wrapper data-with-margin={withMargin ? true : undefined} {...rest}>
    {msg || 'Данные не найдены'}
  </Wrapper>
);

export default NoData;
