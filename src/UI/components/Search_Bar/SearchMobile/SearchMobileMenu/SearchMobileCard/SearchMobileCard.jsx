import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchMobileCard = () => {
 const [loading, setLoading] = useState(true);
 const [searchMovie, setSearchMovie] = useState(null);

 const API_URL_TWO = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query="Человек-паук"`;
 //  "https://api.kinopoisk.dev/v1.4/movie/666";

 useEffect(() => {
  fetch(API_URL_TWO, {
   method: "GET",
   headers: {
    Accept: "application/json",
    "X-API-KEY": "RPSV678-AFW4EBA-J28BMDC-CGDWZ4E",
   },
  })
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
    setSearchMovie(data.docs);
    setLoading(false);
   })
   .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
   });
 }, [API_URL_TWO]);

 if (loading) {
  return <div>Loading...Loading...</div>;
 }

 if (!searchMovie || searchMovie.length === 0) {
  return <div>Loading...SearchMovie</div>;
 }

 return (
  <>
   {searchMovie.map((movie) => (
    <Link key={movie.id} to={`/movies/${movie.id}`}>
     <MobileCard key={movie.id} {...movie} />
    </Link>
   ))}
  </>
 );
};

const MobileCard = ({ ...movie }) => {
 if (!movie) {
  return <div>Loading...MovieCard</div>;
 }

 const { poster, name, genres, countries, year, movieLength } = movie;

 //  if (!name || !poster || !genres || !countries || !year || !movieLength) {
 //   return <div>Loading...MovileCards</div>;
 //  }

 return (
  <div className="SearchMobileCard">
   <div className="SearchMobileCard_Left">
    <div className="SearchMobileCard_ImgContainer">
     <img
      className="SearchMobileCard_Img"
      src={poster ? poster.url : "placeholder_url"}
      alt="zaglushka"
     />
    </div>
   </div>

   <div>
    <h2>{name}</h2>
    <div className="SearchMobileCard_Text">
     <p>Жанр:</p>
     <div className="SearchMobileCard_List">
      {genres.map((genre) => (
       <p key={genre.name}>{genre.name},</p>
      ))}
     </div>
    </div>
    <div className="SearchMobileCard_Text">
     <p>Страна:</p>
     <div className="SearchMobileCard_List">
      {countries.map((country) => (
       <p key={country.name}>{country.name},</p>
      ))}
     </div>
    </div>
    <div className="SearchMobileCard_Text">
     <p>Год:</p>
     <p>{year}</p>
    </div>
    <div className="SearchMobileCard_Text">
     <p>Длительность:</p>
     <p>{movieLength} минут</p>
    </div>
   </div>
  </div>
 );
};

export default SearchMobileCard;
