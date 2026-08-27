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
            className="min-h-screen bg-[var(--c-page)] text-[var(--c-text)] transition-colors duration-300"
        >
            <Header fixed/>

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
                     bg-[var(--c-overlay)]
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
                    bg-[var(--c-glow)]
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
    from-[var(--c-grad-from)]
    via-[var(--c-grad-via)]
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
                        text-[var(--c-hero-title)]
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
                        text-[var(--c-text-body)]
                        md:text-xl
                    ">
                        رفيقك اليومي للأذكار
                    </p>

                    <p className="
                        mx-auto
                        mt-3
                        max-w-2xl
                        leading-8
                        text-[var(--c-text-muted)]
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
        bg-[var(--c-accent)]
        px-8
        py-4
        font-semibold
        text-[var(--c-on-accent)]
        transition-colors
        duration-300
        hover:bg-[var(--c-accent-strong)]
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
                    border-[var(--c-border-soft)]
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
                            text-[var(--c-accent)]
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
                            text-[var(--c-text-muted)]
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
                            border-[var(--c-border)]
                            bg-[var(--c-card)]
                            p-7
                            text-center
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--c-accent-40)]
                        ">
                            <div className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[var(--c-accent-10)]
                                text-[var(--c-accent)]
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
                                text-[var(--c-text-muted)]
                            ">
                                تم بناء المشروع باستخدام Next.js وReact
                                مع واجهة حديثة وسريعة.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[var(--c-border)]
                            bg-[var(--c-card)]
                            p-7
                            text-center
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--c-accent-40)]
                        ">
                            <div className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[var(--c-accent-10)]
                                text-[var(--c-accent)]
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
                                text-[var(--c-text-muted)]
                            ">
                                الكود متاح للجميع للاطلاع والمساهمة
                                في تطوير المشروع.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[var(--c-border)]
                            bg-[var(--c-card)]
                            p-7
                            text-center
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--c-accent-40)]
                        ">
                            <div className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-[var(--c-accent-10)]
                                text-[var(--c-accent)]
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
                                text-[var(--c-text-muted)]
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
                    border-[var(--c-border-soft)]
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
                            text-[var(--c-accent)]
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
                            text-[var(--c-text-muted)]
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
                            border-[var(--c-border)]
                            bg-[var(--c-card)]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--c-accent-40)]
                        ">
                            <FaSun className="text-2xl text-[var(--c-accent)]" />

                            <h3 className="mt-5 text-xl font-bold">
                                أذكار الصباح
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[var(--c-text-muted)]
                            ">
                                ابدأ يومك بأذكار الصباح في صفحة منظمة
                                وسهلة الاستخدام.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[var(--c-border)]
                            bg-[var(--c-card)]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--c-accent-40)]
                        ">
                            <FaMoon className="text-2xl text-[var(--c-accent)]" />

                            <h3 className="mt-5 text-xl font-bold">
                                أذكار المساء والنوم
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[var(--c-text-muted)]
                            ">
                                اختم يومك بالأذكار واجعلها جزءًا من
                                روتينك اليومي.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[var(--c-border)]
                            bg-[var(--c-card)]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--c-accent-40)]
                        ">
                            <FaBookQuran className="text-2xl text-[var(--c-accent)]" />

                            <h3 className="mt-5 text-xl font-bold">
                                محتوى منظم
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[var(--c-text-muted)]
                            ">
                                كل ذكر يحتوي على عدد مرات التكرار
                                والفضل والمصدر عند توفره.
                            </p>
                        </div>


                        <div className="
                            rounded-2xl
                            border
                            border-[var(--c-border)]
                            bg-[var(--c-card)]
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[var(--c-accent-40)]
                        ">
                            <FaHeart className="text-2xl text-[var(--c-accent)]" />

                            <h3 className="mt-5 text-xl font-bold">
                                عداد تفاعلي
                            </h3>

                            <p className="
                                mt-3
                                leading-7
                                text-[var(--c-text-muted)]
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
                    border-[var(--c-border)]
                    bg-[var(--c-card)]
                    px-6
                    py-16
                    text-center
                ">

                    <FaGithub className="
                        mx-auto
                        text-4xl
                        text-[var(--c-accent)]
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
                        text-[var(--c-text-muted)]
                    ">
                        المشروع مفتوح المصدر ومتاح للجميع. يمكنك
                        الاطلاع على الكود، اقتراح تحسينات، أو المساهمة
                        في تطوير تجربة أفضل للمستخدمين العرب.
                    </p>

                    <a
                        href="https://github.com/suss200/osrc-zikr"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-[var(--c-accent)]
                        bg-[var(--c-accent)]
                        px-8
                        py-4
                        font-semibold
                        text-[var(--c-on-accent)]
                        transition-all
                        duration-300
                        hover:bg-transparent
                        hover:text-[var(--c-accent)]
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

