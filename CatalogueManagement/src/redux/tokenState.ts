import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface TokenInterface {
  token: string;
}

const initialState: TokenInterface = {
  token: '',
};

export const TokenState = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {setToken} = TokenState.actions;

export default TokenState.reducer;
