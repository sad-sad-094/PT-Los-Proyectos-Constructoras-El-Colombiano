/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { configureStore } from '@reduxjs/toolkit';


import infoReducer from './UserInfoSlice';


export const Store = configureStore({
  reducer: infoReducer,
})
