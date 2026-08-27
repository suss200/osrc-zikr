"use client";

import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsVisible(window.scrollY > 80);
        };

        const footer = document.getElementById("site-footer");

        const observer = footer
            ? new IntersectionObserver(
                  ([entry]) => {
                      setFooterVisible(entry.isIntersecting);
                  },
                  {
                      threshold: 0.01,
                  }
              )
            : null;

        if (footer && observer) {
            observer.observe(footer);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer?.disconnect();
        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    const shouldShow = isVisible && !footerVisible;

    return (

        <button
            onClick={scrollToTop}
            aria-label="العودة إلى أعلى الصفحة"
            className={`
                fixed
                bottom-6
                right-6
                z-50
                flex
                h-12
                w-12
                items-center
                justify-center
                cursor-pointer
                rounded-xl
                border
                border-[var(--c-border)]
                bg-[var(--c-card)]
                text-[var(--c-accent)]
                shadow-lg
                shadow-black/20
                transition-all
                duration-300
                ease-in-out
                hover:border-[var(--c-accent)]
                hover:bg-[var(--c-hover-strong)]
                hover:text-[var(--c-accent-light)]
                ${
                    shouldShow
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                }
            `}
        >
            <FaArrowUp className="text-sm" />
        </button>

    );

}
