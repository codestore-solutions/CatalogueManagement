import {configureStore} from '@reduxjs/toolkit';
import ProfileState from './profileState';
import TokenState from './tokenState';

export const store = configureStore({
  reducer: {ProfileState, TokenState},
});
