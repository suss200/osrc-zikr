import Header from "@/components/header";
import ZikrItem from "@/components/zikrItem";
import  morningAzkar  from "@/app/data/morningAzkar.json";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrollTop";
import PageTransition from "@/components/pageTransition";

export default function MorningPage() {
    return (
        <PageTransition>
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
<div className="h-px w-full bg-white/10" />
                {morningAzkar.map((zikr, index) => (
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

        </PageTransition>
    );
}

