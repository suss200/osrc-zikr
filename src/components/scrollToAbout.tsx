"use client";

export default function ScrollToAbout() {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <button
            onClick={scrollToAbout}
            className="
                rounded-xl
                border
                border-[var(--c-border-strong)]
                bg-[var(--c-glass)]
                px-8
                py-4
                font-semibold
                text-[var(--c-text)]
                backdrop-blur-sm
                transition-colors
                duration-300
                hover:border-[var(--c-accent)]
                hover:text-[var(--c-accent)]
                hover:cursor-[pointer]
            "
        >
            تعرف على المشروع
        </button>
    );
}