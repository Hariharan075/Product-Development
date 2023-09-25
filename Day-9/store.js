import { createStore } from 'redux';
import postsReducer from './src/features/Post';

const store = createStore(postsReducer);

export default store;