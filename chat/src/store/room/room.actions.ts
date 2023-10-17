import { createAction } from '@reduxjs/toolkit';

import { CREATE_ROOM } from './room.actionTypes';

import { IRoom } from 'types';

export const createRoom = createAction<IRoom>(CREATE_ROOM);
