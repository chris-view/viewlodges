import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCloudUploadAlt, FaDiceSix} from "react-icons/fa";
import logo from "../images/VL_logo_black.PNG";
 const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(prev => !prev);
    // this.setState({ isOpen: !this.state.isOpen });
  }
  const hideNav = () => {
    setToggle(false);
  }
   
  return (
    <>
    <nav className={toggle ? "navbar nav-bar-curve": "navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img onClick = {hideNav} src={logo} style={{width:166.5, height:60}} alt="Viewlodges" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={handleToggle}
          >
            <FaDiceSix className="nav-icon" />
          </button>
        </div>
        <div className="dest-nav">
          <ul
            className={toggle ? "nav-links show-nav" : "nav-links"}
          >
            <li className="push" onClick = {hideNav}>
                <Link to="/"><FaHome className="side-icon" />Home</Link>
            </li>
            {/* <li className="push" onClick = {hideNav}>
               <Link to="/"> <FaDoorOpen className="side-icon" />Login</Link>
            </li> */}
            <li className="push" onClick = {hideNav}>
                 <Link to="/upload_lodge"><FaCloudUploadAlt className="side-icon" />Upload Lodge</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className={toggle ? "toggleOff":""} onClick = {hideNav}></div>
    </>
    
  );
}
export default Navbar;
