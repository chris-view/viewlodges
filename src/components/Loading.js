import React from "react";
import loadingGif from "../images/gif/loading-gear.gif";
const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingGif} alt="" />
      <h4>lodges loading....</h4>
      
    </div>
  );
};

export default Loading;
