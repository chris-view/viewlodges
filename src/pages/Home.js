import React from "react";
import { FaSortDown} from "react-icons/fa";
import useLocalStorageState from "use-local-storage-state";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import RoomieContainer from "../components/RoomieContainer";
import ChatSupport from "../components/ChatSupport";
import Services from "../components/Services";
import About from "../components/About";

import Footer from "../components/Footer"

const Home = () => {
  const [showing, setShowing] = useLocalStorageState("showing","lodges");
  const setLodges = () => {
    setShowing("lodges")
  }
  const setRoomies = () => {
    setShowing("roomies")
  }
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="welcome to viewlodges"
          // subtitle="Your free No.1 platform to view homes away from home..."
          subtitle="Your first ever and free student apartment self-service platform."
        >
        </Banner>
      </Hero>
      <div className = "sort-container">
        <div>
          <div className={ showing === "lodges" ? "basic-sort active-sort" : "basic-sort"} onClick = {setLodges}>
            Find Lodges
          </div>
          <div className={ showing === "lodges" ? "show-sort-icon":"hide-sort-icon"}>
           <FaSortDown/>
          </div>
         
        </div>
        <div>
          <div className={ showing === "roomies" ? "basic-sort active-sort" : "basic-sort"} onClick = {setRoomies}>
            Find Roommies
          </div>
          <div className={ showing === "roomies" ? "show-sort-icon":"hide-sort-icon"}>
           <FaSortDown/>
          </div>
         
        </div>
      </div>
      {showing === "lodges" ?  <RoomsContainer /> :  <RoomieContainer />}
      <ChatSupport/>
      <Services />
      <About/>
      <Footer/>
    </>
  );
};

export default Home;
