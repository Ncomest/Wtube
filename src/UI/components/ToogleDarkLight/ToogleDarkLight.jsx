import React, { useState } from "react";
import "./ToogleDarkLight.css";
import { GoSun, GoMoon } from "react-icons/go";

function ToogleDarkLight() {
 const [theme, setTheme] = useState(true);

 const handleTheme = () => {
  setTheme(!theme);
 };
 
 return (
  <div className="themeContainer">
   {theme ? <GoSun onClick={handleTheme} /> : <GoMoon onClick={handleTheme} />}
  </div>
 );
}

export default ToogleDarkLight;
