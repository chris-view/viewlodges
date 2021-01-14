import React from "react";
import Room from "./Room";
const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h5>unfortunately, there is no matching lodge for now. Try again later!</h5>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item,idx) => {
          return <Room key={idx} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
