
const Button = ({title,handleClick}) => {
  return (
    <button onClick={handleClick} className='bg-gradient-to-r from-buttonGradient1 via-buttonGradient2  to-buttonGradient3 rounded-[4px] w-[172px] h-[53px] text-white font-normal'>
        {title}
    </button>
  )
}

export default Button
