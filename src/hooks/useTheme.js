import { useEffect, useState } from "react";

const THEME_KEY = "portfolio-theme";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;