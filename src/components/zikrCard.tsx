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
        border border-[var(--c-border)]
        bg-[var(--c-card)]
        p-9
        transition duration-300
        hover:bg-[var(--c-elevated)]
        text-center
        text-lg
        text-[var(--c-text)]
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