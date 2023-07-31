import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='mt-10 w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className=' text-gray-300 py-4'>Submit</p>
        </div>
        <input className='bg-white p-3' name='name' type="text" placeholder='Name' />
        <input className='my-4  bg-white p-3' type="email" placeholder='Email' name='email' />
        <textarea className='bg-white p-3' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 mt-4 hover:bg-pink-600 px-4 py-4 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}
