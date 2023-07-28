import React from 'react'
import { IoMdBed } from 'react-icons/io'
import { MdBathroom, MdCall } from 'react-icons/md'
import { RiParkingBoxFill } from 'react-icons/ri'
import { HiWifi } from 'react-icons/hi'

export default function Contact() {
    const owner = {name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}
  return (
    <section className='relative bg-green-50 py-5 md:px-0 px-2'>
        <img src="/images/red-yellow-gradient.svg" className='absolute right-0 -top-0 -z-10' />
        <div className='grid grid-cols-12 md:gap-x-5 md:gap-y-0 gap-y-5 my-10 w-full xl:w-9/12 md:w-11/12 md:mx-auto'>
            <div className='col-span-12 sm:col-span-7 flex justify-end items-center'>
                <div>
                    <p className='text-[#F59E0B] text-[13px] mb-5'>Ready To Sell</p>
                    <h1 className='text-[#1B1C57] text-3xl font-semibold mb-3'>Let’s tour and see our house!</h1>
                    <p className='text-sm text-[#626687] mb-2'>Houses recommended by our partners that have been curated to become the home of your dreams!</p>
                    <h3 className='text-md text-[#626687] font-semibold'>House Detail</h3>
                    <div className='grid grid-cols-2 my-3'>
                        <div className='text-[#626687] flex items-center gap-x-2 text-md mb-2'>
                            <IoMdBed />
                            <p>2 Delux Bed</p>
                        </div>
                        <div className='text-[#626687] flex items-center gap-x-2 text-md mb-2'>
                            <MdBathroom />
                            <p>1 Bathroom</p>
                        </div>
                        <div className='text-[#626687] flex items-center gap-x-2 text-md mb-2'>
                            <RiParkingBoxFill />
                            <p>Free parking</p>
                        </div>
                        <div className='text-[#626687] flex items-center gap-x-2 text-md mb-2'>
                            <HiWifi />
                            <p>Free Wifi</p>
                        </div>
                    </div>
                    <div className='flex md:gap-x-14 gap-x-6 items-center border-t mt-3 pt-3'>
                        <div className='flex items-start gap-x-3'>
                            <img src={owner.image} className='h-[30px] w-[30px] rounded-full' />
                            <div>
                            <h3 className='text-md'>{owner.name}</h3>
                            <p className='text-sm text-slate-500'>{owner.address}</p>
                            </div>
                        </div>
                        <button className='bg-[#10B981] text-white font-semibold flex items-center px-3 py-2 rounded-full text-[12px]'><MdCall className='mr-2' size={14} />Contact Now</button>
                    </div>
                </div>
                
            </div>
            <div className='col-span-12 sm:col-span-5 flex justify-center sm:justify-end items-center'>
                <div className='bg-white rounded shadow-sm p-4'>
                    <img src='/images/house-video.png' className='h-[300px] w-[350px]' />
                </div>
            </div>
        </div>
    </section>
  )
}
