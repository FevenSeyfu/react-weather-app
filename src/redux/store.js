import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import detailReducer from './detailSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    detail: detailReducer,
  },
});

export default store;
