import { createSlice } from '@reduxjs/toolkit'

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    itemsInLike: [],
  },
  reducers: {
    setItemInLike: (state, action) => {
      state.itemsInLike.push(action.payload)
    },
    deleteItemFromLike: (state, action) => {
      state.itemsInLike = state.itemsInLike.filter(book => book.isbn13!== action.payload)
    },
  }
});


export const { setItemInLike, deleteItemFromLike } = likeSlice.actions;
export default likeSlice.reducer;