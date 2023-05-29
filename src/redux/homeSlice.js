import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: [],
};

const homeSlice = createSlice({
  name: 'weather',
  initialState,
  reducer: {},
});

export default homeSlice.reducer;
