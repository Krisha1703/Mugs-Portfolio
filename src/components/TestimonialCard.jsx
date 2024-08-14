import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({image, text, name, position}) => {
  return (
    <div className='bg-[#F8F8F8] flex text-black flex-col lg:flex-row lg:p-8 p-2 rounded-md my-10 justify-between w-full justify-items-center items-center'>
        <Image src={image} width={150} height={150} alt='testimonial' className='xlllll:scale-150 xlllll:ml-10 lg:scale-100 scale-75'/>
        <div className='flex flex-col w-full lg:w-3/4 xlllll:w-2/3 xxl:w-2/3'>
            <span className='flex'>
            <p className='text-[#FD6F00] font-bold text-xl  italic -mt-2'>“</p>
            <p className='mx-1 text-sm xlllll:text-xl xlllll:leading-10'>{text}</p>
            </span>
            <p className='text-[#FD6F00] font-bold italic text-xl lg:ml-[7vw] ml-[25vw] -mt-2'>“</p>
           
            <h2 className='font-semibold mt-5 mx-4 xlllll:text-xl'>{name}</h2>
            <h3 className='text-sm xlllll:text-lg mx-4'>{position}</h3>
        </div>
    </div>
  )
}

export default TestimonialCard