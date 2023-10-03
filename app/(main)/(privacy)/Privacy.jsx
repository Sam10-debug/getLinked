import Image from "next/image"
import Button from "@/app/(shared)/button/Button"

const Privacy=()=>{
    return(
        <section className=" flex px-8 flex-col md:flex-row ">
            <div className="flex-1 text-white ">
                <h2 className=" text-[24px] md:text-[32px] font-bold ">Privacy Policy and</h2>
                <h2 className=" text-[24px] md:text-[32px] font-bold text-buttonGradient2">Terms</h2>
                <p className=" text-sm leading-[27.5px] my-4 opacity-75">Last updated on September 12, 2023</p>
                <p className=" text-sm leading-[188.4%] ">Below are our privacy & policy, which outline a lot of goodies. it&apos;s our aim to always take of our participant</p>
                <div className='rounded-[5px] border-buttonGradient2 border-[1px] p-8 mt-12 '>
                    <p className=" text-sm leading-[216.4%] text-center md:text-left">At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                    <h3 className=' font-bold leading-[216.4%] text-buttonGradient2'>Licensing Policy</h3>
                    <p className='text-sm font-bold leading-[216.4%]'>Here are terms of our Standard License:</p>
                    <div className=' flex space-x-2 '>
                        <svg className='mt-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                        <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                        </svg>
                    <p className='text-sm  leading-[216.4%]'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <div className=' flex space-x-2 '>
                        <svg className='mt-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                        <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                        </svg>
                    <p className='text-sm  leading-[216.4%]'>You are licensed to use the item available at any free source sites, for your project developement</p>
                    </div>
                    <div className=' flex justify-center py-2'><Button title='Read More' /></div>
                </div>
            </div>
            <div className='flex-1 padlock flex justify-center'>
                <Image src='/images/08 1.png' alt='cartoon image of a man on a padlock holding the key' width={500} height={200} />
            </div>
        </section>
    )
}
export default Privacy;