"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button
            onClick={toggleTheme}
            aria-label="تبديل الثيم"
            title={theme === "dark" ? "الثيم النعناعي" : "الثيم الغامق"}
            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--c-border)]
                text-[var(--c-accent)]
                transition-all
                duration-300
                hover:border-[var(--c-accent)]
                hover:bg-[var(--c-accent-10)]
                hover:text-[var(--c-accent-light)]
            "
        >
            {!mounted ? (
                <span className="h-4 w-4" />
            ) : theme === "dark" ? (
                <FaSun className="text-base" />
            ) : (
                <FaMoon className="text-base" />
            )}
        </button>
    );
}
