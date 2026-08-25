import Image from "next/image";

import Link from "next/link";

import { FaGithub } from "react-icons/fa";

export default function Footer() {

    return (

        <footer 
            id="site-footer"
        className="
            bg-[#0E1614]
            border-t
            border-[#24332F]
            w-full
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
                    className="h-auto w-[90px]"
                />

                <p className="text-sm text-[#9CA3AF]">
                    رفيقك اليومي للأذكار
                </p>

                <p className="text-xs text-[#6B7280]">
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
                        text-[#9CA3AF]
                        transition-colors
                        duration-200
                        hover:text-[#F3F4F6]
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
                        text-[#9CA3AF]
                        transition-colors
                        duration-200
                        hover:text-[#F3F4F6]
                    "
                >
                    <FaGithub size={20} />
                    GitHub
                </Link>

            </div>

        </footer>
    );
}
