"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuMoonStar } from "react-icons/lu";
import { IoIosSunny } from "react-icons/io";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-6 h-6 opacity-0" /> 
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cursor-pointer"
    >
      {isDark ? <IoIosSunny /> : <LuMoonStar />}
    </button>
  );
};

export default ThemeToggle;
