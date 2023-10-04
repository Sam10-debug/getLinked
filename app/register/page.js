import Image from "next/image"

const Register = () => {
  return (
    <section className="">
        <div className="">
            <Image src='/images/3d-graphic-designer-showing-thumbs-up-png 1.png' alt='3D image of graphics designer showing thumbs up' width={500} height={200} />
        </div>
        <form>
            <h2 className="text-[24px] md:text-[32px] font-bold text-buttonGradient2">Register</h2>
            <p className="text-[14px] text-white font-bold ">Be part of this movement!</p>
            <h2 className="text-[20px] md:text-[24px] font-bold text-white">CREATE YOUR ACCOUNT</h2>
            <div className="">
                <label className="text-[14px] text-white">Team&apos;s Name</label>
                <input type="text" className="md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="Enter the name of your group" />
            </div>
            <div className="">
                <label className="text-[14px] text-white">Phone</label>
                <input type="number" className="md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="Enter your phone number" />
            </div>
            <div className="">
                <label className="text-[14px] text-white">Email</label>
                <input type="email" className="md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="Enter your email address" />
            </div>
            <div className="">
                <label className="text-[14px] text-white">Project Topic</label>
                <input type="email" className="md:w-[263px] md:h-[47px] h-[39px] rounded-[4px] border-white border-[1px]" placeholder="What is your Group Project Topic" />
            </div>
            <div className="">
                <label className="text-[14px] text-white">Category</label>
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="">
                <label className="text-[14px] text-white">Group Size</label>
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </form>
    </section>
  )
}

export default Register
