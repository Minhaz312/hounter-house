import React from 'react'
import { MdWatchLater } from 'react-icons/md'

export default function Articles() {
  return (
    <section className='relative my-10 md:my-24 px-2 md:px-0'>
        <img src="/images/article-gradient.svg" className='absolute left-0 -top-[300px] -z-10' />
        <div className='text-center my-10'>
            <p className='text-[13px] mb-5 text-[#F59E0B] bottom_border'>See our reviews</p>
            <h1 className='text-2xl text-[#1B1C57] font-semibold'>What Our User Say About Us</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5  w-full xl:w-9/12 md:w-11/12 md:mx-auto'>
            <div>
                {
                    [1,2,3].map((item,i)=><div key={i} className='flex mb-3 cursor-pointer hover:bg-white p-3 hover:shadow-lg transition-[0.33s]'>
                        <img src="/images/house1.png" className='h-[100px] w-[150px] rounded-md mr-3' />
                        <div>
                        <div className='flex items-start gap-x-3'>
                            <img src="/images/house1.png" className='h-[30px] w-[30px] rounded-full' />
                            <div>
                            <p className='text-sm text-slate-500'>username</p>
                            <h3 className='text-[14px]  md:text-md'>The things we need to check when we want to buy a house</h3>
                            </div>
                        </div>
                            <div className='mt-2 md:mt-3 flex gap-x-3 items-center'>
                                <MdWatchLater className='text-slate-400 mx-1' />
                                <p className='text-slate-400 text-sm'>6 min read | 24 Apr 2021</p>
                            </div>
                        </div>
                    </div>)
                }
                <div className='flex justify-center py-3'>
                    <button className='bg-[#D1FAE5] hover:bg-[#c4f8dc] text-[#047857] font-semibold flex items-center px-3 text-sm py-2 rounded-md'>See More</button>
                </div>
            </div>
            <div className='mb-3 cursor-pointer'>
                <img src="/images/house1.png" className='h-[300px] w-full object-cover rounded-md mr-3' />
                <div>
                <div className='flex items-start gap-x-3 mt-5 mb-2'>
                    <img src="/images/house1.png" className='h-[30px] w-[30px] rounded-full' />
                    <div>
                    <p className='text-sm text-slate-500'>username</p>
                    </div>
                </div>
                <h3 className='text-xl mb-1'>12 Things to know before buying a house</h3>
                <p className='text-sm text-slate-500'>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                    <div className='mt-3 flex gap-x-3 items-center'>
                        <MdWatchLater className='text-slate-400 mr-1' />
                        <p className='text-slate-400 text-sm'>6 min read | 24 Apr 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
