'use client'
import Image from "next/image"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className=" flex flex-col items-center mt-16">
        <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-[24px] lg:text-[32px] leading-[27.5px] text-white font-bold">Partners and Sponsors</h2>
        <p data-aos="fade-right" data-aos-duration="1000" className=" text-sm text-white text-center">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        <div data-aos="flip-right" data-aos-duration="1000" className="img-div border-buttonGradient2 border-2 rounded-lg   flex justify-center items-center mt-12">
            <Image src='/images/Partner and Sponsors.png' alt="image of partners and sponsors" width={800} height={200} />
        </div>
    </section>
  )
}

export default Partners
