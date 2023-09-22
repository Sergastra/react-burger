import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './slices/ingredientSlice';
import orderReducer from './slices/orderSlice';

const store = configureStore({
  reducer: {
    ingredient: ingredientReducer,
    order: orderReducer,
  }
});

export default store;
