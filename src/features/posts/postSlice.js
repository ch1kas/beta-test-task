import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { addToLoadedPosts } = postsSlice.actions;

export default postsSlice.reducer;
