"use client";

import { FaMoon, FaSun } from "react-icons/fa6";

import { useTheme } from "./ThemeProvider";

export default function ThemePicker() {
    const { theme, setTheme } = useTheme();

    return (
        <div
            className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-1
                rounded-xl
                border
                border-[var(--c-border)]
                bg-[var(--c-card)]
                p-1
                transition-colors
                duration-300
                sm:gap-2
                sm:rounded-2xl
                sm:p-2
            "
        >
            <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`
                    flex
                    shrink-0
                    items-center
                    gap-1
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    cursor-pointer
                    sm:gap-2
                    sm:rounded-xl
                    sm:px-5
                    sm:py-3
                    sm:text-lg
                    ${
                        theme === "dark"
                            ? "bg-[#24332F] text-[#6EE7B7] shadow-sm"
                            : "bg-transparent text-[var(--c-text-muted)] hover:bg-[#172420] hover:text-[#6EE7B7]"
                    }
                `}
            >
                <FaMoon className="shrink-0 text-sm sm:text-base" />
                <span>داكن</span>
            </button>

            <button
                type="button"
                onClick={() => setTheme("light")}
                className={`
                    flex
                    shrink-0
                    items-center
                    gap-1
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    cursor-pointer
                    sm:gap-2
                    sm:rounded-xl
                    sm:px-5
                    sm:py-3
                    sm:text-lg
                    ${
                        theme === "light"
                            ? "bg-[#D1FAE5] text-[#047857] shadow-sm"
                            : "bg-transparent text-[var(--c-text-muted)] hover:bg-[#ECFDF5] hover:text-[#047857]"
                    }
                `}
            >
                <FaSun className="shrink-0 text-sm sm:text-base" />
                <span>فاتح</span>
            </button>
        </div>
    );
}