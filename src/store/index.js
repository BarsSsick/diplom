import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
import cartReducer from './cart/reducer';
import likeReducer from './like/reducer';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer,
        like: likeReducer
    }
  })