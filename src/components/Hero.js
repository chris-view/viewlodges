import React from "react";

const Hero = ({ children, hero }) => {
  let style_name = "align-cover-image";
  return <div className={style_name}>
            <header className={hero}>{children}</header>
         </div>;
};

export default Hero;

// Hero.defaultProps = {
//   hero: "defaultHero"
// };
