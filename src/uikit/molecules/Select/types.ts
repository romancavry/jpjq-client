import * as React from 'react';

export interface OptionType {
  id?: string;
  title: string | React.ReactNode;
  value?: any;
  disabled?: boolean;
}
