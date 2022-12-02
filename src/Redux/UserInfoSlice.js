/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    
  }
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    name: (state, action) => {
      state.userInfo.name = action.payload.name
    },
    projects: (state, action) => {
      state.userInfo.projects = action.payload.projects
    },
    clients: (state, action) => {
      state.userInfo.clients = action.payload.clients
    }
  },
})

export default userInfoSlice.reducer;

export const { name, projects, clients } = userInfoSlice.actions;
