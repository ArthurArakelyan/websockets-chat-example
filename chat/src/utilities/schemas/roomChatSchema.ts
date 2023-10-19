import * as yup from 'yup';

import { requiredMessage } from '../../constants';

const roomChatSchema = yup.object({
  message: yup.string().required(requiredMessage),
});

export default roomChatSchema;
