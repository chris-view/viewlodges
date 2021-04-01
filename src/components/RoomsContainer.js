import React from "react";
import { useContext} from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
import DataStroller from './DataStroller';

function RoomContainer() {
  const context = useContext(RoomContext);
  const { loading} = context;
  
 return (
    <>
      <RoomsFilter />
      {/* <RoomsList rooms={sortedRooms} /> */}
      {loading ? <Loading /> : <DataStroller />}
      

    </>
  );
}

export default RoomContainer;

