import PlusText from "@/app/(shared)/plusText/PlusText"
import Image from "next/image"

const Frequently = () => {
    const arr =[
        'Can I work on a project I started before the hackathon?',
        'What happens if I need help during the hackathon?',
        'What happens if I dont have an idea for a project?',
        'Can I join a team or do I have to come with one?',
        'What happens after the hackathon ends',
        'Can I work on a project I started before the hackthon?',
]
const mappedArr=arr.map(elem=>(<PlusText key={elem} text={elem}  />))
  return (
    <section className=" text-white flex flex-col md:flex-row px-8">
        <div className=" flex-1 flex flex-col   ">
            <h2 className=" text-[24px] md:text-[32px] font-bold ">Frequently Asked</h2>
            <h2 className=" text-[24px] md:text-[32px] font-bold text-buttonGradient2">Questions</h2>
            <p className=" text-sm leading-[27.5px]">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
            {mappedArr}
        </div>
        <div className=" flex-1 flex justify-center items-center">
            <Image src='/images/cwok_casual_21 1.png' alt='image of a cartoon man sitting on a cloud' width={500} height={200} />
        </div>
    </section>
  )
}

export default Frequently