import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';

export const Store = configureStore({
  reducer: {
    users: userReducer,
  },
});
