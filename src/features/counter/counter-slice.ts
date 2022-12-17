import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // NOTE: Similar to useReducer hook + immer lib
    increment: (state) => {
      state.value += 1;
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
});

export const { increment, incrementAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
