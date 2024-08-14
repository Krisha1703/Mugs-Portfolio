import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ image, title, text}) => {
  return (
    <div className='flex flex-col gap-4'>
        <Image 
            src={image}
            width={300}
            height={300}
            alt='image'
            className='xlllll:w-[400px] xlllll:h-[400px]'
        />
        <h2 className='text-[#FD6F00] xlllll:text-[1.6rem]'>{title}</h2>
        <h1 className='font-bold xlllll:text-[1.6rem]'>{text}</h1>
    </div>
  )
}

export default ProjectCard