'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../(shared)/button/Button"

const Contact = () => {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className='mt-24 space-y-12 md:space-y-0 md:mt-48 flex flex-col md:flex-row md:px-8  pb-12 '>
        <div data-aos="flip-right" data-aos-duration="1000" className=' flex-1 md:px-16 hidden md:block space-y-6'>
            <h2 className=" text-[24px] md:text-[32px] text-buttonGradient2 font-semibold">Get in touch</h2>
            <p className=" text-[14px] md:text-[16px] text-white">Contact Information</p>
            <p className=" text-[14px] md:text-[16px] text-white">Contact Information</p>
            <p className=" text-[14px] md:text-[16px] text-white">Call Us : 07067981819</p>
            <p className=" text-[14px] md:text-[16px] text-white">we are open from Monday-Friday 08:00am - 05:00pm</p>
        </div>
        <form data-aos="fade-right" data-aos-duration="1000" className=" flex-1 form shadow-2xl flex md:min-h-[600px] flex-col md:items-center  md:justify-center w-[90%] md:w-fit mx-auto space-y-4 rounded-lg p-4">
            <div className="">
                <h2 className=" text-[24px] md:text-[32px] text-buttonGradient2 font-semibold">Questions or need assistance?</h2>
                <h2 className=" text-[24px] md:text-[32px] text-buttonGradient2 font-semibold">Let us know about it!</h2>
            </div>
            <div className=" space-y-8 flex flex-col w-full items-center">
                <input type="name" placeholder="First Name" className=" w-full md:w-[437px] h-[47px] p-2 border-[1px] border-white rounded-[4px]" />
                <input type="email" placeholder="Mail" className=" w-full md:w-[437px] h-[47px] p-2 border-[1px] border-white rounded-[4px]" />
                <textarea placeholder="Message"  className="md:w-[437px] w-full  p-4 border-[1px] border-white rounded-[4px]" />
                <div className=" flex justify-center"><Button title='Submit' /></div>
            </div>
        </form>
    </section>
  )
}

export default Contact
