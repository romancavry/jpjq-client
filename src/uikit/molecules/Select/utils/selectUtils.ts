import type { OptionType } from 'uikit/molecules/Select/types';

export const getOptionId = (option: OptionType) =>
  `select-option-${option.id ?? option.title ?? option.value}`;
