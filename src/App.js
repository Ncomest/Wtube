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

function App() {
 return (
  <>
   <Language />
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Movies/:id" element={<Movies />} />
    <Route path="/Filter" element={<Filter />} />
    <Route path="/ActorsCast/:id" element={<ActorsCast />} />
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
