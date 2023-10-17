import * as yup from 'yup';

import { maxLengthMessage, requiredMessage, validationLength } from '../../constants';

const roomSchema = yup.object({
  userName: yup.string().max(validationLength.base, maxLengthMessage.base).required(requiredMessage),
});

export default roomSchema;
