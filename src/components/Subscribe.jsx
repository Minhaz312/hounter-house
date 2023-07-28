import React from 'react'
import { HiMail } from 'react-icons/hi'

export default function Subscribe() {
  return (
    <section className='relative h-[200px] md:h-[400px]'>
        <img src="/images/subscribe-bg.png" className='w-full h-full absolute -z-10 top-0 left-0 right-0 object-cover' />
        <div className='w-full px-2 md:w-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2] md:px-0'>
            <div className='w-full md:w-10/12 sm:w-11/12 mx-auto flex flex-col items-center gap-y-8'>
                <h1 className='text-2xl md:text-4xl text-center text-[#1B1C57]'>Subscribe For More Info and update from Hounter</h1>
                <div className='bg-white max-w-[600px] lg:w-full border border-slate-300 rounded-full flex mx-auto p-1 lg:mx-0'>
                    <button className='font-semibold rounded-full ms-1'><HiMail className='text-[20px] md:text-[30px]' color='#3B82F6' /></button>
                    <input type='text' placeholder='Enter your mail here' className='w-full py-1 md:py-4 px-3 text-sm md:text-md focus:outline-none focus:border-0' />
                    <button className='bg-[#10B981] min-w-[150px] text-white font-semibold px-1 md:px-3 py-2 rounded-full text-sm md:text-md'>Subscribe Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}
