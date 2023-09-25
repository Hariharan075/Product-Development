import React, { useState } from 'react';
import "../sidenav/settings.css";
import { useSelector, useDispatch } from "react-redux";
import potato from "../images/—Pngtree—vector hand drawn cartoon potato_5469677.png"
function ProfilePicture() {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [caption, setCaption] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
  };

  const admin = useSelector((state) => state.admin.value);
  return (
    <div className="profile">
        <h3 className="username">{admin.email}</h3>
      {profilePicture ? (
        <img  className="uploaded-image" src={profilePicture} alt="Profile" />
        
      ) : (
        <div >
         <img className="default-profile" src={potato} />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="profile-picture-input"
        style={{ display: 'none' }}
      />
      <label htmlFor="profile-picture-input" className="change-picture-button">
        Change Profile Picture
      </label>
      <button className="caption" onClick={()=>setShowPopup(true)}>Add Caption</button>
      {caption && <p className="postcaption">{caption}</p>}
      {showPopup && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label>
              Enter Caption:
              <input
                type="text"
                value={caption}
                onChange={handleCaptionChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  
  );
}

export default ProfilePicture;
