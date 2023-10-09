'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@/app/(shared)/button/Button'

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className=" px-8">
            <div data-aos="flip-right" data-aos-duration="1000" className=" flex flex-col items-end space-y-2 justify-end py-4">
                <h3 className="text-base lg:text-lg lg:text-[36px] text-white font-bold italic">Igniting a Revolution in HR Innovation</h3>
                <Image src='/Vector 4.svg' width={300} height={200} alt='image of a bent line' className='' />
            </div>
         <section className=" flex flex-col lg:flex-row mt-8 space-y-4 lg:space-y-0">
          <div data-aos="fade-right" data-aos-duration="1000" className=" font-bold text-white  flex-1 flex flex-col items-center lg:items-start">
            <h1 className="lg:text-[80px] text-[36px] my-0 leading-tight">getlinked Tech</h1>
            <div className="lg:text-[80px] text-[36px] my-0 py-0">
              <h1 className="">Hackathon <span className="  text-buttonGradient2">1.0</span></h1>
              {/* <Chain /> */}
              {/* <Boom /> */}
            </div>
            <p className="my-8 lg:text-lg font-normal text-center lg:text-left">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
            <Link href='/register'><Button title='Register' /></Link>
          </div>
          <div data-aos="fade-down-right" data-aos-duration="1000" className=" flex-1 flex justify-center">
            <Image src='/images/man-wearing-smart-glasses-touching-virtual-screen 1.png' alt='image of man wearing smart glasses touching virtual screen ' width={500} height={300} />
          </div>
          </section>   
       
    </section>
  )
}

export default Hero
