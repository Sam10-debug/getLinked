'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image"

const Introduction = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className=" flex flex-col lg:flex-row space-y-4 lg:space-y-0">
        <div data-aos="fade-right" data-aos-duration="1000" className=" flex-1 flex justify-center">
            <Image src='/images/The big idea.png' alt='an image of a light bulb' width={500} height={200} />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className=" flex-1 flex flex-col justify-center items-center lg:items-start">
            <h2 className=" text-[24px] font-bold text-white lg:text-[32px]">Introduction to getlinked </h2>
            <h2 className=" text-[24px] font-bold text-buttonGradient1 lg:text-[32px]">tech Hackathon 1.0 </h2>
            <p className="my-4 w-3/4 text-center lg:text-left leading-[27.5px] text-white text-[14px]">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!</p>
        </div>
    </section>
  )
}

export default Introduction
