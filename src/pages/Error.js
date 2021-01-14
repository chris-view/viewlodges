import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
        <Hero>
          <Banner title="404" subtitle="page not found">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
      </Hero>
    </div>
    
  );
};

export default Error;
