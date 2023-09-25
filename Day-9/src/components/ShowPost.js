// // ShowPost.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removePost } from '../features/Post';
// import "../components/post.css";
// const ShowPost = () => {
//   const posts = useSelector((state) => state.post.posts);
//   const dispatch = useDispatch();

//   const handleDeletePost = (postId) => {
    
//     dispatch(removePost(postId));
//   };

//   return (
//     <div className='showpost'>
    
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>
//           {post.image && (
//             <img src={URL.createObjectURL(post.image)} alt="Post" style={{ maxWidth: '100%' }} />
//           )}
//           <p>{post.content}</p>
//           <p>Posted on: {new Date(post.createdAt).toLocaleString()}</p>
//           <button onClick={() => handleDeletePost(post.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   </div>
//   );
// };

// export default ShowPost;
