"use client";

import { useRef, useState } from "react";

import { FaShareNodes } from "react-icons/fa6";

import {
    markZikrCompleted,
    ZikrCategory,
} from "@/lib/zikrStats";

type ZikrItemProps = {
    id: string;
    category: ZikrCategory;
    text: string;
    virtue?: string;
    reference?: string;
    count: number;
};

export default function ZikrItem(props: ZikrItemProps) {
    const shareCardRef = useRef<HTMLDivElement>(null);

    const [currentCount, setCurrentCount] = useState(0);

    const onClick = () => {
        if (currentCount < props.count) {
            const nextCount = currentCount + 1;

            setCurrentCount(nextCount);

            if (nextCount === props.count) {
                markZikrCompleted(
                    props.id,
                    props.category
                );
            }
        }
    };

    const progress =
        (currentCount / props.count) * 100;

    const resetCount = () => {
        setCurrentCount(0);
    };

    const shareZikr = async () => {
        if (!shareCardRef.current) return;

        const shareCard = shareCardRef.current;

        try {
            const html2canvas = (
                await import("html2canvas")
            ).default;

            /*
             * نظهر كارت المشاركة مؤقتًا.
             * هو خارج الـlayout الطبيعي لأنه fixed،
             * لكن مش موجود على بعد -99999px.
             */
            shareCard.style.visibility = "visible";

            const canvas = await html2canvas(
                shareCard,
                {
                    scale: 2,
                    backgroundColor:
                        getComputedStyle(
                            shareCard
                        ).backgroundColor,
                    useCORS: true,
                    logging: false,
                }
            );

            shareCard.style.visibility = "hidden";

            const blob = await new Promise<Blob | null>(
                (resolve) =>
                    canvas.toBlob(
                        resolve,
                        "image/png"
                    )
            );

            if (!blob) return;

            const file = new File(
                [blob],
                "osrc-zikr.png",
                {
                    type: "image/png",
                }
            );

            if (
                navigator.share &&
                navigator.canShare?.({
                    files: [file],
                })
            ) {
                await navigator.share({
                    files: [file],
                    title: "OSRC Zikr",
                });
            } else {
                const url =
                    URL.createObjectURL(blob);

                const link =
                    document.createElement("a");

                link.href = url;
                link.download = "osrc-zikr.png";

                document.body.appendChild(link);

                link.click();

                link.remove();

                URL.revokeObjectURL(url);
            }
        } catch (error) {
            if (shareCardRef.current) {
                shareCardRef.current.style.visibility =
                    "hidden";
            }

            console.error(
                "Share failed:",
                error
            );
        }
    };

    return (
        <>
            {/* Zikr card */}
            <div
                className="
                    w-full
                    rounded-2xl
                    border
                    border-[var(--c-border)]
                    bg-[var(--c-card)]
                    p-8
                    text-center
                    transition-colors
                    duration-300
                "
            >
                <p
                    className="
                        rounded-xl
                        bg-[var(--c-deep)]
                        p-5
                        text-lg
                        font-semibold
                        leading-9
                        text-[var(--c-text)]
                        transition-colors
                        duration-300
                    "
                >
                    {props.text}
                </p>

                <div className="mt-4 text-sm text-[var(--c-accent)]">
                    {props.count} مرات
                </div>

                {(props.virtue || props.reference) && (
                    <div
                        className="
                            mt-6
                            text-right
                            text-sm
                            leading-7
                            text-[var(--c-text-muted)]
                        "
                    >
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
                    disabled={
                        currentCount === props.count
                    }
                    className={`
                        relative
                        mt-6
                        flex
                        h-14
                        w-full
                        cursor-pointer
                        items-center
                        justify-center
                        rounded-xl
                        text-base
                        font-semibold
                        transition-colors
                        duration-300
                        disabled:cursor-default
                        ${
                            currentCount === props.count
                                ? "bg-[var(--c-success)] text-white"
                                : "bg-[var(--c-btn)] text-[var(--c-btn-text)] hover:bg-[var(--c-btn-hover)]"
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
                        style={
                            {
                                "--progress": `${progress}%`,
                            } as React.CSSProperties
                        }
                    >
                        <div
                            className="
                                absolute
                                inset-[3px]
                                rounded-full
                                bg-[var(--c-progress-inner)]
                            "
                        />
                    </div>
                </button>

                <div className="mt-3 flex items-center justify-center gap-2">
                    <button
                        onClick={resetCount}
                        className="
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

                    <button
                        onClick={shareZikr}
                        aria-label="مشاركة الذكر"
                        title="مشاركة الذكر"
                        className="
                            flex
                            h-9
                            w-9
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-lg
                            text-[var(--c-text-muted)]
                            transition-all
                            duration-200
                            hover:bg-[var(--c-elevated)]
                            hover:text-[var(--c-accent)]
                        "
                    >
                        <FaShareNodes className="text-sm" />
                    </button>
                </div>
            </div>

            {/* Share image */}
            <div
                ref={shareCardRef}
                style={{
                    visibility: "hidden",
                }}
                className="
                    fixed
                    left-0
                    top-0
                    z-[-1]
                    w-[600px]
                    rounded-2xl
                    border-0
                    bg-[var(--c-card)]
                    p-8
                    text-center
                "
            >
                <p
                    className="
                        rounded-xl
                        bg-[var(--c-deep)]
                        p-5
                        text-lg
                        font-semibold
                        leading-9
                        text-[var(--c-text)]
                    "
                >
                    {props.text}
                </p>

                <div className="mt-4 text-sm text-[var(--c-accent)]">
                    {props.count} مرات
                </div>

                {(props.virtue || props.reference) && (
                    <div
                        className="
                            mt-6
                            text-right
                            text-sm
                            leading-7
                            text-[var(--c-text-muted)]
                        "
                    >
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
            </div>
        </>
    );
}
