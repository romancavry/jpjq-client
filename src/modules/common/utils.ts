import { OptionType } from 'uikit/molecules/Select/types';

export const getRandomIndex = (length: number) =>
  Math.floor(Math.random() * length);

export const withEmptyOption = (options: OptionType[], emptyText?: string) => [
  {
    value: null,
    title: emptyText ?? 'Не выбрано',
  },
  ...options,
];
