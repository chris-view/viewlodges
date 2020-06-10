import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBlackberry } from "react-icons/fa";
import logo from "../images/header.JPG";
export default  Navbar => {
  // 
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(prev => !prev);
    //this.setState({ isOpen: !this.state.isOpen });
  }
   
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} style={{width:166.5, height:60}} alt="Viewlodges" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={handleToggle}
          >
            <FaBlackberry className="nav-icon" />
          </button>
        </div>
        <div className="dest-nav">
          <ul
            className={toggle ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
