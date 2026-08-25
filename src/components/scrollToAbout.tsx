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
                border-[#35443F]
                bg-[#0E1614]/70
                px-8
                py-4
                font-semibold
                text-[#F3F4F6]
                backdrop-blur-sm
                transition-colors
                duration-300
                hover:border-[#6EE7B7]
                hover:text-[#6EE7B7]
                hover:cursor-[pointer]
            "
        >
            تعرف على المشروع
        </button>
    );
}