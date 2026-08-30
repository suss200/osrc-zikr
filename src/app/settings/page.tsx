"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ZikrStats from "@/components/zikrStats";
import ThemePicker from "@/components/themePicker";

export default function SettingsPage() {
    return (
        <div
            dir="rtl"
            className="
                min-h-screen
                bg-[var(--c-bg)]
                text-[var(--c-text)]
                transition-colors
                duration-300
            "
        >
            <Header fixed />

            <main
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-2xl
                    flex-col
                    items-center
                    gap-8
                    px-6
                    pb-16
                    pt-32
                "
            >
                <h1 className="text-4xl font-bold">
                    الإعدادات
                </h1>

                <div className="h-px w-full bg-[var(--c-border)]" />

<div
    className="
        flex
        min-h-25
        w-full
        items-center
        justify-between
        gap-4
        rounded-2xl
        border
        border-[var(--c-border)]
        bg-[var(--c-card)]
        px-5
        py-4
        transition-all
        duration-300
        sm:px-9
        sm:py-0
    "
>
    <div className="min-w-0 text-right">
        <h2 className="text-lg font-semibold text-[var(--c-text)]">
            الثيم
        </h2>

        <p className="mt-1 text-sm text-[var(--c-text-muted)]">
            اختر المظهر الذي يناسبك
        </p>
    </div>

    <ThemePicker />
    
</div>
<ZikrStats />
            </main>

            <Footer />
        </div>
    );
}