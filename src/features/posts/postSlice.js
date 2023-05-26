import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addToLoadedPosts: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToLoadedPosts } = postsSlice.actions;

export default postsSlice.reducer;
