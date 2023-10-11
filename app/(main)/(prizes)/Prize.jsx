'use client'
import Image from "next/image"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Medal from "@/app/(shared)/medal/Medal"

const Prize = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className="">
        <div data-aos="zoom-in" data-aos-duration="1000" className=" text-white  flex flex-col lg:w-1/2 items-center lg:ml-auto">
            <h2 className="text-[24px] font-bold lg:text-[36px]">Prizes and </h2>
            <h2 className="text-[24px] font-bold lg:text-[36px] text-buttonGradient2">Rewards</h2>
            <p className=" leading-[170.9%] text-center lg:text-left text-white text-base font-normal">Highlight of the prizes or rewards for winners and for participants.</p>
        </div>
            <section data-aos="fade-right" data-aos-duration="1000" className=" flex lg:mt-48 px-8 flex-col lg:flex-row space-y-16 lg:space-y-0">
                <div className="flex-1 flex justify-center items-center">
                    <Image src='/9486889 1.png' alt='image of a trophy' width={500} height={200} />
                </div>
                <div className="flex-1 flex items-center space-x-4 justify-center">
                    <Medal style=' bg-purple-200 w-[90px] lg:w-[212px] border-buttonGradient1 border-2 rounded-[8px] h-[125px] lg:h-[296px] relative flex flex-col justify-end items-center' source='/images/silver_medal 1.png' altText='image of a silver medal' pos='2nd' money='N300,000' />
                    <Medal style=' bg-purple-200 w-[90px] lg:w-[212px] border-buttonGradient1 border-2 rounded-[8px] h-[147px] lg:h-[347px] relative flex flex-col justify-end items-center' source='/images/gold_medal 1.png' altText='image of a gold medal' pos='1st' money='N400,000' />
                    <Medal style=' bg-purple-200 w-[90px] lg:w-[212px] border-buttonGradient1 border-2 rounded-[8px] h-[125px] lg:h-[296px] relative flex flex-col justify-end items-center' source='/images/bronze_medal 1.png' altText='image of a bronze medal' pos='3rd' money='N150,000' />
                </div>
            </section>
    </section>
  )
}

export default Prize
