"use client";

import { useEffect, useState } from "react";
import { FaDownload, FaXmark } from "react-icons/fa6";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{
        outcome: "accepted" | "dismissed";
        platform: string;
    }>;
}

const DISMISS_KEY = "osrc-zikr-install-dismissed";
const DISMISS_DURATION = 7 * 24 * 60 * 60 * 1000;

function isStandalone(): boolean {
    if (typeof window === "undefined") {
        return false;
    }

    return (
        window.matchMedia("(display-mode: standalone)").matches ||
        (navigator as Navigator & { standalone?: boolean }).standalone === true
    );
}

function isIOS(): boolean {
    if (typeof window === "undefined") {
        return false;
    }

    return (
        /iphone|ipad|ipod/i.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" &&
            navigator.maxTouchPoints > 1)
    );
}

function isMobile(): boolean {
    if (typeof window === "undefined") {
        return false;
    }

    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
}

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);

    const [showPrompt, setShowPrompt] = useState(false);
    const [ios, setIos] = useState(false);

    useEffect(() => {
        if (isStandalone()) {
            return;
        }

        if (!isMobile()) {
            return;
        }

        const dismissed = localStorage.getItem(DISMISS_KEY);

        if (dismissed) {
            const dismissedAt = Number(dismissed);

            if (
                !Number.isNaN(dismissedAt) &&
                Date.now() - dismissedAt < DISMISS_DURATION
            ) {
                return;
            }

            localStorage.removeItem(DISMISS_KEY);
        }

        if (isIOS()) {
            setIos(true);
            setShowPrompt(true);
            return;
        }

        const handleBeforeInstallPrompt = (event: Event) => {
            event.preventDefault();

            setDeferredPrompt(
                event as BeforeInstallPromptEvent
            );

            setShowPrompt(true);
        };

        window.addEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt
        );

        return () => {
            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt
            );
        };
    }, []);

    const dismiss = () => {
        localStorage.setItem(
            DISMISS_KEY,
            Date.now().toString()
        );

        setShowPrompt(false);
    };

    const install = async () => {
        if (!deferredPrompt) {
            return;
        }

        await deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === "accepted") {
            setShowPrompt(false);
        }

        setDeferredPrompt(null);
    };

    if (!showPrompt) {
        return null;
    }

    return (
        <div
            dir="rtl"
            className="
                fixed
                bottom-4
                left-4
                right-4
                z-[60]
                md:hidden
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-lg
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[var(--c-border)]
                    bg-[var(--c-nav)]
                    p-4
                    shadow-2xl
                    transition-colors
                    duration-300
                "
            >
                <div
                    className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[var(--c-accent-10)]
                        text-[var(--c-accent)]
                    "
                >
                    <FaDownload />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[var(--c-text)]">
                        ثبّت أذكاري
                    </p>

                    {ios ? (
                        <p className="mt-1 text-xs leading-5 text-[var(--c-text-muted)]">
                            اضغط على مشاركة ثم
                            <span className="font-semibold text-[var(--c-text)]">
                                {" "}
                                إضافة إلى الشاشة الرئيسية
                            </span>
                        </p>
                    ) : (
                        <p className="mt-1 text-xs leading-5 text-[var(--c-text-muted)]">
                            ثبّت أذكاري على جهازك للوصول إليه بسرعة.
                        </p>
                    )}

                    {!ios && (
                        <button
                            type="button"
                            onClick={install}
                            className="
                                mt-2
                                rounded-lg
                                bg-[var(--c-accent)]
                                px-3
                                py-1.5
                                text-xs
                                font-semibold
                                text-[var(--c-on-accent)]
                                transition-all
                                duration-200
                                hover:opacity-90
                            "
                        >
                            تثبيت التطبيق
                        </button>
                    )}
                </div>

                <button
                    type="button"
                    onClick={dismiss}
                    aria-label="إغلاق"
                    className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        cursor-pointer
                        items-center
                        justify-center
                        rounded-lg
                        text-[var(--c-text-muted)]
                        transition-colors
                        duration-200
                        hover:bg-[var(--c-elevated)]
                        hover:text-[var(--c-text)]
                    "
                >
                    <FaXmark className="text-sm" />
                </button>
            </div>
        </div>
    );
}