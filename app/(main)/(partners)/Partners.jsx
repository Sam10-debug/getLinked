import Image from "next/image"

const Partners = () => {
  return (
    <section className=" flex flex-col items-center mt-16">
        <h2 className="text-[24px] md:text-[32px] leading-[27.5px] text-white font-bold">Partners and Sponsors</h2>
        <p className=" text-sm text-white text-center">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        <div className=" border-buttonGradient2 border-2 rounded-md w-[90%] md:w-4/5 flex justify-center h-[148px] md:h-[560px] items-center mt-12">
            <Image src='/images/Partner and Sponsors.png'alt="image of partners and sponsors" width={800} height={200} />
        </div>
    </section>
  )
}

export default Partners
