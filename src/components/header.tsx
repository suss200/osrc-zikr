"use client";

import Link from "next/link";

import Image from "next/image";

import { FaGear } from "react-icons/fa6";

import { useTheme } from "./ThemeProvider";

type HeaderProps = {
    fixed?: boolean;
};

export default function Header({ fixed = false }: HeaderProps) {

    const { theme } = useTheme();

    return (

        <header
            className={`
                ${fixed ? "fixed" : "relative"}
                top-0
                left-0
                z-50
                w-full
            `}
            dir="rtl"
        >

            <nav
                className="
                    flex
                    w-full
                    items-center
                    justify-between
                    h-20
                    px-9
                    bg-[var(--c-nav)]
                    transition-colors
                    duration-300
                "
            >

                <Link href="/" className="py-2">

                    <Image
                        src={
                            theme === "dark"
                                ? "/logo2.png"
                                : "/dark-logo.png"
                        }
                        alt="أذكاري"
                        width={120}
                        height={40}
                        loading="eager"
                        className="h-auto w-[120px]"
                    />

                </Link>

                <div className="flex items-center gap-8">

                    <Link
                        href="/"
                        className="
                            py-2
                            text-[var(--c-text)]
                            transition-colors
                            duration-300
                            hover:text-[var(--c-accent)]
                        "
                    >
                        الرئيسية
                    </Link>

                    <Link
                        href="/azkar-categories"
                        className="
                            py-2
                            text-[var(--c-text)]
                            transition-colors
                            duration-300
                            hover:text-[var(--c-accent)]
                        "
                    >
                        الأذكار
                    </Link>

                    <Link
                        href="/settings"
                        aria-label="الإعدادات"
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
                        <FaGear className="text-lg" />
                    </Link>

                </div>

            </nav>

        </header>

    );
}