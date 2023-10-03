import Image from "next/image"
import JudgeText from "@/app/(shared)/judgeText/JudgeText"
import arr from "@/app/(data)/data"
import Button from "@/app/(shared)/button/Button"

const Judging=()=>{

    const mappedArr= arr.map(elem=>(<JudgeText heading={elem.heading} text={elem.text} key={elem.heading} />))
    return(
        <section className=" flex flex-col md:flex-row">
            <div className=' flex-1'>
            <Image src='/images/8046554 1.png' alt='a cartoon image of a  woman holding a pie cart and a man holding a book' width={500} height={200} />
            </div>
            <div className=" flex-1 text-center px-8 md:text-left space-y-4">
                <div className="mb-8">
                    <h3 className=" text-[24px] md:text-[32px] text-white font-bold">Judging Criteria</h3>
                    <h3 className=" text-[24px] md:text-[32px] text-buttonGradient2 font-bold"> Key attributes</h3>
                    {mappedArr}
                </div>
                <Button title='Read More' />
            </div>
        </section>

    )
}

export default Judging