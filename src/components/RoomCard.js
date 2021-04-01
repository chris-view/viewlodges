import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
import {FaCheckCircle} from "react-icons/fa"
import defaultImg from "../images/VL_fav_white.PNG";
import AdWrapper from "./AdWrapper";

const RoomCard = memo(({ room }) => {
  const {id, images, annualRent, region, type, occupancy, verified } = room;
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
        {occupancy ?  <div className="available"/> : <div className="occupied"/>}
        <article className="info">
          <h6>Region : {region}</h6>
          <h6>Type : {type}</h6>
          <h6>rent cost : {formatPrice(annualRent)}</h6>
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
