import type {
    DailyStats,
    ZikrCategory,
} from "./zikrStats";

import {
    getAllStats,
    getTodayStats,
} from "./zikrStats";

import morningAzkar from "@/app/data/morningAzkar.json";
import shortMorningAzkar from "@/app/data/shortMorningAzkar.json";
import nightAzkar from "@/app/data/nightAzkar.json";
import shortNightAzkar from "@/app/data/shortNightAzkar.json";
import sleepAzkar from "@/app/data/sleepAzkar.json";

type Zikr = {
    id: string;
};

type CategoryStats = {
    completed: number;
    total: number;
};

export type TodayZikrStats = Record<
    ZikrCategory,
    CategoryStats
>;

export type DayDetails = {
    date: string;
    label: string;

    totalCompleted: number;

    "morning-full": CategoryStats;
    "morning-short": CategoryStats;
    "night-full": CategoryStats;
    "night-short": CategoryStats;
    sleep: CategoryStats;
};

export type OverallZikrStats = {
    today: TodayZikrStats;

    totalCompletedToday: number;

    totalRemainingToday: number;

    completedCategoriesToday: number;

    activeDays: number;

    currentStreak: number;

    longestStreak: number;

    lastSevenDays: DayDetails[];
};

const categoryData: Record<
    ZikrCategory,
    readonly Zikr[]
> = {
    "morning-full": morningAzkar,
    "morning-short": shortMorningAzkar,
    "night-full": nightAzkar,
    "night-short": shortNightAzkar,
    sleep: sleepAzkar,
};

function hasActivity(
    day: DailyStats
): boolean {
    return Object.values(day).some(
        (ids) =>
            Array.isArray(ids) &&
            ids.length > 0
    );
}

function getTodayStatsData(): TodayZikrStats {
    const todayStats =
        getTodayStats();

    const result =
        {} as TodayZikrStats;

    for (const category of Object.keys(
        categoryData
    ) as ZikrCategory[]) {
        const azkar =
            categoryData[category];

        const completedIds =
            todayStats[category] ?? [];

        const completed =
            azkar.filter((zikr) =>
                completedIds.includes(
                    zikr.id
                )
            ).length;

        result[category] = {
            completed,
            total: azkar.length,
        };
    }

    return result;
}

function getCurrentStreak(): number {
    const allStats =
        getAllStats();

    let streak = 0;

    const date = new Date();

    while (true) {
        const year =
            date.getFullYear();

        const month =
            String(
                date.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                date.getDate()
            ).padStart(2, "0");

        const key =
            `${year}-${month}-${day}`;

        const dayStats =
            allStats[key];

        if (!dayStats) {
            break;
        }

        if (!hasActivity(dayStats)) {
            break;
        }

        streak++;

        date.setDate(
            date.getDate() - 1
        );
    }

    return streak;
}

function getLongestStreak(): number {
    const allStats =
        getAllStats();

    const dates =
        Object.keys(allStats)
            .filter((date) =>
                hasActivity(
                    allStats[date]
                )
            )
            .sort();

    if (dates.length === 0) {
        return 0;
    }

    let longest = 1;
    let current = 1;

    for (
        let i = 1;
        i < dates.length;
        i++
    ) {
        const previous =
            new Date(
                `${dates[i - 1]}T00:00:00`
            );

        const currentDate =
            new Date(
                `${dates[i]}T00:00:00`
            );

        const difference =
            (
                currentDate.getTime() -
                previous.getTime()
            ) /
            (1000 * 60 * 60 * 24);

        if (difference === 1) {
            current++;
        } else {
            current = 1;
        }

        longest = Math.max(
            longest,
            current
        );
    }

    return longest;
}

function getLastSevenDays(): DayDetails[] {
    const allStats =
        getAllStats();

    const days: DayDetails[] = [];

    const date = new Date();

    for (let i = 0; i < 7; i++) {
        const year =
            date.getFullYear();

        const month =
            String(
                date.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                date.getDate()
            ).padStart(2, "0");

        const key =
            `${year}-${month}-${day}`;

        const stats =
            allStats[key] ?? {};

        const categories =
            {} as Record<
                ZikrCategory,
                CategoryStats
            >;

        let totalCompleted = 0;

        for (const category of Object.keys(
            categoryData
        ) as ZikrCategory[]) {
            const azkar =
                categoryData[category];

            const completedIds =
                stats[category] ?? [];

            const completed =
                azkar.filter((zikr) =>
                    completedIds.includes(
                        zikr.id
                    )
                ).length;

            categories[category] = {
                completed,
                total: azkar.length,
            };

            totalCompleted +=
                completed;
        }

        days.unshift({
            date: key,

            label:
                date.toLocaleDateString(
                    "ar-EG",
                    {
                        weekday: "short",
                    }
                ),

            totalCompleted,

            "morning-full":
                categories[
                    "morning-full"
                ],

            "morning-short":
                categories[
                    "morning-short"
                ],

            "night-full":
                categories[
                    "night-full"
                ],

            "night-short":
                categories[
                    "night-short"
                ],

            sleep:
                categories.sleep,
        });

        date.setDate(
            date.getDate() - 1
        );
    }

    return days;
}

export function getZikrStats():
    OverallZikrStats {
    const today =
        getTodayStatsData();

    let totalCompletedToday = 0;

    let totalRemainingToday = 0;

    let completedCategoriesToday = 0;

    for (const category of Object.keys(
        today
    ) as ZikrCategory[]) {
        const {
            completed,
            total,
        } = today[category];

        totalCompletedToday +=
            completed;

        totalRemainingToday +=
            total - completed;

        if (
            completed === total &&
            total > 0
        ) {
            completedCategoriesToday++;
        }
    }

    const allStats =
        getAllStats();

    const activeDays =
        Object.values(allStats)
            .filter((day) =>
                hasActivity(day)
            )
            .length;

    return {
        today,

        totalCompletedToday,

        totalRemainingToday,

        completedCategoriesToday,

        activeDays,

        currentStreak:
            getCurrentStreak(),

        longestStreak:
            getLongestStreak(),

        lastSevenDays:
            getLastSevenDays(),
    };
}
