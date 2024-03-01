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
    ratingIMDB: "rating IMDB",
    runtime: "Runtime",
    minute: "minute",
    watch: "watch",
    similar: "similar",
    recommendation: "recommendation",
    reviews: "reviews",
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
