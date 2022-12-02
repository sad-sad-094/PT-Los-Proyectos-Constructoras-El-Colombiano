/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false
}

const userLogSlice = createSlice({
  name: 'isLogged',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogged = true;
    },
    logOut: (state) => {
      state.isLogged = false;
    }
  },
})

export default userLogSlice.reducer;

export const { logIn, logOut } = userLogSlice.actions;

