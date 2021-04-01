import React from "react";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { RoomContext } from "../context";
import { FaFacebook, FaYoutube, FaInstagram} from "react-icons/fa";
import RoomieCard from "./RoomieCard";
import AdWrapper from "./AdWrapper"

const RoomieList = ({ roommies }) => {
  const context = useContext(RoomContext);
  const {region} = context;
  if (roommies.length === 0) {
    if(region.toLowerCase() !== "all"){
      return (
        <div className="empty-search">
          <h5>opps! No roommie requests lately, be the first to make a roomie request</h5>
        </div>
      );
    }else{
      return (
        <div className="empty-search">
          <h5>We are yet to receive roomie requests around, Be the first, its FREE!</h5><br/>
          <a href="https://www.youtube.com/channel/UCJf0a6NnSk6Z7E3E-dY4csg" target="blank"><FaYoutube className="social-icon youtube" /></a>
          <a href="https://www.facebook.com/viewlodges" target="blank"><FaFacebook className="social-icon facebook" /></a>
          <Link to="#"><FaInstagram className="social-icon instagram" /></Link><br/><br/><br/>
          <em style = {{color:"grey", fontSize:"0.7em", lineHeight:"1.5"}}>Kindly Like and Follow us to stay updated.</em>
              
        </div>
      ); 
    }
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {roommies.map((item,idx) => {
         
         // Display ads after every four lodge views
         
         if((idx+1)%5===0){ // set to show ads after every four lodge views
           return(
           <React.Fragment key = {idx}>
              <div  >
                <AdWrapper  />
              </div>
              <div  >
                <RoomieCard roommie={item}/>
              </div>
           </React.Fragment>
           )
         }else{
           return(
             <React.Fragment key = {idx}>
                <div  >
                  <RoomieCard  roommie={item}/>
                </div>
             </React.Fragment>
           )
         }
        })}
      </div>
    </section>
  );
};

export default RoomieList;
