import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiMenuAltRight} from "react-icons/bi"

export default function Navbar() {
  return (
    <nav>
        <div className='flex justify-between items-center py-5 w-full px-2 xl:w-9/12 md:w-11/12 md:mx-auto'>
            <img src='/logo.svg' className='h-[40px]' />
            <div className='items-center gap-x-14 hidden md:flex'>
                <ul className='flex gap-x-8'>
                    <li><NavLink to="/about" className="px-3 text-sm py-1.5 bg-white/10 border border-slate-200 text-white rounded-2xl" >About Us</NavLink></li>
                    <li><NavLink to="/article" className="px-3 text-sm py-1.5 bg-white/10 border border-slate-200 text-white rounded-2xl" >Article</NavLink></li>
                    <li><NavLink to="/property" className="px-3 text-sm py-1.5 bg-white/10 border border-slate-200 text-white rounded-2xl" >Property</NavLink></li>
                </ul>
                <button className='bg-[#D1FAE5] text-[#047857] font-semibold flex items-center px-3 text-sm py-2 rounded-full'>Sign Up</button>
            </div>
            <div className='block md:hidden'>
              <button><BiMenuAltRight color='#000' size={35} /></button>
              <div className='relative'>
                <ul className='bg-[#047857] hidden p-3 absolute right-0 top-0 w-[150px]'>
                    <li className='mb-5 border-b border-b-slate-200 hover:bg-white/10'><NavLink to="/about" className="px-3 text-sm py-1.5 text-white rounded-2xl" >About Us</NavLink></li>
                    <li className='mb-5 border-b border-b-slate-200 hover:bg-white/10'><NavLink to="/article" className="px-3 text-sm py-1.5 text-white rounded-2xl" >Article</NavLink></li>
                    <li className='mb-5 border-b border-b-slate-200 hover:bg-white/10'><NavLink to="/property" className="px-3 text-sm py-1.5 text-white rounded-2xl" >Property</NavLink></li>
                </ul>
              </div>
            </div>
        </div>
    </nav>
  )
}
