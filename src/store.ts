import { counterReducer } from './features/counter/counter-slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type GetStateType = typeof store.getState;

export type RootState = ReturnType<GetStateType>;

