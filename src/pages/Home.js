import React from "react";
// import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import Services from "../components/Services";

const home = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="welcome to viewlodges"
          subtitle="Your No.1 platform to view off campus homes"
        >
         
        </Banner>
      </Hero>
      <RoomsContainer />
      <Services />
    </>
  );
};

export default home;
