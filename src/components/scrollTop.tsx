"use client";

import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
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

        window.addEventListener("scroll", handleScroll);

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
                rounded-xl
                border
                border-[#24332F]
                bg-[#111A18]
                text-[#6EE7B7]
                shadow-lg
                shadow-black/20
                transition-all
                duration-300
                ease-in-out
                hover:border-[#6EE7B7]
                hover:bg-[#17221F]
                hover:text-[#86efc5]
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
