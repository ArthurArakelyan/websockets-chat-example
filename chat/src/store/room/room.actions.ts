import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { socket } from 'utilities';

import { SEND_MESSAGE, CREATE_ROOM, ADD_MESSAGE } from './room.actionTypes';

import { IMessage, IMessageData, IMessageWithFrom, IRoom } from 'types';
import { RootState } from '../configureStore';

export const sendMessage = createAsyncThunk<void, IMessageData, { state: RootState }>(SEND_MESSAGE, (data, { dispatch, getState }) => {
  try {
    const room = getState().room.room;

    if (!room) {
      throw new Error('No Room');
    }

    const sendData: IMessage = {
      id: uuid(),
      message: data.message,
      roomId: room.id,
      userName: room.userName,
      date: Date.now(),
    };

    socket.emit(`chat:${room.id}`, sendData);

    dispatch(addMessage({
      ...sendData,
      from: 'me',
    }));
  } catch (error: any) {
    console.error(error);
    throw error;
  }
});

export const createRoom = createAsyncThunk<IRoom, IRoom>(CREATE_ROOM, (data) => {
  try {
    socket.emit('create chat', data.id);

    return data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
});

export const addMessage = createAction<IMessageWithFrom>(ADD_MESSAGE);
