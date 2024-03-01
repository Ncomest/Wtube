import "./Language.css";

const Language = ({ onChange, selectedLanguage }) => {
 return (
  <div className="language">
   <select onChange={onChange} value={selectedLanguage}>
    <option value="en-US">EN</option>
    <option value="ru-RU">RU</option>
   </select>
  </div>
 );
};

export default Language;
