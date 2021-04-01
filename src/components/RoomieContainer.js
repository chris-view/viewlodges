import React from "react";
import { useContext} from "react";
import { RoommieContext } from "../roommieContext";
import Loading from "./Loading";
import RoomieFilter from "./RoomieFilter";
// import RoomieList from "./RoomieList";
import RoommieStroller from './RoommieStroller';

function RoomieContainer() {
  const context = useContext(RoommieContext);
  const { loading } = context;

 return (
    <>
     
       <RoomieFilter />
       {/* <RoomieList roommies={sortedRoommies} />  */}
      {loading ? <Loading /> : <RoommieStroller />}
       

    </>
  );
}

export default RoomieContainer;