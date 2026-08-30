"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    getZikrStats,
    type OverallZikrStats,
} from "@/lib/zikrStatsCalculator";

export default function ZikrStats() {
    const [stats, setStats] =
        useState<OverallZikrStats | null>(
            null
        );

    const [selectedDay, setSelectedDay] =
        useState<string | null>(null);

    useEffect(() => {
        setStats(getZikrStats());
    }, []);

    if (!stats) {
        return null;
    }

    const days =
        stats.lastSevenDays;

    const selectedDayData =
        days.find(
            (day) =>
                day.date === selectedDay
        ) ??
        days[days.length - 1];

    const today =
        stats.today;

    return (
        <section
            dir="rtl"
            className="w-full"
        >
            {/* Title */}

            <h1 className="text-center text-4xl font-bold text-[var(--c-text)]">
                إحصائيات الأذكار
            </h1>

            <div className="mt-6 h-px w-full bg-[var(--c-divider)]" />

            {/* Today's statistics */}

            <div className="mt-10">
                <h2 className="text-lg font-semibold text-[var(--c-text)]">
                    اليوم
                </h2>

                <p className="mt-1 text-sm text-[var(--c-text-muted)]">
                    إحصائيات أذكار اليوم
                </p>

                <div className="mt-8 space-y-1">
                    {/* Morning full */}

                    <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                        <span className="text-sm text-[var(--c-text-muted)]">
                            أذكار الصباح الكاملة
                        </span>

                        <span className="font-semibold text-[var(--c-text)]">
                            {
                                today[
                                    "morning-full"
                                ].completed
                            }{" "}
                            /{" "}
                            {
                                today[
                                    "morning-full"
                                ].total
                            }
                        </span>
                    </div>

                    {/* Morning short */}

                    <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                        <span className="text-sm text-[var(--c-text-muted)]">
                            أذكار الصباح المختصرة
                        </span>

                        <span className="font-semibold text-[var(--c-text)]">
                            {
                                today[
                                    "morning-short"
                                ].completed
                            }{" "}
                            /{" "}
                            {
                                today[
                                    "morning-short"
                                ].total
                            }
                        </span>
                    </div>

                    {/* Night full */}

                    <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                        <span className="text-sm text-[var(--c-text-muted)]">
                            أذكار المساء الكاملة
                        </span>

                        <span className="font-semibold text-[var(--c-text)]">
                            {
                                today[
                                    "night-full"
                                ].completed
                            }{" "}
                            /{" "}
                            {
                                today[
                                    "night-full"
                                ].total
                            }
                        </span>
                    </div>

                    {/* Night short */}

                    <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                        <span className="text-sm text-[var(--c-text-muted)]">
                            أذكار المساء المختصرة
                        </span>

                        <span className="font-semibold text-[var(--c-text)]">
                            {
                                today[
                                    "night-short"
                                ].completed
                            }{" "}
                            /{" "}
                            {
                                today[
                                    "night-short"
                                ].total
                            }
                        </span>
                    </div>

                    {/* Sleep */}

                    <div className="flex items-center justify-between py-4">
                        <span className="text-sm text-[var(--c-text-muted)]">
                            أذكار النوم
                        </span>

                        <span className="font-semibold text-[var(--c-text)]">
                            {
                                today.sleep
                                    .completed
                            }{" "}
                            /{" "}
                            {
                                today.sleep
                                    .total
                            }
                        </span>
                    </div>
                </div>
            </div>

            {/* Last 7 days */}

            <div className="mt-14">
                <h2 className="text-lg font-semibold text-[var(--c-text)]">
                    آخر 7 أيام
                </h2>

                <p className="mt-1 text-sm text-[var(--c-text-muted)]">
                    اختر يومًا لعرض تفاصيل أذكارك
                </p>

                {/* Days */}

                <div className="mt-8 grid grid-cols-7 gap-1 border-b border-[var(--c-divider)] pb-4">
                    {days.map(
                        (day) => {
                            const active =
                                selectedDayData?.date ===
                                day.date;

                            return (
                                <button
                                    key={day.date}
                                    type="button"
                                    onClick={() =>
                                        setSelectedDay(
                                            day.date
                                        )
                                    }
                                    className={`
                                        flex
                                        min-w-0
                                        cursor-pointer
                                        flex-col
                                        items-center
                                        gap-2
                                        rounded-lg
                                        px-1
                                        py-3
                                        transition-all
                                        duration-200
                                        ${
                                            active
                                                ? "bg-[var(--c-accent-10)]"
                                                : "hover:bg-[var(--c-elevated)]"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            text-xs
                                            ${
                                                active
                                                    ? "font-semibold text-[var(--c-accent)]"
                                                    : "text-[var(--c-text-muted)]"
                                            }
                                        `}
                                    >
                                        {
                                            day.label
                                        }
                                    </span>

                                    <span
                                        className={`
                                            text-base
                                            font-bold
                                            ${
                                                active
                                                    ? "text-[var(--c-text)]"
                                                    : "text-[var(--c-text-muted)]"
                                            }
                                        `}
                                    >
                                        {
                                            day.totalCompleted
                                        }
                                    </span>

                                    <span
                                        className={`
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            ${
                                                day.totalCompleted >
                                                0
                                                    ? "bg-[var(--c-accent)]"
                                                    : "bg-[var(--c-track)]"
                                            }
                                        `}
                                    />
                                </button>
                            );
                        }
                    )}
                </div>

                {/* Selected day */}

                {selectedDayData && (
                    <div className="mt-8">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-sm text-[var(--c-text-muted)]">
                                    {
                                        selectedDayData.label
                                    }
                                </p>

                                <p className="mt-1 text-3xl font-bold text-[var(--c-text)]">
                                    {
                                        selectedDayData.totalCompleted
                                    }
                                </p>
                            </div>

                            <p className="mb-1 text-sm text-[var(--c-text-muted)]">
                                ذكرًا مكتملًا
                            </p>
                        </div>

                        <div className="mt-6 space-y-1">
                            {/* Morning full */}

                            <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                                <span className="text-sm text-[var(--c-text-muted)]">
                                    أذكار الصباح الكاملة
                                </span>

                                <span className="font-semibold text-[var(--c-text)]">
                                    {
                                        selectedDayData[
                                            "morning-full"
                                        ].completed
                                    }{" "}
                                    /{" "}
                                    {
                                        selectedDayData[
                                            "morning-full"
                                        ].total
                                    }
                                </span>
                            </div>

                            {/* Morning short */}

                            <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                                <span className="text-sm text-[var(--c-text-muted)]">
                                    أذكار الصباح المختصرة
                                </span>

                                <span className="font-semibold text-[var(--c-text)]">
                                    {
                                        selectedDayData[
                                            "morning-short"
                                        ].completed
                                    }{" "}
                                    /{" "}
                                    {
                                        selectedDayData[
                                            "morning-short"
                                        ].total
                                    }
                                </span>
                            </div>

                            {/* Night full */}

                            <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                                <span className="text-sm text-[var(--c-text-muted)]">
                                    أذكار المساء الكاملة
                                </span>

                                <span className="font-semibold text-[var(--c-text)]">
                                    {
                                        selectedDayData[
                                            "night-full"
                                        ].completed
                                    }{" "}
                                    /{" "}
                                    {
                                        selectedDayData[
                                            "night-full"
                                        ].total
                                    }
                                </span>
                            </div>

                            {/* Night short */}

                            <div className="flex items-center justify-between border-b border-[var(--c-divider)] py-4">
                                <span className="text-sm text-[var(--c-text-muted)]">
                                    أذكار المساء المختصرة
                                </span>

                                <span className="font-semibold text-[var(--c-text)]">
                                    {
                                        selectedDayData[
                                            "night-short"
                                        ].completed
                                    }{" "}
                                    /{" "}
                                    {
                                        selectedDayData[
                                            "night-short"
                                        ].total
                                    }
                                </span>
                            </div>

                            {/* Sleep */}

                            <div className="flex items-center justify-between py-4">
                                <span className="text-sm text-[var(--c-text-muted)]">
                                    أذكار النوم
                                </span>

                                <span className="font-semibold text-[var(--c-text)]">
                                    {
                                        selectedDayData
                                            .sleep
                                            .completed
                                    }{" "}
                                    /{" "}
                                    {
                                        selectedDayData
                                            .sleep
                                            .total
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* General statistics */}

            <div className="mt-14 grid grid-cols-2 border-t border-[var(--c-divider)] pt-8">
                <div>
                    <p className="text-sm text-[var(--c-text-muted)]">
                        الأيام النشطة
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[var(--c-text)]">
                        {
                            stats.activeDays
                        }
                    </p>
                </div>

                <div className="text-left">
                    <p className="text-sm text-[var(--c-text-muted)]">
                        أطول سلسلة
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[var(--c-text)]">
                        {
                            stats.longestStreak
                        }
                    </p>
                </div>
            </div>
        </section>
    );
}
