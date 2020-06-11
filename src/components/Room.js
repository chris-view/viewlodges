import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const Room = memo(({ room }) => {
  const { slug, images, annualRent, region, type, occupancy } = room;
  
  return (
    <article className="room">
      <div className="img-container">
        <Link to={`/rooms/${slug}`} >
          <img src={images[0] || defaultImg} alt="single room" />
        </Link>
        {/* <div className="price-top">
          <h6>FREE</h6>
          <p>VIEW</p>
        </div> */}
        
      </div>
      <div>
        {occupancy ?  <div className="available"/> : <div className="occupied"/>}
        <article className="info">
          <h6>Region : {region}</h6>
          <h6>Type : {type}</h6>
          <h6>rent cost : ₦{annualRent}</h6>
        </article>
      </div>
      <div className="room-info">
        <Link to={`/rooms/${slug}`} className="btn-room">
          See Details
        </Link>
      </div>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    region: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    annualRent: PropTypes.number.isRequired
  })
};
export default Room;
