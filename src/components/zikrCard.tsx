import Link from "next/link"

type ZikrCardProps = {
    name:string,
    redirectLink:string,
    backgroundGif: string;
}

export default function ZikrCard(props:ZikrCardProps){
    return(
        <>
      <Link
    href={props.redirectLink}
    className="
        group   
        w-full
        rounded-2xl
        border border-[#24332F]
        bg-[#111A18]
        p-9
        transition duration-300
        hover:bg-[#172420]
        text-center
        text-lg
        text-[#F3F4F6]
        font-semibold
        relative
        h-25
        overflow-hidden
        hover:scale-[1.02]
        
       
    
"
>
     <img src={props.backgroundGif} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

     <span className="relative z-10">
  {props.name}
</span>
    
</Link>
        </>
    )
}