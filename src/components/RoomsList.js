import React from "react";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { RoomContext } from "../context";
import { FaFacebook, FaYoutube, FaInstagram} from "react-icons/fa";
import RoomCard from "./RoomCard";
import LodgeRequest from "./LodgeRequest"
// import GoogleAd from "./GoogleAd";git

const RoomsList = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {school, region} = context;
  if (rooms.length === 0) {
    if(region.toLowerCase() !== "all"){
      return (
        <div className="empty-search">
          <h5>unfortunately, there is no matching lodge for now. Try again later!</h5>
        </div>
      );
    }else{
      return (
        <div className="empty-search">
          <h5>unfortunately, we are yet to receive lodges around {school}! </h5><br/>
          <a href="https://gleDwww.youtube.com/channel/UCJf0a6NnSk6Z7E3E-dY4csg" target="blank"><FaYoutube className="social-icon youtube" /></a>
          <a href="https://www.facebook.com/viewlodges" target="blank"><FaFacebook className="social-icon facebook" /></a>
          <Link to="#"><FaInstagram className="social-icon instagram" /></Link><br/><br/><br/>
          <em style = {{color:"grey", fontSize:"0.7em", lineHeight:"1.5"}}>Kindly Follow us to stay updated when Lodges around {school} are uploaded.</em>
              
        </div>
      ); 
    }
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item,idx) => {
         
         // Display ads after every four lodge views
         
         
           return(
           <React.Fragment key = {idx}>
              {/* {((idx+1) % 3 ===0) ?  // set to show ads after every three lodge views
                <div  >
                  <GoogleAd  timeout={500}  />
                </div>:""
              
              } */}
              <div >
                <RoomCard room={item}/>
              </div>
           </React.Fragment>
           )
         
        })}
        <div className = "empty-search" >
            <LodgeRequest text = "Would you like to also add a Lodge?"/>
        </div>
      </div>
    </section>
  );
};

export default RoomsList;
