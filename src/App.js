import { Route, Routes, Link } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import User from "./Pages/User/User";
import Error from "./Pages/Error/Error";

function App() {
 return (
  <>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/movies">Movies</Link></li>
      <li><Link to="/user">User</Link></li>
    </ul>
  </nav>

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Movies/:id" element={<Movies />} />
    <Route path="/User" element={<User />} />
    <Route path="*" element={<Error />} />

   </Routes>
  </>
 );
}

export default App;
