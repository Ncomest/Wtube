import React from "react";
import "./Home.css";
import "./../../index.css";

import Body from "./Home_Body/Body";

const Home = ({selectedLanguage}) => {
 return (
  <div className="Home">
   <Body selectedLanguage={selectedLanguage} />
  </div>
 );
};

export default Home;
