import { IMessageWithFrom, IRoom } from 'types';

export interface IRoomState {
  room: IRoom | null;
  messages: IMessageWithFrom[];
}
