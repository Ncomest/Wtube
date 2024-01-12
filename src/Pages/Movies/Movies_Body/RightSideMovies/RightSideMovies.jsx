import React from "react";

import "./RightSideMovies.css";

import Favorites from "../../../../UI/components/Buttons/Favorites/Favorites";
import SubTitle from "../../../../UI/components/Title/Sub_Title/SubTitle";
import SubText from "../../../../UI/components/Text/Sub_text/SubText";

import SliderSimilar from "../../../../helpers/Slider/Similar_Movies/SliderSimilar";
import SliderRecommend from "../../../../helpers/Slider/Similar_Movies/SliderRecommend";
import SliderActors from "../../../../helpers/Slider/Actors/SliderActors";
import Reviews from "../../../../UI/components/Reviews/Reviews";

function RightSideMovies({ movieDetails }) {
 return (
  <div className="RightSideMovies">
   <RightSideMoviesTitle movieDetails={movieDetails} />
   <RightSideMoviesPlayer movieDetails={movieDetails} />

   <SubTitle subTitle={"О фильме"}>
    <div className="RightSideMovies_SubText">
     <SubText
      text={"Жанр:"}
      data={movieDetails.genres}
      renderFuction={(data) => data.map((genre) => genre.name)}
     />
     <SubText
      text={"Страна:"}
      data={movieDetails.production_countries}
      renderFuction={(data) => data.map((country) => country.name)}
     />
     <p>Год: {movieDetails.release_date}</p>
     <p>Длительность: {movieDetails.movieLength} минут.</p>
    </div>
   </SubTitle>

   <SubTitle subTitle={"Актеры"} />
   <div className="RightSideMovies_Block">
    <SliderActors movieDetails={movieDetails} />
   </div>

   <SubTitle subTitle={"Сюжет"}>
    <p>{movieDetails.overview}</p>
   </SubTitle>

   {movieDetails.recommendations.results.length === 0 ? (
    ""
   ) : (
    <>
     <SubTitle subTitle={"Рекомендации"} />
     <div className="RightSideMovies_Block">
      <SliderRecommend movieDetails={movieDetails} />
     </div>
    </>
   )}

   {movieDetails.similar.results.length === 0 ? (
    ""
   ) : (
    <>
     <SubTitle subTitle={"Похожие"} />
     <div className="RightSideMovies_Block">
      <SliderSimilar movieDetails={movieDetails} />
     </div>
    </>
   )}

   <SubTitle subTitle={"Отзывы"}></SubTitle>
   {movieDetails.reviews.results.map((movie) => (
    <Reviews key={movie.id} {...movie} />
   ))}
  </div>
 );
}

const RightSideMoviesTitle = ({ movieDetails }) => {
 if (!movieDetails) {
  return <>wait</>;
 }
 return (
  <>
   <h1>{movieDetails.original_title}</h1>
  </>
 );
};

const RightSideMoviesPlayer = ({ movieDetails }) => {
 if (movieDetails.videos.results.length === 0) {
  return (
   <>
    <p>No trailers available</p>
   </>
  );
 }

 const trailerUrl = movieDetails.videos.results[0];

 return (
  <div className="RightSideMoviesPlayer">
   <div className="RightSideMovies_Player">
    <iframe
     width="100%"
     height="100%"
     src={`https://www.youtube.com/embed/${trailerUrl.key}`}
     title={`https://www.youtube.com/embed/${trailerUrl.name}`}
     frameborder="0"
     allowfullscreen
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    ></iframe>
   </div>
   <div className="RightSideMovies_AddLike">
    <Favorites />
    <RightSideMoviesLike />
   </div>
  </div>
 );
};

const RightSideMoviesLike = () => {
 return (
  <div className="RightSideMoviesLike">
   <div>
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width="60"
     height="60"
     viewBox="0 0 60 60"
     fill="none"
    >
     <path
      d="M51.9082 31.2715C52.8926 29.9707 53.4375 28.377 53.4375 26.7188C53.4375 24.0879 51.9668 21.5977 49.5996 20.209C48.9902 19.8516 48.2963 19.6634 47.5898 19.6641H33.5391L33.8906 12.4629C33.9727 10.7227 33.3574 9.07036 32.1621 7.81059C31.5755 7.18966 30.8678 6.69563 30.0827 6.35902C29.2976 6.02241 28.4519 5.85038 27.5977 5.85356C24.5508 5.85356 21.8555 7.90434 21.0469 10.8399L16.0137 29.0625H8.4375C7.40039 29.0625 6.5625 29.9004 6.5625 30.9375V52.2657C6.5625 53.3028 7.40039 54.1407 8.4375 54.1407H43.6699C44.209 54.1407 44.7363 54.0352 45.2227 53.8243C48.0117 52.6348 49.8105 49.9102 49.8105 46.8868C49.8105 46.1485 49.7051 45.4219 49.4941 44.7188C50.4785 43.418 51.0234 41.8243 51.0234 40.1661C51.0234 39.4278 50.918 38.7012 50.707 37.9981C51.6914 36.6973 52.2363 35.1036 52.2363 33.4454C52.2246 32.7071 52.1191 31.9747 51.9082 31.2715ZM10.7812 49.9219V33.2813H15.5273V49.9219H10.7812ZM48.0703 29.2383L46.7871 30.3516L47.6016 31.8399C47.8699 32.3301 48.009 32.8806 48.0059 33.4395C48.0059 34.4063 47.584 35.3262 46.8574 35.959L45.5742 37.0723L46.3887 38.5606C46.657 39.0508 46.7961 39.6013 46.793 40.1602C46.793 41.127 46.3711 42.0469 45.6445 42.6797L44.3613 43.793L45.1758 45.2813C45.4441 45.7715 45.5832 46.322 45.5801 46.8809C45.5801 48.1934 44.8066 49.377 43.6113 49.9161H19.2773V33.0938L25.1074 11.9707C25.2578 11.4293 25.5805 10.9517 26.0267 10.6102C26.4729 10.2687 27.0182 10.0819 27.5801 10.0782C28.0254 10.0782 28.4648 10.2071 28.8164 10.4707C29.3965 10.9043 29.707 11.5606 29.6719 12.2579L29.1094 23.8829H47.5312C48.5742 24.5215 49.2188 25.5997 49.2188 26.7188C49.2188 27.6856 48.7969 28.5997 48.0703 29.2383Z"
      fill="#208FB1"
     />
    </svg>
   </div>
   <div>
    <svg
     xmlns="http://www.w3.org/2000/svg"
     width="60"
     height="60"
     viewBox="0 0 60 60"
     fill="none"
    >
     <path
      d="M8.0918 28.7285C7.10742 30.0293 6.5625 31.623 6.5625 33.2812C6.5625 35.9121 8.0332 38.4023 10.4004 39.791C11.0098 40.1484 11.7037 40.3366 12.4102 40.3359L26.4609 40.3359L26.1094 47.5371C26.0273 49.2773 26.6426 50.9296 27.8379 52.1894C28.4245 52.8103 29.1322 53.3044 29.9173 53.641C30.7024 53.9776 31.5481 54.1496 32.4023 54.1464C35.4492 54.1464 38.1445 52.0957 38.9531 49.1601L43.9863 30.9375L51.5625 30.9375C52.5996 30.9375 53.4375 30.0996 53.4375 29.0625L53.4375 7.73433C53.4375 6.69722 52.5996 5.85933 51.5625 5.85933L16.3301 5.85933C15.791 5.85933 15.2637 5.96481 14.7773 6.17574C11.9883 7.36519 10.1895 10.0898 10.1895 13.1132C10.1895 13.8515 10.2949 14.5781 10.5059 15.2812C9.52148 16.582 8.97656 18.1757 8.97656 19.8339C8.97656 20.5722 9.08203 21.2988 9.29297 22.0019C8.30859 23.3027 7.76367 24.8964 7.76367 26.5546C7.77539 27.2929 7.88086 28.0253 8.0918 28.7285ZM49.2188 10.0781L49.2188 26.7187L44.4727 26.7187L44.4727 10.0781H49.2188ZM11.9297 30.7617L13.2129 29.6484L12.3984 28.1601C12.1301 27.6699 11.991 27.1194 11.9941 26.5605C11.9941 25.5937 12.416 24.6738 13.1426 24.041L14.4258 22.9277L13.6113 21.4394C13.343 20.9492 13.2039 20.3987 13.207 19.8398C13.207 18.873 13.6289 17.9531 14.3555 17.3203L15.6387 16.207L14.8242 14.7187C14.5559 14.2285 14.4168 13.678 14.4199 13.1191C14.4199 11.8066 15.1934 10.623 16.3887 10.0839L40.7227 10.0839L40.7227 26.9062L34.8926 48.0293C34.7422 48.5707 34.4195 49.0483 33.9733 49.3898C33.5271 49.7313 32.9818 49.9181 32.4199 49.9218C31.9746 49.9218 31.5352 49.7929 31.1836 49.5293C30.6035 49.0957 30.293 48.4394 30.3281 47.7421L30.8906 36.1171L12.4688 36.1171C11.4258 35.4785 10.7813 34.4003 10.7813 33.2812C10.7813 32.3144 11.2031 31.4003 11.9297 30.7617Z"
      fill="#208FB1"
     />
    </svg>
   </div>
  </div>
 );
};

export default RightSideMovies;
