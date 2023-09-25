import { createSlice } from '@reduxjs/toolkit';

// export const adminSlice = createSlice({
//   name: 'post',
//   initialState: {
//     posts: [],
//   },
//   reducers: {
//     addPost: (state, action) => {
     
//       state.posts.push(action.payload);
//     },
//     removePost: (state, action) => {
 
//       const postIdToRemove = action.payload;
//       state.posts = state.posts.filter(post => post.id !== postIdToRemove);
//     },
//   },
// });

// export const { addPost, removePost } = adminSlice.actions;

// export default adminSlice.reducer;

  
  // Redux reducer
  const postsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_POST':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  export default postsReducer;
  