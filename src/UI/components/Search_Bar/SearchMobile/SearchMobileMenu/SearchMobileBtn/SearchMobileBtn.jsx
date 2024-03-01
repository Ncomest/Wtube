import { useTranslation } from "react-i18next";

const SearchMobileBtn = ({ onClick }) => {
 const { t } = useTranslation();
 return (
  <div className="SearchMobileBtn">
   <button className="SearchMobileBtnBtn" onClick={onClick}>
    {t('search')}
   </button>
  </div>
 );
};

export default SearchMobileBtn;
