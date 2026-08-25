import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "@/components/scrollTop";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToAbout from "@/components/scrollToAbout";

import {
    FaBookQuran,
    FaCode,
    FaGithub,
    FaHeart,
    FaMoon,
    FaSun,
} from "react-icons/fa6";

export default function Home() {
    return (
        <div
            dir="rtl"
            className="min-h-screen bg-[#0B1110] text-[#F3F4F6]"
        >
            <Header />

            {/* Hero Section */}
            <section
                className="
                    relative
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    overflow-hidden
                    bg-cover
                    bg-center
                "
                style={{backgroundImage: "url('/hero.jpg')",}} >


                {/* Overlay */}
                <div className="
                    absolute
                    inset-0
                     bg-[#0B1110]/80
                " />

                {/* Background Glow */}
                <div className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#6EE7B7]/10
                    blur-3xl
                " />

{/* Bottom Gradient */}
<div className="
    absolute
    bottom-0
    left-0
    z-10
    h-40
    w-full
    bg-gradient-to-t
    from-[#0B1110]
    via-[#0B1110]/70
    to-transparent
    pointer-events-none
" />



                <div className="
                    relative
                    z-10
                    mx-auto
                    max-w-4xl
                    px-6
                    pt-20
                    text-center
                ">



                    <h1 className="
                        text-5xl
                        font-bold
                        tracking-tight
                        text-white
                        md:text-7xl
                    ">
                        OPEN SOURCE ZIKR
                    </h1>

                    <p className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-lg
                        font-medium
                        leading-9
                        text-[#D1D5DB]
                        md:text-xl
                    ">
                        رفيقك اليومي للأذكار
                    </p>

                    <p className="
                        mx-auto
                        mt-3
                        max-w-2xl
                        leading-8
                        text-[#9CA3AF]
                    ">
                        مشروع عربي مفتوح المصدر يهدف إلى توفير تجربة
                        بسيطة وهادئة لقراءة الأذكار اليومية ومتابعة
                        عدد مرات الذكر بسهولة.
                    </p>

                    <div className="
                        mt-10
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-4
                        sm:flex-row
                    ">

<Link
    href="/azkar-categories"
    className="
        rounded-xl
        bg-[#6EE7B7]
        px-8
        py-4
        font-semibold
        text-[#0B1110]
        transition-colors
        duration-300
        hover:bg-[#52C795]
    "
>
    ابدأ أذكارك
</Link>






<ScrollToAbout/>
                    </div>

                </div>
            </section>


            {/* About Section */}
            <section
                id="about"
                className="
                    border-t
                    border-[#1C2925]
                    px-6
                    py-24
                "
            >
                <div className="mx-auto max-w-5xl">

                    <div className="text-center">

                        <p className="
                            text-sm
                            font-semibold
                            tracking-widest
                            text-[#6EE7B7]
                        ">
                            عن المشروع
                        </p>

                        <h2 className="
                            mt-3
                            text-3xl
                            font-bold
                            md:text-4xl
                        ">
                            OSRC Zikr — مشروع عربي مفتوح المصدر
                        </h2>

                        <p className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            leading-9
                            text-[#9CA3AF]
                        ">
                            OSRC Zikr هو مشروع عربي مفتوح المصدر يهدف
                            إلى توفير تجربة بسيطة وهادئة لقراءة الأذكار
                            اليومية، بعيدًا عن التعقيد والمشتتات.
                        </p>

                    </div>


                    <div className="
                        mt-16
                        grid
                        gap-6
                        md:grid-cols-3
                    ">

                        <div className="
                            rounded-2xl
                            border
                            border-[#24332F]
                            bg-[#111A18]
                            p-7
                            text-center
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#6EE7B7]/40
                        ">
                            <div className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#6EE7B7]/10
                                text-[#6EE7B7]
                            ">
                                <FaCode />
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                مبني بـ Next.js
                            </h3>

                            <p className="
                                mt-3
                                text-sm
                                leading-7
                                text-[#9CA3AF]
                            ">
                                تم بناء المشروع باستخدام Next.js وReact
                                مع واجهة حديثة وسريعة.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[#24332F]
                            bg-[#111A18]
                            p-7
                            text-center
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#6EE7B7]/40
                        ">
                            <div className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#6EE7B7]/10
                                text-[#6EE7B7]
                            ">
                                <FaGithub />
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                مفتوح المصدر
                            </h3>

                            <p className="
                                mt-3
                                text-sm
                                leading-7
                                text-[#9CA3AF]
                            ">
                                الكود متاح للجميع للاطلاع والمساهمة
                                في تطوير المشروع.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[#24332F]
                            bg-[#111A18]
                            p-7
                            text-center
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#6EE7B7]/40
                        ">
                            <div className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#6EE7B7]/10
                                text-[#6EE7B7]
                            ">
                                <FaHeart />
                            </div>

                            <h3 className="mt-5 text-lg font-bold">
                                تجربة هادئة
                            </h3>

                            <p className="
                                mt-3
                                text-sm
                                leading-7
                                text-[#9CA3AF]
                            ">
                                واجهة بسيطة تضع الذكر في المقدمة
                                وتقلل المشتتات قدر الإمكان.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* Features Section */}
            <section
                id="features"
                className="
                    border-t
                    border-[#1C2925]
                    px-6
                    py-24
                "
            >
                <div className="mx-auto max-w-5xl">

                    <div className="text-center">

                        <p className="
                            text-sm
                            font-semibold
                            tracking-widest
                            text-[#6EE7B7]
                        ">
                            المميزات
                        </p>

                        <h2 className="
                            mt-3
                            text-3xl
                            font-bold
                            md:text-4xl
                        ">
                            مصمم للذكر بدون تعقيد
                        </h2>

                        <p className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            leading-8
                            text-[#9CA3AF]
                        ">
                            كل جزء في OSRC Zikr مصمم ليجعل الوصول إلى
                            الذكر وقراءته ومتابعة عدده أمرًا بسيطًا.
                        </p>

                    </div>


                    <div className="
                        mt-16
                        grid
                        gap-6
                        md:grid-cols-2
                    ">

                        <div className="
                            rounded-2xl
                            border
                            border-[#24332F]
                            bg-[#111A18]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#6EE7B7]/40
                        ">
                            <FaSun className="text-2xl text-[#6EE7B7]" />

                            <h3 className="mt-5 text-xl font-bold">
                                أذكار الصباح
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[#9CA3AF]
                            ">
                                ابدأ يومك بأذكار الصباح في صفحة منظمة
                                وسهلة الاستخدام.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[#24332F]
                            bg-[#111A18]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#6EE7B7]/40
                        ">
                            <FaMoon className="text-2xl text-[#6EE7B7]" />

                            <h3 className="mt-5 text-xl font-bold">
                                أذكار المساء والنوم
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[#9CA3AF]
                            ">
                                اختم يومك بالأذكار واجعلها جزءًا من
                                روتينك اليومي.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[#24332F]
                            bg-[#111A18]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#6EE7B7]/40
                        ">
                            <FaBookQuran className="text-2xl text-[#6EE7B7]" />

                            <h3 className="mt-5 text-xl font-bold">
                                محتوى منظم
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[#9CA3AF]
                            ">
                                كل ذكر يحتوي على عدد مرات التكرار
                                والفضل والمصدر عند توفره.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[#24332F]
                            bg-[#111A18]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#6EE7B7]/40
                        ">
                            <FaHeart className="text-2xl text-[#6EE7B7]" />

                            <h3 className="mt-5 text-xl font-bold">
                                عداد تفاعلي
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[#9CA3AF]
                            ">
                                تابع عدد مرات الذكر من خلال عداد
                                تصاعدي ومؤشر تقدم واضح.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* Open Source Section */}
            <section className="px-6 py-24">

                <div className="
                    mx-auto
                    max-w-4xl
                    rounded-3xl
                    border
                    border-[#24332F]
                    bg-[#111A18]
                    px-6
                    py-16
                    text-center
                ">

                    <FaGithub className="
                        mx-auto
                        text-4xl
                        text-[#6EE7B7]
                    " />

                    <h2 className="
                        mt-6
                        text-3xl
                        font-bold
                    ">
                        OSRC Zikr مفتوح المصدر
                    </h2>

                    <p className="
                        mx-auto
                        mt-5
                        max-w-2xl
                        leading-8
                        text-[#9CA3AF]
                    ">
                        المشروع مفتوح المصدر ومتاح للجميع. يمكنك
                        الاطلاع على الكود، اقتراح تحسينات، أو المساهمة
                        في تطوير تجربة أفضل للمستخدمين العرب.
                    </p>

                    <a
                        href="https://github.com/suss200"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-[#6EE7B7]
                        bg-[#6EE7B7]
                        px-8
                        py-4
                        font-semibold
                        text-[#0B1110]
                        transition-all
                        duration-300
                        hover:bg-transparent
                        hover:text-[#6EE7B7]
"


                    >
                        <FaGithub />
                        GitHub
                    </a>

                </div>

            </section>


            <Footer />
            <ScrollToTop/>

        </div>
    );
}

