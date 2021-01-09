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
          subtitle="Your free No.1 platform to view homes away from home..."
        >
        </Banner>
      </Hero>
      <RoomsContainer />
      <Services />
    </>
  );
};

export default home;
