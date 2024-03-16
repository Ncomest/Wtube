import React from "react";
import "./BtnLogin.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BtnLogin() {
 const { t } = useTranslation();
 return (
  <>
   <button className="Sign">
    <Link className="Router-link" to={`/login`}>
     {t("logIn")}
    </Link>
   </button>
  </>
 );
}

export default BtnLogin;
