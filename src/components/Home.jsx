import React from 'react'
import {BsArrowRight} from "react-icons/bs"
export default function Home() {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
      
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-pink-600'>My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Htet Min Khant</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm MERN Stack developer</h2>
        <p className='text-gray-100 py-4 max-w-[700px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fugit accusantium animi unde dolorum temporibus eaque a tenetur alias asperiores veniam nulla iste molestiae quam quaerat soluta sapiente, ducimus nisi?</p>
        <div>
            <button className='flex items-center hover:bg-pink-600 hover:border-pink-600 text-white border-2 px-6 py-2'>View Work  
            <span>
            <BsArrowRight className='ml-3'/>
            </span>
            </button>

           
        </div>
      </div>

    </div>
  )
}
