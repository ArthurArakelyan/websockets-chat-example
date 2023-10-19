import { createReducer } from '@reduxjs/toolkit';

import { addMessage, createRoom } from './room.actions';

import { IRoomState } from './types';

const initialState: IRoomState = {
  room: null,
  messages: [],
};

const roomReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createRoom.fulfilled, (state, action) => {
      state.room = action.payload;
    })

    .addCase(addMessage, (state, action) => {
      state.messages.push(action.payload);
    })

    .addDefaultCase((state) => state);
});

export default roomReducer;
