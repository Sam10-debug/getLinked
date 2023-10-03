import Image from "next/image"

const Rules = () => {
  return (
    <section className=" flex flex-col-reverse md:flex-row space-y-4 md:space-y-0 px-8 items-center">
    <div className=" flex-1 flex flex-col text-center md:text-left ">
        <h2 className=" text-[24px] font-bold text-white md:text-[32px] ">Rules and </h2>
        <h2 className=" text-[24px] font-bold text-buttonGradient1 md:text-[32px] "> Guidelines</h2>

        <p className="my-4 md:w-3/4 text-center md:text-left leading-[27.5px] text-white text-[14px]">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!</p>
    </div>
    <div className=" flex-1 flex justify-center">
        <Image src='/images/7450159 1.png' alt='an image of a cartoon woman sitting' width={500} height={200} />
    </div>
</section>
  )
}

export default Rules
