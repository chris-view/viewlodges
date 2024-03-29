import React from "react";
import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/VL_fav_white.PNG";
import sponsorIcon from "../images/sponsorIcon.png";
import locationIcon from "../images/locationImg.png";


const roomieCard = memo(({ roommie }) => {
  const {id, level, gender, region, school, roommieAvatar, isRoommieFound, noOfRoommies, sponsored} = roommie;
 
  return (
    <article className="room">
      <div>
        <Link to={`/roommates/${id}`} >
            <div className="center-align-roomie" style = {{position:"relative"}}>
                <div className="avatars" >
                    <span className="avatar"  style={{zIndex:"100"}} >
                       
                      <img  src={roommieAvatar || defaultImg} width="100px" height="100px" alt="image1"/>
                      
                    </span>
                    {/* <span className="avatar">
                    
                        <img src= {unknownUser} width="100px" height="100px" alt="image2"/>
                    </span>
                    {noOfRoommies > 1 ? <span className="avatar">
                    
                        <img src= {unknownUser} width="100px" height="100px" alt="image3"/>
                    </span>:""}
                     */}
                </div>
                {/* {sponsored ? // display sponsored icon if user is been boosted 90px for two
                   noOfRoommies > 1 ?
                      <img style = {{position:"absolute", top:"0", left:"calc(50% - 90px)"}} src = {sponsorIcon} width="30px" height ="30px" alt ="sponsored2"/>
                    :
                    <img style = {{position:"absolute", top:"0", left:"calc(50% - 70px)"}} src = {sponsorIcon} width="30px" height ="30px" alt ="sponsored1"/>
                :""}   */}

                {sponsored ? // display sponsored icon if user is been boosted 90px for two
                   
                      <img style = {{position:"absolute", top:"0", left:"calc(50% - 55px)"}} src = {sponsorIcon} width="30px" height ="30px" alt ="sponsored2"/>      
              
                :""} 

            </div>
         
        </Link>
        <div style={{textAlign:"center", fontWeight:"bolder", fontFamily:"cursive", fontSize:"large"}}>{!isRoommieFound ? ( noOfRoommies > 1 ? "I need 2 Roommies" : "I need a Roommie"):"Roommie"+(noOfRoommies > 1?"s":"")+" Found!"}</div>        
      </div>
      <div>
        {!isRoommieFound ?  <div className="available"/> : <div className="occupied"/>}
        <article className="info" style={{fontFamily:"cursive", textAlign:"center"}}>
          <h6>{gender}, {level}</h6>
          
          <div className="center-align-roomie" style={{  lineHeight:"1.2", marginBottom:"-2em"}}>
            <span> <img src= {locationIcon} width="25em" height="25em" alt="loc" style={{float:"left", marginRight:"1em"}}/> <h6>{region}, {school}.</h6> </span>
          </div>
          
          
        </article>
      </div>
      <div className="room-info">
        <Link to={`/roommates/${id}`} className="btn-room">
          See Details
        </Link>
      </div>
    </article>
  );
});

roomieCard.propTypes = {
  roommie: PropTypes.shape({
    region: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    // roommieAvatar: PropTypes.arrayOf(PropTypes.string).isRequired,
    
  })
};
export default roomieCard;
