import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBlackberry, FaHome,  FaDoorOpen, FaCloudUploadAlt} from "react-icons/fa";
import logo from "../images/VL_logo_black.PNG";
export default  Navbar => {
  // 
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(prev => !prev);
    // this.setState({ isOpen: !this.state.isOpen });
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
        {/* {toggle ? `<div className ="overlay"></div>`:"" } */}
        <div className ="overlay"></div>
        <div className="dest-nav">
          <ul
            className={toggle ? "nav-links show-nav" : "nav-links"}
          >
            <li className="push">
                <Link to="/"><FaHome className="side-icon" />Home</Link>
            </li>
            <li className="push">
               <Link to="/"> <FaDoorOpen className="side-icon" />Login</Link>
            </li>
            <li className="push">
                 <Link to="/"><FaCloudUploadAlt className="side-icon" />Upload Lodge</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
