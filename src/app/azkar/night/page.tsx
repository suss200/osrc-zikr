"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ScrollToTop from "@/components/scrollTop";
import ZikrItem from "@/components/zikrItem";
import PageTransition from "@/components/pageTransition";
import TypePicker from "@/components/typePicker";

import nightAzkar from "../../data/nightAzkar.json";
import shortNightAzkar from "../../data/shortNightAzkar.json";

export default function NightPage() {
    const [selectedType, setSelectedType] = useState(1);

    const azkar =
        selectedType === 1
            ? nightAzkar
            : shortNightAzkar;

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
                            أذكار المساء
                        </h1>

                        <div className="h-px w-full bg-[var(--c-divider)]" />

                        <TypePicker
                            choice_1="الأذكار الكاملة"
                            choice_2="الأذكار المختصرة"
                            selected={selectedType}
                            onChange={setSelectedType}
                        />

                        <div
                            key={selectedType}
                            className="
                                flex
                                w-full
                                flex-col
                                gap-6
                                azkar-night-change
                            "
                        >
                            {azkar.map((zikr, index) => (
                                <ZikrItem
                                    key={index}
                                    text={zikr.text}
                                    count={zikr.count}
                                    virtue={zikr.virtue}
                                    reference={zikr.reference}
                                />
                            ))}
                        </div>
                    </main>

                    <Footer />
                </div>
            </PageTransition>

            <ScrollToTop />
        </>
    );
}
