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
                bg-[#0B1110]
                transition-opacity
                duration-500
                ease-in-out
                ${loading ? "opacity-100" : "opacity-0"}
            `}
        >
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
                    border-[#24332F]
                " />


                <div className="
                    absolute
                    inset-0
                    animate-spin
                    rounded-full
                    border-[3px]
                    border-transparent
                    border-t-[#6EE7B7]
                    border-r-[#6EE7B7]
                " />

                <Image
                    src="/logo2.png"
                    alt="OSRC Zikr"
                    width={120}
                    height={40}
                    priority
                    className="h-auto w-[90px]"
                />

            </div>
        </div>
    );
}
