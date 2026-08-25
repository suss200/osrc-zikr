import Header from "@/components/header";
import ZikrItem from "@/components/zikrItem";
import { sleepAzkar } from "../data/sleepAzkar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrollTop";

export default function SleepPage() {
    return (
        <div className="min-h-screen bg-[#0B1110]">
            <Header />

            <main className="
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
            ">
                <h1 className="text-4xl font-bold text-[#F3F4F6]">
                    أذكار الصباح
                </h1>

                {sleepAzkar.map((zikr, index) => (
                    <ZikrItem
                        key={index}
                        text={zikr.text}
                        count={zikr.count}
                        virtue={zikr.virtue}
                        reference={zikr.reference}
                    />
                ))}
            </main>

            <Footer/>
            <ScrollToTop/>
        </div>
    );
}

