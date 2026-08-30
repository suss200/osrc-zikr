type ZikrStatCardProps = {
    title: string;
    completed: number;
    total: number;
};

export default function ZikrStatCard({
    title,
    completed,
    total,
}: ZikrStatCardProps) {
    return (
        <div
            className="
                flex
                min-h-24
                w-full
                flex-col
                justify-center
                rounded-2xl
                border
                border-[var(--c-border)]
                bg-[var(--c-card)]
                px-6
                py-4
                transition-colors
                duration-300
            "
        >
            <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-[var(--c-text)]">
                    {title}
                </h3>

                <span className="text-lg font-bold text-[var(--c-accent)]">
                    {completed} / {total}
                </span>
            </div>
        </div>
    );
}