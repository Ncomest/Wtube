import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const langFromLocalStorage =
 localStorage.getItem("selectedLanguage") || "en-US";

i18n.use(initReactI18next).init({
 resources: {
  "en-US": {
   translation: {
    actors: "Actors",
   },
  },
  "ru-RU": {
   translation: {
    actors: "Актеры",
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
