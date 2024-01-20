import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchMobileCard = ({ searchResult, setSearchOpen }) => {
 const [loading, setLoading] = useState(true);
 const [searchMovie, setSearchMovie] = useState(null);

 const API_URL_TWO = `https://api.themoviedb.org/3/search/movie?query=${searchResult}&?api_key=${process.env.REACT_APP_API_KEY}`;

 const fetchOption = {
  method: "GET",
  headers: {
   accept: "aplication/json",
   Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
 };

 useEffect(() => {
  const fetchMovies = async () => {
   try {
    const response = await fetch(API_URL_TWO, fetchOption);
    const data = await response.json();
    setSearchMovie(data.results);
    console.log(data);
    setLoading(false);
   } catch (err) {
    console.error(err);
    setLoading(false);
   }
  };
  fetchMovies();
  // eslint-disable-next-line
 }, [API_URL_TWO]);

 const handleScrollAndClose = () => {
  setSearchOpen(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
 };

 if (loading) {
  return <div>Loading...Loading...</div>;
 }

 if (searchResult && searchMovie.length === 0) {
  return <>Movie not found</>;
 }

 return (
  <>
   {searchMovie.map((movie) => (
    <Link
     className="Router-link"
     key={movie.id}
     to={`/movies/${movie.id}`}
     onClick={handleScrollAndClose}
    >
     <MobileCard key={movie.id} {...movie} />
    </Link>
   ))}
  </>
 );
};

const MobileCard = ({ ...movie }) => {
 const imger = "https://image.tmdb.org/t/p/w500";
 const { poster_path, title, genres, vote_average, release_date, overview } =
  movie;

 if (!movie) {
  return <div>Loading...MovieCard</div>;
 }

 return (
  <div className="SearchMobileCard">
   <div className="SearchMobileCard_Left">
    <div className="SearchMobileCard_ImgContainer">
     <img
      className="SearchMobileCard_Img"
      src={imger + poster_path ? imger + poster_path : "placeholder_url"}
      alt="zaglushka"
      loading="lazy"
     />
    </div>
   </div>

   <div>
    <h2>{title}</h2>
    <div className="SearchMobileCard_Text">
     <p>Genres:</p>
     {/* <div className="SearchMobileCard_List">
      {genres.map((genre) => (
       <p key={genre.name}>{genre.name},</p>
      ))}
     </div> */}
    </div>
    <div className="SearchMobileCard_Text">
     <p>Rating:</p>
     {Math.round(vote_average * 10) / 10}
    </div>
    <div className="SearchMobileCard_Text">
     <p>Year:</p>
     <p>{release_date}</p>
    </div>
    <div>
     <p>Overview:</p>
     {window.innerWidth < 427 ? (
      <p>{overview.slice(0, 100)}...</p>
     ) : (
      <p>{overview}</p>
     )}
    </div>
   </div>
  </div>
 );
};

export default SearchMobileCard;
