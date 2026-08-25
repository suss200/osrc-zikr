import ZikrCard from "@/components/zikrCard";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function AzkarCategories() {
  return (
    <>

<div className="flex min-h-screen flex-col overflow-hidden bg-[#0B1110]">    
  <Header/>
    <main className="mx-auto flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16 pt-24">
      <h1 className="text-4xl font-bold text-[#F3F4F6]">
    إختر ذِكرَك
</h1>
      <h2 className="text-l  text-[#a2adac]">
    إختر تصنيف الاذكار اللتي ستقرأها
</h2>

<ZikrCard name="أذكار الصباح" redirectLink="/morning" backgroundGif="/morning.gif"/>
<ZikrCard name="أذكار المساء" redirectLink="/evening" backgroundGif="/night.gif" />
<ZikrCard name="أذكار النوم" redirectLink="/sleep" backgroundGif="/sleep.gif" />

      </main>
<Footer/>
    </div>
    </>
  );
}
