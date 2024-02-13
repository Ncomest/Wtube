import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Error from "./Pages/Error/Error";
import Filter from "./Pages/Filter/Filter";
import Header from "./modules/Header/Header";

function App() {
 const [page, setPage] = useState(
  parseInt(localStorage.getItem("current"), 10) || 1
 );
 useEffect(() => {
  localStorage.setItem("current", page);
 }, [page]);

 return (
  <>
   <Header setPage={setPage} />
   <Routes>
    <Route path="/" element={<Home page={page} setPage={setPage} />} />
    <Route path="/Movies/:id" element={<Movies />} />
    <Route path="/Filter" element={<Filter />} />
    <Route path="*" element={<Error />} />
   </Routes>
  </>
 );
}

export default App;
