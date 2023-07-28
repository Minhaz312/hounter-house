import React from 'react'

export default function Review({review}) {
    const {reviewText,user} = review
  return (
    <div className='text-center mb-14 mt-5'>
        <div className='mx-5 z-[2]'>
            <p className='text-md font-light tracking-wide leading-6 mb-5 text-slate-600'>{reviewText}</p>
            <img src={user.image} className='h-[40px] w-[40px] mx-auto rounded-full' />
            <div>
            <h3 className='text-md'>{user.name}</h3>
            <p className='text-sm text-slate-500'>{user.address}</p>
            </div>
        </div>
    </div>
  )
}
