import { Action, ThunkAction } from '@reduxjs/toolkit';
import store from './store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>;
