import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import loginReducer from '../redux/loginSlice';
import cartReducer from '../redux/cartSlice';

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    cart: cartReducer,
  },
});
