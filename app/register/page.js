"use client"
import Image from "next/image"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../(shared)/button/Button"
import axios from "axios"
import { useState } from "react"


const Register = () => {
    const baseUrl='https://backend.getlinked.ai'
	const [formData,setFormData]=useState({
		team_name:"",
        phone_number:null,
		email:"",
        project_topic:"",
        category:"",
        group_size:''
	})

    const handleClick=(e)=>{
        e.preventDefault()
    }

    const handleChange=(e)=>{
		const {name,value}=e.target
		setFormData(prev=>{
			return {
				...prev,
				[name]:value
			}
		})
        console.log(formData)
	}
    const handleSignIn=async(e)=>{
		e.preventDefault()
		try{
			const response= await axios.post(`{{${baseUrl}}}/hackathon/registration`,formData)
			console.log(response) //response has been parsed already by axios under the hood
		}catch(err){
			console.error(err)
		}
    }

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <section className="mt-24 space-y-12 md:mt-48 flex flex-col md:flex-row md:px-8  pb-12">
        <div data-aos="flip-right" data-aos-duration="1000" className=" flex-1 flex justify-center items-center">
            <Image src='/images/3d-graphic-designer-showing-thumbs-up-png 1.png' alt='3D image of graphics designer showing thumbs up' width={500} height={200} />
        </div>
        <form data-aos="fade-right" data-aos-duration="1000" className=" rounded-[12px] form shadow-2xl p-8 flex-1 max-h-[740px]">
            <h2 className="text-[24px] md:text-[32px] mb-8 font-bold text-buttonGradient2">Register</h2>
            <p className="text-[14px] text-white my-2 font-bold ">Be part of this movement!</p>
            <h2 className="text-[20px] mb-4 md:text-[24px] font-bold text-white">CREATE YOUR ACCOUNT</h2>
            <section className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
            <div className=" flex flex-col"> 
            
            <label htmlFor='name'  className="text-[14px] text-white">Team&apos;s Name</label>
            <input onChange={handleChange} id="name" name="name" value={formData.team_name} type="text" className="text-[14px] p-2 md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="Enter the name of your group" />
        </div>
        <div className=" flex flex-col">
            <label htmlFor='phone' className="text-[14px] text-white">Phone</label>
            <input onChange={handleChange} type="number" name="phone" value={formData.phone_number} id="phone" className="text-[14px] p-2 md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="Enter your phone number" />
        </div>
        <div className=" flex flex-col">
            <label htmlFor='email' className="text-[14px] text-white">Email</label>
            <input onChange={handleChange} type="email" name="email" value={formData.email} id="email" className="text-[14px] p-2 md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="Enter your email address" />
        </div>
        <div className=" flex flex-col">
            <label htmlFor='project' className="text-[14px] text-white">Project Topic</label>
            <input onChange={handleChange} type="email" id="project" name="project" value={formData.project_topic} className="text-[14px] p-2 md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="What is your Group Project Topic" />
        </div>
        <div className=" flex flex-col">
            <label htmlFor='category' className="text-[14px] text-white ">Category</label>
            <select onChange={handleChange}  name="category" value={formData.category} id="category"  className="h-[39px] md:h-[47px] md:w-[263px] rounded-[4px]">
                <option value="">Select your category</option>
                <option value="FrontEnd">FrontEnd</option>
                <option value="BackEnd">BackEnd</option>
            </select>
        </div>
        <div className=" flex flex-col">
            <label htmlFor='group' className="text-[14px] text-white">Group Size</label>
            <select onChange={handleChange} id="group" name="group" value={formData.group_size}  className="h-[39px] md:h-[47px] md:w-[263px] rounded-[4px]">
                <option value="">Select</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
            </select>
        </div>
            </section>
            <div className=" flex justify-center py-4 md:py-8"><Button handleClick={handleClick} title='Register' /></div>
        </form>
    </section>
  )
}

export default Register
