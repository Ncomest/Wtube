import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Error from "./Pages/Error/Error";
import Filter from "./Pages/Filter/Filter";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

function App() {
 

 return (
  <>
   <Header  />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Movies/:id" element={<Movies />} />
    <Route path="/Filter" element={<Filter />} />
    <Route path="*" element={<Error />} />
   </Routes>
   <Footer/>
  </>
 );
}

export default App;
