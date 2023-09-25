// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addPost } from '../actions';

// const CreatePost = () => {
//   const dispatch = useDispatch();
//   const [image, setImage] = React.useState(null);

//   const handleFileChange = (event) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(event.target.files[0]);
//   };

//   const handleCreatePost = () => {
//     const caption = document.querySelector('#caption').value;
//     dispatch(addPost(image, caption));
//   };

//   return (
//     <div>
//       <h1>Create post</h1>
//       <input type="file" onChange={handleFileChange} />
//       <input type="text" id="caption" placeholder="Caption" />
//       <button onClick={handleCreatePost}>Create post</button>
//     </div>
//   );
// };

// export default CreatePost;
import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions';
import { useHistory } from 'react-router-dom';
const CreatePost = () => {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);
  const history = useHistory();
  const handleFileChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleCreatePost = () => {
    const caption = document.querySelector('#caption').value;
    if (image) {
        dispatch(addPost(image.value, caption));
      } else {
        alert("image not found");
      }
    history.push("/adminDash");
  };

  return (
    <div>
      <h1>Create post</h1>
      <input type="file" onChange={handleFileChange} />
      <input type="text" id="caption" placeholder="Caption" />
      <button onClick={handleCreatePost}>Create post</button>
    </div>
  );
};

export default CreatePost