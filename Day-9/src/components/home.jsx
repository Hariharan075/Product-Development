import REACT from "react";
import "./home.css";
import { useSelector } from 'react-redux';
import Chatbot from "../ChatBot";
import { Link } from "react-router-dom";
import Sidebar from "../sidenav/sidebar";

import Rightsidebar from "../sidenav/rightsidebar";
import ShowPost from "./ShowPost";

function Home() {
  const posts = useSelector((state) => state.postsReducer);
  return (
    <>
      <div className="home">
        <input
          className="home_search_bar"
          type="search"
          placeholder="Search"
        ></input>
        <h1 className="logout"><Link to="/login" style={{textDecoration:"none"}}>LogOut</Link></h1>
        <h1>Potato</h1>
       
     
      </div>
      <Sidebar />
  
      <Rightsidebar />
     <div><ul>
      {posts?.map((post) => (
        <li key={post.image}>
          <img src={post.image} alt={post.caption} />
          <p>{post.caption}</p>
        </li>
      ))}
    </ul></div>
    </>
  );
}
export default Home;
