"use client";

type TypePickerProps = {
    choice_1: string;
    choice_2: string;
    selected: number;
    onChange: (choice: number) => void;
};

export default function TypePicker({
    choice_1,
    choice_2,
    selected,
    onChange,
}: TypePickerProps) {
    return (
        <div
            className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-[var(--c-border)]
                bg-[var(--c-card)]
                p-2
                transition-colors
                duration-300
            "
        >
            <button
                type="button"
                onClick={() => onChange(1)}
                className={`
                    rounded-xl
                    px-5
                    py-3
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                        selected === 1
                            ? "bg-[var(--c-accent)] text-[var(--c-on-accent)]"
                            : "bg-[var(--c-deep)] text-[var(--c-text-muted)] hover:bg-[var(--c-elevated)] hover:text-[var(--c-text)]"
                    }
                `}
            >
                {choice_1}
            </button>

            <button
                type="button"
                onClick={() => onChange(2)}
                className={`
                    rounded-xl
                    px-5
                    py-3
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                        selected === 2
                            ? "bg-[var(--c-accent)] text-[var(--c-on-accent)]"
                            : "bg-[var(--c-deep)] text-[var(--c-text-muted)] hover:bg-[var(--c-elevated)] hover:text-[var(--c-text)]"
                    }
                `}
            >
                {choice_2}
            </button>
        </div>
    );
}