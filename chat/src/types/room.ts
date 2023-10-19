export interface IRoom {
  id: string;
  userName: string;
}

export interface IRoomData {
  userName: string;
}

export interface IMessage {
  id: string;
  roomId: string;
  message: string;
  userName: string;
  date: number;
}

export interface IMessageWithFrom extends IMessage {
  from: MessageFromType;
}

export interface IMessageData {
  message: string;
}

export type MessageFromType = 'user' | 'me';
