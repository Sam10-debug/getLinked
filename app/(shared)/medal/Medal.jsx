import Image from "next/image"

const Medal = ({source,altText,style,pos,money}) => {
  return (
    <div className={style}>
         <Image src={source} alt={altText} width={400} height={250} className="absolute top-[-35%]" />
        <h3 className=" text-[12px] md:text-[40px] text-white font-bold leading-[216.4%]">{pos}</h3>
        <h3 className=" text-[12px] md:text-[24px] text-white font-bold leading-[216.4%]">Runner</h3>
        <h3 className=" text-[14px] md:text-[32px] text-buttonGradient1 font-bold leading-[216.4%]">{money}</h3>
    </div>
  )
}

export default Medal
