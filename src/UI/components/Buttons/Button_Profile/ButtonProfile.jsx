import React from "react";
import { useState } from "react";
import DropDown from "../../Background_DropDown/Drop_Down_Menu/DropDown";
import "./ButtonProfile.css";
import ToogleDarkLight from "../../ToogleDarkLight/ToogleDarkLight";

function ButtonProfile() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleBurger = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div onClick={toggleBurger}>
   <Profile />
   <div className={`Profile_DropDown ${isOpen ? "" : "open"}`}>
    <DropDown>
     <ProfileText />
    </DropDown>
   </div>
  </div>
 );
}

const Profile = () => {
 return (
  <div className="ButtonProfile">
   <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     d="M40.2349 55.356C30.6119 55.2404 21.2821 58.6323 13.984 64.888L11.36 61.9108C19.3934 55.0067 29.6723 51.2612 40.2756 51.3863C50.8792 51.5113 61.0675 55.4985 68.9359 62.5907L66.2481 65.5147C59.1025 59.0862 49.8573 55.4715 40.2349 55.356Z"
     fill="#266AAA"
     stroke="black"
    />
    <path
     d="M39.7565 23.2469L39.7559 23.2469C36.3561 23.251 33.0966 24.6035 30.6925 27.0075C28.2885 29.4116 26.9361 32.6711 26.932 36.0709V36.0715C26.932 38.608 27.6841 41.0875 29.0933 43.1965C30.5025 45.3055 32.5055 46.9492 34.8489 47.9199C37.1923 48.8906 39.7708 49.1445 42.2585 48.6497C44.7462 48.1549 47.0314 46.9334 48.8249 45.1399C50.6185 43.3463 51.8399 41.0612 52.3347 38.5735C52.8295 36.0858 52.5756 33.5072 51.605 31.1638C50.6343 28.8204 48.9905 26.8175 46.8815 25.4083C44.7725 23.9991 42.293 23.2469 39.7565 23.2469ZM30.4262 22.1077C33.188 20.2623 36.435 19.2773 39.7565 19.2773C44.2106 19.2773 48.4823 21.0467 51.6318 24.1962C54.7813 27.3458 56.5508 31.6174 56.5508 36.0715C56.5508 39.3931 55.5658 42.6401 53.7204 45.4019C51.8751 48.1637 49.2522 50.3162 46.1835 51.5873C43.1147 52.8584 39.738 53.191 36.4802 52.543C33.2225 51.895 30.23 50.2955 27.8813 47.9468C25.5326 45.5981 23.9331 42.6057 23.2851 39.3479C22.6371 36.0902 22.9697 32.7134 24.2408 29.6447C25.5119 26.5759 27.6644 23.953 30.4262 22.1077Z"
     fill="#266AAA"
     stroke="black"
    />
    <path
     d="M40.0001 6.46959L39.9995 6.46959C31.1099 6.47961 22.5872 10.0155 16.3013 16.3013C10.0154 22.5872 6.47956 31.1098 6.46954 39.9994V40C6.46954 46.6317 8.43612 53.1145 12.1205 58.6285C15.8049 64.1425 21.0416 68.4402 27.1684 70.9781C33.2953 73.5159 40.0372 74.1799 46.5415 72.8861C53.0457 71.5923 59.0202 68.3989 63.7096 63.7096C68.3989 59.0203 71.5923 53.0457 72.8861 46.5414C74.1799 40.0372 73.516 33.2954 70.9781 27.1685C68.4403 21.0416 64.1426 15.8049 58.6286 12.1205C53.1145 8.43613 46.6317 6.46959 40.0001 6.46959ZM19.1661 8.81992C25.333 4.69936 32.5832 2.5 40.0001 2.5C49.9457 2.5 59.484 6.45088 66.5166 13.4835C73.5492 20.5161 77.5 30.0544 77.5 40C77.5 47.4168 75.3007 54.667 71.1801 60.8339C67.0596 67.0007 61.2029 71.8072 54.3506 74.6455C47.4984 77.4837 39.9584 78.2264 32.6841 76.7794C25.4099 75.3325 18.728 71.761 13.4835 66.5165C8.23906 61.272 4.66753 54.5902 3.22058 47.3159C1.77364 40.0416 2.51621 32.5016 5.3545 25.6494C8.19279 18.7972 12.9993 12.9405 19.1661 8.81992Z"
     fill="#266AAA"
     stroke="black"
    />
   </svg>
  </div>
 );
};

const ProfileText = () => {
 return (
  <div>
   <p>Войти</p>
   <br />
   <p>Сменить тему</p>
   <br />
   <ToogleDarkLight />
  </div>
 );
};

export default ButtonProfile;