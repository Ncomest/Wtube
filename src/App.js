import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { AuthProvider } from "./helpers/AuthContext";
import i18n from "./helpers/i18n";

import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Error from "./Pages/Error/Error";
import Filter from "./Pages/Filter/Filter";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import UserPofile from "./Pages/User/UserProfile/UserPofile";
import ActorsCast from "./Pages/ActorsCast/ActorsCast";
import Language from "./UI/components/LangBar/Language";
import MoviesCategory from "./Pages/MoviesCategory/MoviesCategory";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en-US"
  );

  const handleLang = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div style={{backgroundColor: "#0e112a"}}>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <div style={{maxWidth: "1440px", margin: "0 auto"}}>
            <Language
              selectedLanguage={selectedLanguage}
              onChange={handleLang}
            />
            <Header selectedLanguage={selectedLanguage} />

            <Routes>
              <Route
                path="/"
                element={<Home selectedLanguage={selectedLanguage} />}
              />
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
              <Route
                path="/moviescategory/:category"
                element={<MoviesCategory selectedLanguage={selectedLanguage} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/user_profile" element={<UserPofile />} />
              <Route path="*" element={<Error />} />
              {/* <Redirect from='/' to='loginform' /> */}
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
