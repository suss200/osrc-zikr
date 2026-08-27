"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);


            setTimeout(() => {
                setVisible(false);
            }, 500);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <div
            className={`
                fixed
                inset-0
                z-[99999]
                flex
                items-center
                justify-center
                bg-[var(--c-page)]
                transition-opacity
                duration-500
                ease-in-out
                ${loading ? "opacity-100" : "opacity-0"}
            `}
        >
            <div className="flex flex-col items-center">
                <div className="
                    relative
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                ">


                    <div className="
                        absolute
                        inset-0
                        rounded-full
                        border-[3px]
                        border-[var(--c-border)]
                        transition-colors
                        duration-300
                    " />


                    <div className="
                        absolute
                        inset-0
                        animate-spin
                        rounded-full
                        border-[3px]
                        border-transparent
                        border-t-[var(--c-accent)]
                        border-r-[var(--c-accent)]
                    " />

                    <Image
                        src="/logo2.png"
                        alt="OSRC Zikr"
                        width={120}
                        height={40}
                        priority
                        className="h-auto w-[90px] logo-dark"
                    />
                    <Image
                        src="/dark-logo.png"
                        alt="OSRC Zikr"
                        width={120}
                        height={40}
                        priority
                        className="h-auto w-[90px] logo-light"
                    />

                </div>

                <p className="mt-8 text-lg font-semibold tracking-wide text-[var(--c-accent)]">
                    جاري التحميل
                </p>

                <div className="mt-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--c-accent)] animate-bounce [animation-delay:0ms]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--c-accent)] animate-bounce [animation-delay:150ms]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--c-accent)] animate-bounce [animation-delay:300ms]" />
                </div>
            </div>
        </div>
    );
}
