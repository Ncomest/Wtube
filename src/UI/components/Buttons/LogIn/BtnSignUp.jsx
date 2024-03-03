import React from "react";
import "./BtnLogin.css";
import { useTranslation } from "react-i18next";

function BtnSignUp() {
 const { t } = useTranslation();
 return (
  <>
   <button className="Sign btnRed">{t("signUp")}</button>
  </>
 );
}

export default BtnSignUp;
