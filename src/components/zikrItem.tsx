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
            border-[var(--c-border)]
            bg-[var(--c-card)]
            p-8
            text-center
            transition-colors
            duration-300
        ">

            <p className="
                rounded-xl
                bg-[var(--c-deep)]
                p-5
                text-lg
                font-semibold
                leading-9
                text-[var(--c-text)]
                transition-colors
                duration-300
            ">
                {props.text}
            </p>

            <div className="mt-4 text-sm text-[var(--c-accent)]">
                {props.count} مرات
            </div>

            {(props.virtue || props.reference) && (
                <div className="
                    mt-6
                    text-right
                    text-sm
                    leading-7
                    text-[var(--c-text-muted)]
                ">
                    {props.virtue && (
                        <p>
                            <span className="font-semibold text-[var(--c-accent)]">
                                فضله:
                            </span>{" "}
                            {props.virtue}
                        </p>
                    )}

                    {props.reference && (
                        <p>
                            <span className="font-semibold text-[var(--c-accent)]">
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
                    cursor-pointer
                    text-base
                    font-semibold
                    transition-colors
                    duration-300
                    disabled:cursor-default
                    ${
                        currentCount === props.count
                            ? "bg-[var(--c-success)] text-white"
                            : "bg-[var(--c-btn)] hover:bg-[var(--c-btn-hover)] text-[var(--c-btn-text)]"
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
        bg-[conic-gradient(var(--c-accent)_var(--progress),var(--c-progress-track)_var(--progress))]
        transition-[--progress]
        duration-500
    "
    style={{
        "--progress": `${progress}%`,
    } as React.CSSProperties}
>
    <div
        className="
            absolute
            inset-[3px]
            rounded-full
            bg-[var(--c-progress-inner)]
            transition-colors
            duration-300
        "
    />
</div>

    </button>

            <button
                onClick={resetCount}
                className="
                    mt-3
                    cursor-pointer
                    rounded-lg
                    px-4
                    py-2
                    text-sm
                    text-[var(--c-text-muted)]
                    transition-colors
                    duration-200
                    hover:bg-[var(--c-elevated)]
                    hover:text-[var(--c-text)]
                "
            >
                ↻ إعادة العد
            </button>

        </div>
    );
}

