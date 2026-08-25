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
                bg-[#0B1110]
                text-[#F3F4F6]
            "
        >
            <Header />

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
                        text-[#6EE7B7]
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
                        text-[#9CA3AF]
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
                                    border-[#24332F]
                                    bg-[#111A18]
                                    p-7
                                    transition-colors
                                    duration-300
                                    hover:border-[#6EE7B7]/40
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
                                        bg-[#6EE7B7]/10
                                        text-[#6EE7B7]
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
                                            border-[#24332F]
                                            text-[#9CA3AF]
                                            transition-colors
                                            duration-300
                                            hover:border-[#6EE7B7]
                                            hover:text-[#6EE7B7]
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
                                    text-[#6EE7B7]
                                ">
                                    {source.domain}
                                </p>

                                <p className="
                                    mt-5
                                    leading-8
                                    text-[#9CA3AF]
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
                                        text-[#6EE7B7]
                                        transition-colors
                                        duration-300
                                        hover:text-[#86efc5]
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
                    border-[#24332F]
                    bg-[#111A18]
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
                        text-[#9CA3AF]
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
                    border-[#24332F]
                    bg-[#0E1614]
                    p-8
                    text-center
                ">

                    <FaGithub className="
                        mx-auto
                        text-3xl
                        text-[#6EE7B7]
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
                        text-[#9CA3AF]
                    ">
                        يمكنك الاطلاع على طريقة تنظيم المصادر والأذكار
                        والمساهمة في تطوير OSRC Zikr.
                    </p>

                    <Link
                        href="https://github.com/suss200"
                        target="_blank"
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[#6EE7B7]
                            px-6
                            py-3
                            font-medium
                            text-[#6EE7B7]
                            transition-colors
                            duration-300
                            hover:bg-[#6EE7B7]
                            hover:text-[#0B1110]
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
