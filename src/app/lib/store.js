// store.js
import { configureStore } from '@reduxjs/toolkit';

import usuariosReducer from './userSlice'

const store = configureStore({
  reducer: {
    usuarios: usuariosReducer, 
  },
});

export default store;