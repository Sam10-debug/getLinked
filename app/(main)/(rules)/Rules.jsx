'use client'
import Image from "next/image"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rules = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className=" flex flex-col-reverse lg:flex-row space-y-4 lg:space-y-0 px-8 items-center">
    <div data-aos="zoom-in" data-aos-duration="1000" className=" flex-1 flex flex-col text-center lg:text-left ">
        <h2 className=" text-[24px] font-bold text-white lg:text-[32px] ">Rules and </h2>
        <h2 className=" text-[24px] font-bold text-buttonGradient1 lg:text-[32px] "> Guidelines</h2>

        <p className="my-4 lg:w-3/4 text-center lg:text-left leading-[27.5px] text-white text-[14px]">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!</p>
    </div>
    <div data-aos="fade-right" data-aos-duration="1000" className=" flex-1 flex justify-center">
        <Image src='/images/7450159 1.png' alt='an image of a cartoon woman sitting' width={500} height={200} />
    </div>
</section>
  )
}

export default Rules
