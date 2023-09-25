// import React from 'react';
// import './Header.css'; // Import your CSS file for styling

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-left">
//         <h1 className="app-title">Social Media App</h1>
//       </div>
//       <div className="header-center">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search..."
//         />
//         <i className="fas fa-search search-icon"></i>
//       </div>
//       <div className="header-right">
//         <div className="user-profile">
//           <img
//             src="https://placeimg.com/40/40/people"
//             alt="User Profile"
//             className="user-profile-image"
//           />
//           <span className="user-name">John Doe</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.js
import React from 'react';
import './Header.css'; // Import your CSS for styling

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="header-right">
        <div className="profile">
          <img src="profile.png" alt="Profile" className="profile-image" />
          <span className="profile-name">User Name</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
