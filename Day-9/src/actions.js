export const addPost = (image, caption) => ({
    type: 'ADD_POST',
    payload: { image, caption },
  });