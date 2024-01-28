import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
 const [theme, setTheme] = useState("light");

 useLayoutEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);

  return () => {
   document.documentElement.removeAttribute("data-theme");
  };
 }, [theme]);

 return {
  theme,
  setTheme,
 };
};
