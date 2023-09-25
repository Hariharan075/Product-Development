import React from "react";
import "./rightsidebar.css";
import profile from "../images/profile.jpg";
import { Link } from "react-router-dom";
function Rightsidebar() {
  return (
    <div className="right_sidebar">
      <img src={profile}></img>
      <p>
        <Link to="/terms" style={{ color: "inherit", textDecoration: "none" }}>
          terms and conditions
        </Link>{" "}
        &nbsp;&nbsp;contactus &nbsp;&nbsp;&nbsp;{" "}
      </p>
      <p>
        <Link
          to="/privacy"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {" "}
          privacy policy{" "}
        </Link>
        &nbsp;&nbsp;
        <Link to="/faqs" style={{ color: "inherit", textDecoration: "none" }}>
          {" "}
          faq{" "}
        </Link>{" "}
      </p>
      <p> &#169; 2023 POTATO</p>
    </div>
  );
}

export default Rightsidebar;
