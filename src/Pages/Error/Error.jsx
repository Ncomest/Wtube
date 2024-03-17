import { useTranslation } from "react-i18next";

import "./Error.css";

export default function Error() {
 const { t } = useTranslation();

 return (
  <div className="error-page">
   <h1>{t("ooops")}!</h1>
   <p>
    {t("sorry")}, {t("thereisnosuchpage")}
   </p>
  </div>
 );
}
