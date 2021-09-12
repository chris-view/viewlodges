import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import {FaCheckCircle} from "react-icons/fa"
import defaultImg from "../images/VL_fav_white.PNG";
import locationIcon from "../images/locationImg.png";

const RoomCard = memo(({ room }) => {
  const {id, images, annualRent, region, type, occupancy, sponsored, school, verified } = room;
  const context = useContext(RoomContext);
  const {formatPrice} = context;
 
  return (
    <article className="room">
      <div className="img-container">
        <Link to={`/lodges/${id}`} >
          <img src={images[0] || defaultImg} alt="single room" />
        </Link>
        {verified ? <div className="verified">
          <FaCheckCircle/> Verified
        </div>:""}
        
      </div>
      <div>
      

        {
          sponsored ? occupancy ?  <div className="available"/> : <div className="occupied"/> : <div className="occupied"/>
        }


        <article className="info" style={{fontFamily:"cursive", textAlign:"center"}}>
        
          <h6>{type}</h6>
          <h6><span style={{color:"green"}}>{formatPrice(annualRent)}</span>/yr</h6>
          <div className="center-align-roomie" style={{ fontFamily:"cursive", lineHeight:"1.2", marginBottom:"-2em"}}>
            <span> <img src= {locationIcon} width="25em" height="25em" alt="loc" style={{float:"left", marginRight:"1em"}}/> <h6>{region}, {school}.</h6> </span>
          </div>
        
        </article>
      </div>
      <div className="room-info">
        <Link to={`/lodges/${id}`} className="btn-room">
          See Details
        </Link>
      </div>
    </article>
  );
});

RoomCard.propTypes = {
  room: PropTypes.shape({
    region: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    annualRent: PropTypes.number.isRequired
  })
};
export default RoomCard;
