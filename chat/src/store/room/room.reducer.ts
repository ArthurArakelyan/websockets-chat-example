import { createReducer } from '@reduxjs/toolkit';

import { createRoom } from './room.actions';

import { IRoomState } from './types';

const initialState: IRoomState = {
  room: null,
};

const roomReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createRoom, (state, action) => {
      state.room = action.payload;
    })

    .addDefaultCase((state) => state);
});

export default roomReducer;
