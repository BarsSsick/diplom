import { createSlice } from '@reduxjs/toolkit'

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    currentbook: null
  },
  reducers: {
    setCurrentbook: (state, action) => {
      state.currentbook = action.payload
    },
  }
});

export const { setCurrentbook } = booksSlice.actions;
export default booksSlice.reducer;