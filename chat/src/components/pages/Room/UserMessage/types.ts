import { IMessage, IMessageWithFrom } from 'types';

export interface IUserMessageProps {
  message: IMessage | IMessageWithFrom;
}
