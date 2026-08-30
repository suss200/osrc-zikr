export type ZikrCategory =
    | "morning-full"
    | "morning-short"
    | "night-full"
    | "night-short"
    | "sleep";

export type DailyStats = {
    [category in ZikrCategory]?: string[];
};

export type ZikrStats = {
    [date: string]: DailyStats;
};

const STORAGE_KEY = "zikr-stats";

function getToday(): string {
    const now = new Date();

    const year = now.getFullYear();

    const month = String(
        now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        now.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getStats(): ZikrStats {
    if (typeof window === "undefined") {
        return {};
    }

    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return {};
    }

    try {
        return JSON.parse(saved) as ZikrStats;
    } catch {
        return {};
    }
}

function saveStats(stats: ZikrStats): void {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(stats)
    );
}

export function markZikrCompleted(
    id: string,
    category: ZikrCategory
): void {
    const stats = getStats();
    const today = getToday();

    if (!stats[today]) {
        stats[today] = {};
    }

    if (!stats[today][category]) {
        stats[today][category] = [];
    }

    if (
        !stats[today][category]!.includes(id)
    ) {
        stats[today][category]!.push(id);
    }

    saveStats(stats);
}

export function getTodayStats(): DailyStats {
    const stats = getStats();
    const today = getToday();

    return stats[today] ?? {};
}

export function getAllStats(): ZikrStats {
    return getStats();
}