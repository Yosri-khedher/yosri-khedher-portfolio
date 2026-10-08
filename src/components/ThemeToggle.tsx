"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const next = stored ?? "dark";
    setTheme(next); document.documentElement.dataset.theme = next;
  }, []);
  const toggle = () => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); localStorage.setItem("theme", next); document.documentElement.dataset.theme = next; };
  return <button className="icon-button" aria-label="Toggle colour theme" onClick={toggle}>{theme === "dark" ? <Sun /> : <Moon />}</button>;
}
