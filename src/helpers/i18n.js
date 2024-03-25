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
    top_rated: "Top rated",
    hello: "Hello",
    ooops: "Ooops",
    sorry: "Sorry",
    thereisnosuchpage: "there is no such page",
    logout: "Log Out",
    favorites: "Favorites",
    alreadyInFavorites: "Already in favorites",
    addToFavorites: "Add in favorites",
    success: "Success",
    username: "Username",
    enter: "Enter",
    password: "password",
    confirm: "Confirm",
    ifYouHaveAnAccount: "If you have an account",
    failed: "Failed",
    try: "try",
    again: "again",
    ifYouDontHaveAnAccount: `If you don't have an account`,
    mustIncludeLetterAndNumber832: "Must include letter and number 8 - 32",
    mustBe416LetterOrNumbers: "Must be 4 - 16 letter or numbers",
    mustMatchTheFirstPasswordInputField:
     "Must match the first password input field",
    yourMovieListIsEmpty: "Your movie list is empty",
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
    top_rated: "Топ рейтинг",
    hello: "Здравствуйте",
    ooops: "Ооопс",
    sorry: "Извините",
    thereisnosuchpage: "такой страницы не существует",
    logout: "Выйти",
    favorites: "Избранные",
    alreadyInFavorites: "Уже вы избранном",
    addToFavorites: "Добавить в избранное",
    success: "Успешно",
    username: "Имя пользователя",
    enter: "Введите",
    password: "пароль",
    confirm: "Подтвердите",
    ifYouHaveAnAccount: "Если у Вас уже есть аккаунт",
    failed: "Не получилось",
    try: "попробуйте",
    again: "еще раз",
    ifYouDontHaveAnAccount: "Если у Вас нет аккаунта",
    mustIncludeLetterAndNumber832:
     "Должны быть буквы и цифры не меньше 8 символов и не больше 32",
    mustBe416LetterOrNumbers:
     "Должны быть буквы или цифры не меньше 4 символов и не больше 16",
    mustMatchTheFirstPasswordInputField: "Пароли не совпадают",
    yourMovieListIsEmpty: "Список избранных фильмов пуст",
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
