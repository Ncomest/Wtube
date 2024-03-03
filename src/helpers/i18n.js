import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const langFromLocalStorage =
 localStorage.getItem("selectedLanguage") || "en-US";

i18n.use(initReactI18next).init({
 resources: {
  "en-US": {
   translation: {
    actors: "Actors",
    overview: "Overview",
    release: "Release",
    genres: "Genres",
    ratingIMDB: "Rating IMDB",
    runtime: "Runtime",
    minute: "minute",
    watch: "watch",
    similar: "Similar",
    recommendation: "Recommendation",
    reviews: "Reviews",
    popular: "Popular",
    topRating: "Top rating",
    search: "Search",
    rating: "Rating",
    year: "Year",
    logIn: "Log In",
    signUp: "Sign Up",
    previous: "previous",
    next: "Next",
    chooseGenre: "Choose genre",
    country: "Country",
    chooseCountry: "Choose country",
    reset: "Reset",
    accept: "Accept",
    movies: "Movies",
    more: "More",
    lookingAll: "Looking all",
    upComming: "Upcoming",
   },
  },
  "ru-RU": {
   translation: {
    actors: "Актеры",
    overview: "О фильме",
    release: "Релиз",
    genres: "Жанр",
    ratingIMDB: "Рейтинг IMDB",
    runtime: "Длительность",
    minute: "минут",
    watch: "смотреть",
    similar: "Похожие",
    recommendation: "Рекомендации",
    reviews: "Отзывы",
    popular: "Популярные",
    topRating: "Топ рейтинг",
    search: "Поиск",
    rating: "Рейтинг",
    year: "Год",
    logIn: "Войти",
    signUp: "Регистрация",
    previous: "Предыдущая",
    next: "Следующая",
    chooseGenre: "Выберите жанр ",
    country: "Страна",
    chooseCountry: "Выберите страну",
    reset: "Сброс",
    accept: "Принять",
    movies: "Фильмы",
    more: "Еще",
    lookingAll: "Смотреть все",
    upComming: "Скоро на экранах",
   },
  },
 },
 lng: langFromLocalStorage,
 fallbackLng: "en-US",
 debug: true,
 interpolation: {
  escapeValue: false,
 },
});

export default i18n;
