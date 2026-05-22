/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("mode") || "system";
  });

  // 🔹 Detectar sistema
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // 🔹 Aplicar tema (LIGHT / DARK)
  useEffect(() => {
    const root = document.documentElement;

    const systemTheme = getSystemTheme();
    const finalTheme = theme === "system" ? systemTheme : theme;

    // 🔥 IMPORTANTE: limpiar ambos
    root.classList.remove("light", "dark");

    // aplicar el correcto
    root.classList.add(finalTheme);

    localStorage.setItem("mode", theme);
  }, [theme]);

  // 🔹 Escuchar cambios del sistema
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        const root = document.documentElement;

        const systemTheme = media.matches ? "dark" : "light";

        root.classList.remove("light", "dark");
        root.classList.add(systemTheme);
      }
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [theme]);

  // 🔹 Cambiar modo manual
  const setMode = (mode) => {
    setTheme(mode); // "light" | "dark" | "system"
  };

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}