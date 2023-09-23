import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "../App.css";
import potatoImage from "../Image/potato.png";
import logOut from "../Image/logout-removebg-preview.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/admin";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const drawerWidth = 240;


export default function AdminBars() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  

  const admin = useSelector((state) => state.admin.value);

  return (
   
    <div  classNAme="background">
    < div className="header">
  <nav class="navbar navbar-light bg-light justify-content-between">
  <div class="navbar-brand"><img className="img" src={potatoImage} alt=""/><h1 className="potato">PoTaTo</h1></div>
  <h2 className="head">HI,  {admin.email}! </h2>
  <form class="form-inline">
    <input className="search" type="search" placeholder="Search" aria-label="Search" />
    <button className="searchbtn" type="submit">Search</button>
    <div class="navbar-brand"><img className="img1" src={logOut} /><h1 className="logout">LogOut</h1></div>
    
  </form>
</nav>
    </div>     
       <div className="sidebar">
        <ul>
          <li>
            Dashboard
          </li>
          <li>
            Settings
          </li>
        </ul>
        </div>  
         
      
    </div>

    
  
  
  );
}
