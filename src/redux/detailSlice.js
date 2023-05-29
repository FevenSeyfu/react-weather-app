import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducer: {},
});

export default detailSlice.reducer;
