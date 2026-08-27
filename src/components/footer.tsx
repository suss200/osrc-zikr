import Image from "next/image";

import Link from "next/link";

import { FaGithub } from "react-icons/fa";

export default function Footer() {

    return (

        <footer 
            id="site-footer"
        className="
            bg-[var(--c-nav)]
            border-t
            border-[var(--c-border)]
            w-full
            transition-colors
            duration-300
        ">

            <div className="
                flex
                flex-col
                items-center
                gap-2
                py-4
                relative
            ">

                <Image
                    src="/logo2.png"
                    alt="OSRC Zikr"
                    width={90}
                    height={30}
                    className="h-auto w-[90px] logo-dark"
                />
                <Image
                    src="/dark-logo.png"
                    alt="OSRC Zikr"
                    width={90}
                    height={30}
                    className="h-auto w-[90px] logo-light"
                />

                <p className="text-sm text-[var(--c-text-muted)]">
                    رفيقك اليومي للأذكار
                </p>

                <p className="text-xs text-[var(--c-text-dim)]">
                    © 2026 A$R
                </p>



                <Link
                    href="/sources"
                    className="
                        absolute
                        right-10
                        top-1/2
                        flex
                        -translate-y-1/2
                        items-center
                        gap-2
                        text-sm
                        text-[var(--c-text-muted)]
                        transition-colors
                        duration-200
                        hover:text-[var(--c-text)]
                    "
                >
                    المصادر
                </Link>


                <Link
                    href="https://github.com/suss200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        absolute
                        left-10
                        top-1/2
                        flex
                        -translate-y-1/2
                        items-center
                        gap-2
                        text-sm
                        text-[var(--c-text-muted)]
                        transition-colors
                        duration-200
                        hover:text-[var(--c-text)]
                    "
                >
                    <FaGithub size={20} />
                    GitHub
                </Link>

            </div>

        </footer>
    );
}
