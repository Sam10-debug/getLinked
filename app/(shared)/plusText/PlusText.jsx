import React from 'react'

const PlusText = ({text}) => {
  return (
    <section className=" flex space-x-4 border-b-2 border-buttonGradient1 py-4 px-2 items-center md:w-4/5">
        <p className="">{text}</p> 
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.12 9.24V0.759999H5.38V9.24H4.12ZM0.4 5.6V4.42H9.1V5.6H0.4Z" fill="#D434FE"/>
        </svg>
    </section>
  )
}

export default PlusText
