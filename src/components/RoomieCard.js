import React from "react";
import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/VL_fav_white.PNG";
import unknownUser from "../images/default-avatar.jpg";


const roomieCard = memo(({ roommie }) => {
  const {id, level, interestedIn, region, roommieAvatar, isRoommieFound, noOfRoommies} = roommie;
 
  return (
    <article className="room">
      <div>
        <Link to={`/roommates/${id}`} >
            <div className="center-align-roomie">
                <div className="avatars">
                    <span className="avatar">
                       
                      <img  src={roommieAvatar || defaultImg} width="100px" height="100px" alt="image1"/>
                    </span>
                    <span className="avatar">
                    
                        <img src= {unknownUser} width="100px" height="100px" alt="image2"/>
                    </span>
                    {noOfRoommies > 1 ? <span className="avatar">
                    
                        <img src= {unknownUser} width="100px" height="100px" alt="image3"/>
                    </span>:""}
                    
                </div>
            </div>
         
        </Link>
        <div style={{textAlign:"center", fontWeight:"bolder", fontFamily:"italic", fontSize:"large"}}>{!isRoommieFound ? ( noOfRoommies > 1 ? "I need 2 Roommies" : "I need a Roommie"):"Roommie"+(noOfRoommies > 1?"s":"")+" Found!"}</div>        
      </div>
      <div>
        {!isRoommieFound ?  <div className="available"/> : <div className="occupied"/>}
        <article className="info">
          <h6>Level : {level}</h6>
          <h6>Region : {region}</h6>
          <h6>Interested In : {interestedIn}</h6>
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
