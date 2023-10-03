
const JudgeText=({text,heading})=>{
    return(
        <p className='my-4 text-sm text-white leading-[173.5%]'>
            <span className=" text-pink text-base font-bold">{heading}</span> 
            {text}
        </p>
    )
}

export default JudgeText