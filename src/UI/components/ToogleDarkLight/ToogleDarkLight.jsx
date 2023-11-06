import React from "react";
import "./ToogleDarkLight.css";

function ToogleDarkLight() {
 return (
  <div className="themeContainer">
   <Sun />
   <div>
    <ToogleMoonSun />
   </div>
   <Moon />
  </div>
 );
}

const Sun = () => {
 return (
  <div>
   <svg
    width="33"
    height="29"
    viewBox="0 0 33 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     d="M16.8351 23C22.0917 23 26.3529 19.1944 26.3529 14.5C26.3529 9.80558 22.0917 6 16.8351 6C11.5786 6 7.31738 9.80558 7.31738 14.5C7.31738 19.1944 11.5786 23 16.8351 23Z"
     stroke="white"
     stroke-width="2"
    />
    <path
     d="M17.395 1V2"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
    <path
     d="M17.395 27V28"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
    <path
     d="M31.9515 15H30.8318"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
    <path
     d="M2.83836 15H1.71863"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
    <path
     d="M7.14995 23.6434L6.36511 24.3566"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
    <path
     d="M28.2575 5.28675L27.4727 6"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
    <path
     d="M7.15632 5.35045L6.35767 4.64954"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
    <path
     d="M27.1514 24.7009L26.3528 24"
     stroke="white"
     stroke-width="2"
     stroke-linecap="round"
    />
   </svg>
  </div>
 );
};

const Moon = () => {
 return (
  <div>
   <svg
    width="26"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     d="M22.471 12C22.471 17.1086 18.165 21.25 12.8533 21.25V22.75C19.0264 22.75 24.0306 17.9371 24.0306 12H22.471ZM12.8533 21.25C7.54155 21.25 3.23554 17.1086 3.23554 12H1.6759C1.6759 17.9371 6.68018 22.75 12.8533 22.75V21.25ZM3.23554 12C3.23554 6.89137 7.54155 2.75 12.8533 2.75V1.25C6.68018 1.25 1.6759 6.06294 1.6759 12H3.23554ZM16.4924 14.25C13.1906 14.25 10.5138 11.6756 10.5138 8.5H8.95419C8.95419 12.5041 12.3291 15.75 16.4924 15.75V14.25ZM21.6135 11.469C20.5653 13.1373 18.6636 14.25 16.4924 14.25V15.75C19.2321 15.75 21.6295 14.3439 22.9485 12.2447L21.6135 11.469ZM10.5138 8.5C10.5138 6.41182 11.6708 4.5828 13.4054 3.57467L12.5988 2.29085C10.4162 3.5593 8.95419 5.86509 8.95419 8.5H10.5138ZM12.8533 2.75C12.7613 2.75 12.6533 2.71008 12.575 2.63168C12.5087 2.56527 12.4933 2.50244 12.4897 2.47703C12.4853 2.44587 12.4875 2.35557 12.5988 2.29085L13.4054 3.57467C13.9286 3.27065 14.0968 2.71398 14.0353 2.27627C13.9714 1.82126 13.5984 1.25 12.8533 1.25V2.75ZM22.9485 12.2447C22.8811 12.3518 22.7872 12.3539 22.7549 12.3497C22.7285 12.3462 22.663 12.3314 22.594 12.2676C22.5125 12.1923 22.471 12.0885 22.471 12H24.0306C24.0306 11.2834 23.4366 10.9246 22.9635 10.8632C22.5084 10.804 21.9296 10.9658 21.6135 11.469L22.9485 12.2447Z"
     fill="white"
    />
   </svg>
  </div>
 );
};

const ToogleMoonSun = () => {
 return (
  <div>
   <div className="backgroundToogle">
    <div className="buttonToogle"></div>
   </div>
  </div>
 );
};
export default ToogleDarkLight;
