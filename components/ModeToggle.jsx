"use client";

import * as React from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 bg-accent"
    >
      <FaMoon className="text-black" size={18} />
      <div
        className={`absolute bg-background w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? "left-1" : "right-1"
        }`}
      ></div>
      <BsSunFill className="ml-auto text-yellow-500" size={18} />
    </div>
  );
}
