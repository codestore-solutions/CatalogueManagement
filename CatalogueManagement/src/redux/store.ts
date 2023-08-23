import {configureStore} from '@reduxjs/toolkit';
import ProfileState from './profileState';

export const store = configureStore({
  reducer: {ProfileState},
});
