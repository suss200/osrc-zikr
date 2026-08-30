"use client";

import Header from "@/components/header";
import ZikrItem from "@/components/zikrItem";
import sleepAzkar from "@/app/data/sleepAzkar.json";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrollTop";
import PageTransition from "@/components/pageTransition";

export default function SleepPage() {
    return (
        <>
            <PageTransition>
                <div className="min-h-screen bg-[var(--c-page)] transition-colors duration-300">
                    <Header fixed />

                    <main
                        className="
                            mx-auto
                            flex
                            w-full
                            max-w-2xl
                            flex-col
                            items-center
                            gap-6
                            px-6
                            pb-16
                            pt-32
                        "
                    >
                        <h1 className="text-4xl font-bold text-[var(--c-text)]">
                            أذكار النوم
                        </h1>

                        <div className="h-px w-full bg-[var(--c-divider)]" />

                        {sleepAzkar.map((zikr) => (
                            <ZikrItem
                                key={zikr.id}
                                id={zikr.id}
                                category="sleep"
                                text={zikr.text}
                                count={zikr.count}
                                virtue={zikr.virtue}
                                reference={zikr.reference}
                            />
                        ))}
                    </main>

                    <Footer />
                </div>
            </PageTransition>

            <ScrollToTop />
        </>
    );
}