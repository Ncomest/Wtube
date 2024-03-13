import React from "react";
import "./BtnLogin.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function BtnSignUp() {
 const { t } = useTranslation();
 return (
  <>
   <Link className="Router-link" to={`/signup`}>
    <button className="Sign btnRed">{t("signUp")}</button>
   </Link>
  </>
 );
}

export default BtnSignUp;
