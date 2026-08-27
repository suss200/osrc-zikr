import ZikrCard from "@/components/zikrCard";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrollTop";
import PageTransition from "@/components/pageTransition";
export default function AzkarCategories() {
  return (
    
    <>
 <PageTransition>
<div className="flex min-h-screen flex-col overflow-hidden bg-[var(--c-page)] transition-colors duration-300">    
  <Header fixed />
    <main className="mx-auto flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16 pt-24">
      <h1 className="text-4xl font-bold text-[var(--c-text)]">
    إختر ذِكرَك
</h1>
      <h2 className="text-l  text-[var(--c-text-subtle)]">
    إختر تصنيف الاذكار اللتي ستقرأها
</h2>

<ZikrCard name="أذكار الصباح" redirectLink="/azkar/morning" backgroundGif="/morning.gif "/>
<ZikrCard name="أذكار المساء" redirectLink="/azkar/night" backgroundGif="/night.gif" />
<ZikrCard name="أذكار النوم" redirectLink="/azkar/sleep" backgroundGif="/sleep.gif" />

      </main>
<Footer/>
    </div>
    </PageTransition>
            <ScrollToTop/>
    </>
  );
}
