import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ProfileInterface {
  id: number;
  name: string;
  email: string;
  contacts: string[];
  role: number;
  isActive: boolean;
}

const initialState: ProfileInterface = {
  id: 0,
  name: '',
  email: '',
  contacts: [],
  role: 0,
  isActive: false,
};

export const ProfileState = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileInterface>) => {
      state = action.payload;
    },
  },
});

export const {setProfile} = ProfileState.actions;

export default ProfileState.reducer;
