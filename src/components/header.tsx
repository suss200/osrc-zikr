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
                inset-x-0
                top-0
                z-50
                w-full
            `}
            dir="rtl"
        >
            <nav
                className="
                    flex
                    h-20
                    w-full
                    items-center
                    justify-between
                    bg-[var(--c-nav)]
                    px-4
                    transition-colors
                    duration-300
                    sm:px-6
                    md:px-9
                "
            >
                <Link
                    href="/"
                    className="shrink-0 py-2"
                >
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
                        className="
                            h-auto
                            w-[90px]
                            sm:w-[105px]
                            md:w-[120px]
                        "
                    />
                </Link>

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-5
                        sm:gap-6
                        md:gap-8
                    "
                >
                    <Link
                        href="/"
                        className="
                            py-2
                            text-base
                            text-[var(--c-text)]
                            transition-colors
                            duration-300
                            hover:text-[var(--c-accent)]
                            sm:text-[17px]
                        "
                    >
                        الرئيسية
                    </Link>

                    <Link
                        href="/azkar-categories"
                        className="
                            py-2
                            text-base
                            text-[var(--c-text)]
                            transition-colors
                            duration-300
                            hover:text-[var(--c-accent)]
                            sm:text-[17px]
                        "
                    >
                        الأذكار
                    </Link>

                    <Link
                        href="/settings"
                        aria-label="الإعدادات"
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
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
                            sm:h-10
                            sm:w-10
                        "
                    >
                        <FaGear className="text-base sm:text-lg" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}
