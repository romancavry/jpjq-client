import * as Yup from 'yup';

import type { EnteringValues } from 'modules/my';

import { validate } from 'utils/validationUtils';

const getSchema = () =>
  Yup.object({
    slug: Yup.string().required(),
    amount: Yup.number().min(0.000000000001),
    buyPriceRub: Yup.number().min(1000),
    buyDate: Yup.string().required(),
  });

export default () => (values: EnteringValues) => validate(values, getSchema());
