import React from 'react'
import { BiSolidHome } from 'react-icons/bi';
import {PiWalletFill  } from 'react-icons/pi'
import {AiTwotoneFire  } from 'react-icons/ai'

export default function HouseCard({house}) {
    const {name,type,price,owner,image} = house;

    const HouseType = () => {
        if(type.toLowerCase()==="new"){
            return <div className='flex items-center gap-x-1 px-2 py-1 border rounded-full absolute bottom-5 left-5 bg-blue-100 text-blue-700'>
            <BiSolidHome size={14} />
            <p className='uppercase text-[12px]'>{type}</p>
        </div>
        }else if(type.toLowerCase()==="popular"){
            return <div className='flex items-center gap-x-1 px-2 py-1 border rounded-full absolute bottom-5 left-5 bg-[#FEE2E2] text-red-600'>
            <AiTwotoneFire size={14} />
            <p className='uppercase text-[12px]'>{type}</p>
        </div>
        }else{
            return <div className='flex items-center gap-x-1 px-2 py-1 border rounded-full absolute bottom-5 left-5 bg-green-200 text-green-800'>
            <PiWalletFill size={14} />
            <p className='uppercase text-[12px]'>{type}</p>
        </div>
        }
    }

  return (
    <div className='cursor-pointer'>
        <div className='relative w-full h-[300px]'>
            <HouseType />
            <img src='/images/house1.png' className='h-full w-full rounded-2xl' />
        </div>
        <h2 className='text-2xl mt-3 mb-2'>{name}</h2>
        <h3 className='text-md'>{price}</h3>
        <div className='flex items-start gap-x-3 mt-4'>
            <img src={owner.image} className='h-[30px] w-[30px] rounded-full' />
            <div>
            <h3 className='text-md'>{owner.name}</h3>
            <p className='text-sm text-slate-500'>{owner.address}</p>
            </div>
        </div>
    </div>
  )
}
