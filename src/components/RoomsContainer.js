import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

function RoomContainer() {
  const context = useContext(RoomContext)
  const { loading, sortedRooms} = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;

