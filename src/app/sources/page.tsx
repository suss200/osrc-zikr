import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";

import PageTransition from "@/components/pageTransition";

const sources = [
    {
        name: "الدرر السنية",
        domain: "dorar.net",
        description:
            "المصدر الأساسي للتحقق من الأحاديث والأذكار الواردة في المشروع، مع الرجوع إلى تخريج الحديث ودرجة صحته.",
        url: "https://dorar.net/",
        icon: FaBookQuran,
    },
    {
        name: "Quran.com",
        domain: "quran.com",
        description:
            "تم الرجوع إليه للمصادر القرآنية، مثل آية الكرسي وبعض الآيات الواردة ضمن الأذكار.",
        url: "https://quran.com/ar",
        icon: FaBookQuran,
    },
];

export default function Sources() {
    return (
        <PageTransition>
        <div
            dir="rtl"
            className="
                min-h-screen
                bg-[var(--c-page)]
                text-[var(--c-text)]
                transition-colors
                duration-300
            "
        >
            <Header fixed/>

            <main className="
                mx-auto
                w-full
                max-w-5xl
                px-6
                pb-24
                pt-36
            ">

                {/* Page Header */}
                <section className="text-center">

                    <p className="
                        text-sm
                        font-semibold
                        tracking-widest
                        text-[var(--c-accent)]
                    ">
                        المصادر
                    </p>

                    <h1 className="
                        mt-3
                        text-4xl
                        font-bold
                        md:text-5xl
                    ">
                        مصادر OSRC Zikr
                    </h1>

                    <p className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        leading-8
                        text-[var(--c-text-muted)]
                    ">
                        نحرص في OSRC Zikr على إسناد الأذكار والأحاديث
                        إلى مصادر موثوقة، مع توضيح المرجع المستخدم
                        لكل ذكر داخل المشروع.
                    </p>

                </section>


                {/* Sources */}
                <section className="
                    mt-16
                    grid
                    gap-6
                    md:grid-cols-2
                ">

                    {sources.map((source) => {
                        const Icon = source.icon;

                        return (
                            <div
                                key={source.domain}
                                className="
                                    rounded-2xl
                                    border
                                    border-[var(--c-border)]
                                    bg-[var(--c-card)]
                                    p-7
                                    transition-colors
                                    duration-300
                                    hover:border-[var(--c-accent-40)]
                                "
                            >

                                <div className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                ">

                                    <div className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[var(--c-accent-10)]
                                        text-[var(--c-accent)]
                                    ">
                                        <Icon />
                                    </div>

                                    <a
                                        href={source.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`زيارة ${source.name}`}
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-[var(--c-border)]
                                            text-[var(--c-text-muted)]
                                            transition-colors
                                            duration-300
                                            hover:border-[var(--c-accent)]
                                            hover:text-[var(--c-accent)]
                                        "
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>

                                </div>


                                <h2 className="
                                    mt-6
                                    text-xl
                                    font-bold
                                ">
                                    {source.name}
                                </h2>

                                <p className="
                                    mt-2
                                    text-sm
                                    text-[var(--c-accent)]
                                ">
                                    {source.domain}
                                </p>

                                <p className="
                                    mt-5
                                    leading-8
                                    text-[var(--c-text-muted)]
                                ">
                                    {source.description}
                                </p>


                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        mt-6
                                        inline-flex
                                        items-center
                                        gap-2
                                        font-medium
                                        text-[var(--c-accent)]
                                        transition-colors
                                        duration-300
                                        hover:text-[var(--c-accent-light)]
                                    "
                                >
                                    زيارة المصدر
                                    <FaExternalLinkAlt className="text-xs" />
                                </a>

                            </div>
                        );
                    })}

                </section>


                {/* Methodology */}
                <section className="
                    mt-16
                    rounded-2xl
                    border
                    border-[var(--c-border)]
                    bg-[var(--c-card)]
                    p-8
                    text-center
                ">

                    <h2 className="
                        text-2xl
                        font-bold
                    ">
                        كيف نستخدم هذه المصادر؟
                    </h2>

                    <p className="
                        mx-auto
                        mt-5
                        max-w-3xl
                        leading-8
                        text-[var(--c-text-muted)]
                    ">
                        يتم إدخال الأذكار في المشروع بشكل يدوي، مع
                        تسجيل عدد مرات التكرار والمرجع والفضل عند توفره.
                        روابط المصادر الموجودة في المشروع تقود إلى
                        الصفحة التي تم الرجوع إليها للتحقق من الذكر.
                    </p>

                </section>


                {/* Open Source */}
                <section className="
                    mt-8
                    rounded-2xl
                    border
                    border-[var(--c-border)]
                    bg-[var(--c-nav)]
                    p-8
                    text-center
                ">

                    <FaGithub className="
                        mx-auto
                        text-3xl
                        text-[var(--c-accent)]
                    " />

                    <h2 className="
                        mt-5
                        text-xl
                        font-bold
                    ">
                        المشروع مفتوح المصدر
                    </h2>

                    <p className="
                        mx-auto
                        mt-3
                        max-w-xl
                        leading-7
                        text-[var(--c-text-muted)]
                    ">
                        يمكنك الاطلاع على طريقة تنظيم المصادر والأذكار
                        والمساهمة في تطوير OSRC Zikr.
                    </p>

                    <Link
                        href="https://github.com/suss200/osrc-zikr"
                        target="_blank"
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[var(--c-accent)]
                            px-6
                            py-3
                            font-medium
                            text-[var(--c-accent)]
                            transition-colors
                            duration-300
                            hover:bg-[var(--c-accent)]
                            hover:text-[var(--c-on-accent)]
                        "
                    >
                        <FaGithub />
                        GitHub
                    </Link>

                </section>

            </main>

            <Footer />
            
        </div>
        </PageTransition>
    );
}
