"use client";

import { useState } from "react";

type ZikrItemProps = {
    text: string;
    virtue?: string;
    reference?: string;
    count: number;
};

export default function ZikrItem(props: ZikrItemProps) {
    const [currentCount, setCurrentCount] = useState(0);

    const onClick = () => {
        if (currentCount < props.count) {
            setCurrentCount(currentCount + 1);
        }
    };

    const progress = (currentCount / props.count) * 100;

    const resetCount = () => {
        setCurrentCount(0);
    };

    return (
        <div className="
            w-full
            rounded-2xl
            border
            border-[#24332F]
            bg-[#111A18]
            p-8
            text-center
        ">

            <p className="
                rounded-xl
                bg-[#080C0B]
                p-5
                text-lg
                font-semibold
                leading-9
                text-[#F3F4F6]
            ">
                {props.text}
            </p>

            <div className="mt-4 text-sm text-[#6EE7B7]">
                {props.count} مرات
            </div>

            {(props.virtue || props.reference) && (
                <div className="
                    mt-6
                    text-right
                    text-sm
                    leading-7
                    text-[#9CA3AF]
                ">
                    {props.virtue && (
                        <p>
                            <span className="font-semibold text-[#6EE7B7]">
                                فضله:
                            </span>{" "}
                            {props.virtue}
                        </p>
                    )}

                    {props.reference && (
                        <p>
                            <span className="font-semibold text-[#6EE7B7]">
                                صحته:
                            </span>{" "}
                            {props.reference}
                        </p>
                    )}
                </div>
            )}

            <button
                onClick={onClick}
                disabled={currentCount === props.count}
                className={`
                    relative
                    mt-6
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    text-base
                    font-semibold
                    text-[#F3F4F6]
                    transition-colors
                    duration-300
                    ${
                        currentCount === props.count
                            ? "bg-[#166534]"
                            : "bg-[#24332F] hover:bg-[#30443E]"
                    }
                `}
            >
                <span>
                    {currentCount === props.count
                        ? "تم الذكر ✓"
                        : `اضغط لاحتساب المرات · ${currentCount}`}
                </span>
<div
    className="
        absolute
        right-4
        h-7
        w-7
        rounded-full
        bg-[conic-gradient(#6EE7B7_var(--progress),#24332F_var(--progress))]
        transition-[--progress]
        duration-500
    "
    style={{
        "--progress": `${progress}%`,
    } as React.CSSProperties}
>
    <div className="
        absolute
        inset-[3px]
        rounded-full
        bg-[#24332F]
    " />
</div>
            </button>

            <button
                onClick={resetCount}
                className="
                    mt-3
                    rounded-lg
                    px-4
                    py-2
                    text-sm
                    text-[#9CA3AF]
                    transition-colors
                    duration-200
                    hover:bg-[#1A2421]
                    hover:text-[#F3F4F6]
                "
            >
                ↻ إعادة العد
            </button>

        </div>
    );
}

