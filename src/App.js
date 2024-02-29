import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Error from "./Pages/Error/Error";
import Filter from "./Pages/Filter/Filter";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import User from "./Pages/User/User";
import UserPofile from "./Pages/User/UserProfile/UserPofile";
import ActorsCast from "./Pages/ActorsCast/ActorsCast";
import Language from "./UI/components/LangBar/Language";
import { useEffect, useState } from "react";

function App() {
 const [selectedLanguage, setSelectedLanguage] = useState(
  localStorage.getItem("selectedLanguage") || "en"
 );

 const handleLang = (e) => {
  const newLanguage = e.target.value;
  setSelectedLanguage(newLanguage);
  localStorage.setItem("selectedLanguage", newLanguage);
 };

 useEffect(() => {}, [selectedLanguage]);

 return (
  <>
   <Language selectedLanguage={selectedLanguage} onChange={handleLang} />
   <Header selectedLanguage={selectedLanguage} />
   <Routes>
    <Route path="/" element={<Home selectedLanguage={selectedLanguage} />} />
    <Route
     path="/Movies/:id"
     element={<Movies selectedLanguage={selectedLanguage} />}
    />
    <Route
     path="/Filter"
     element={<Filter selectedLanguage={selectedLanguage} />}
    />
    <Route
     path="/ActorsCast/:id"
     element={<ActorsCast selectedLanguage={selectedLanguage} />}
    />
    <Route path="/User" element={<User />} />
    <Route path="/UserProfile" element={<UserPofile />} />
    <Route path="*" element={<Error />} />
    {/* <Redirect from='/' to='loginform' /> */}
   </Routes>
   <Footer />
  </>
 );
}

export default App;
