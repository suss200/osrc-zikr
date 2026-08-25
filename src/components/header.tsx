import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(

<header className="fixed top-0 left-0 z-50 w-full" dir="rtl">    
    <nav className="
    flex
    w-full
    justify-between
    px-9
    bg-[#0E1614]
    items-center
    h-20


">
    <Link href="/" className="py-2">
    <Image src="/logo2.png" alt="أذكاري" width={120} height={40} loading="eager" className="h-auto w-[120px]" />
</Link>


    <div className="flex items-center gap-8">

        <Link href="/"className="py-2 text-[#F3F4F6] hover:text-[#6EE7B7]">الرئيسية</Link>
        <Link href="/azkar-categories"className="py-2 text-[#F3F4F6] hover:text-[#6EE7B7]">الأذكار</Link>
    </div>

    </nav>
</header>

    )

}