/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  projects: [],
  clients: []
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.userInfo = action.payload
    },
  },
})

export default userInfoSlice.reducer;

export const { setInfo } = userInfoSlice.actions;