import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
import cartReducer from './cart/reducer';
import likeReducer from './like/reducer';
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer,
        like: likeReducer,
        user: userReducer
    }
  })