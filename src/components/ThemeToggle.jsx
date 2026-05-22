/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import SunIcon from "../assets/Icon/SunIcon";
import MoonIcon from "../assets/Icon/MoonIcon";

const ThemeToggle = () => {
  const { theme, setMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-lg bg-(--secondary)/50 animate-pulse" />;
  }

  return (
    <button
      onClick={() => setMode(theme === "dark" ? "light" : "dark")}
      className={`
        relative flex items-center justify-center w-9 h-9 rounded-lg
       bg-(--secondary)/50 hover:bg-(--secondary) transition-all duration-200
        border border-(--border)/50 hover:border-(--border)
        group cursor-pointer
        `}
      aria-label={
        theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      }
    >
      <SunIcon
        className={`
        absolute h-5 w-5 transition-all duration-300
        ${
          theme === "dark"
            ? "rotate-0 scale-100 text-(--muted-foreground) group-hover:text-(--foreground)"
            : "rotate-90 scale-0"
        } 
        `}
      />
      <MoonIcon
        className={`
        absolute h-5 w-5 transition-all duration-300
        ${
          theme === "light"
            ? "rotate-0 scale-100 text-(--muted-foreground) group-hover:text-(--foreground)"
            : "rotate-90 scale-0"
        } 
        `}
      />
    </button>
  );
};

export default ThemeToggle;
