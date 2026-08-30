"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [theme, setThemeState] = useState<Theme>("dark");

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        const currentTheme: Theme =
            saved === "light" ? "light" : "dark";

        setThemeState(currentTheme);
        document.documentElement.setAttribute(
            "data-theme",
            currentTheme
        );
    }, []);

    const setTheme = (nextTheme: Theme) => {
        setThemeState(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute(
            "data-theme",
            nextTheme
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        return {
            theme: "dark" as Theme,
            setTheme: (_theme: Theme) => {},
        };
    }

    return context;
}