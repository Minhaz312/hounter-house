import React from 'react'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import {FaFacebookF, FaTwitter} from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Footer() {
  // return ""
  return (
    <div className='relative -auto bg-white md:pt-10 pt-3'>
      <img src='/images/red-yellow-gradient.svg' className='-z-[1] w-auto absolute left-0 top-0 rotate-180 h-full' />
      <img src='/images/footer-gradient.svg' className='-z-[1] w-auto absolute right-0 bottom-0 h-full' />
      <div className='py-10 grid gap-y-8 grid-cols-12 w-full px-2 md:gap-y-0 xl:w-9/12 md:w-11/12 md:mx-auto'>
          <div className='md:col-span-5 sm:col-span-6 col-span-12 flex justify-end md:justify-start md:pr-5'>
            <div>
              <img src='/house-rent-logo-black.svg' className='h-[40px]' />
              <p className='text-[#626687] my-5 w-5/6'>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
              <div className='flex gap-3'>
                <Link to="https://www.facebook.com"><FaFacebookF /></Link>
                <Link to="https://www.twitter.com"><FaTwitter /></Link>
                <Link to="https://www.instagram.com"><BiLogoInstagramAlt /></Link>
              </div>
            </div>
          </div>
          <div className='md:col-span-2 sm:col-span-6 col-span-12 flex justify-start'>
              <div>
                <h3 className='text-[#0E1735] text-xl mb-5'>Quick Links</h3>
                  <ul>
                    <li className='text-[#888B97] mt-2'><Link to="/">Home</Link></li>
                    <li className='text-[#888B97] mt-2'><Link to="/">Articles</Link></li>
                    <li className='text-[#888B97] mt-2'><Link to="/">Privacy & Policy</Link></li>
                    <li className='text-[#888B97] mt-2'><Link to="/">Terms & Conditions</Link></li>
                  </ul>
              </div>
          </div>
          <div className='md:col-span-2 sm:col-span-6 col-span-12 flex justify-start'>
            <div>
              <h3 className='text-[#0E1735] text-xl mb-5'>Property</h3>
              <ul>
                <li className='text-[#888B97] mt-2'>House</li>
                <li className='text-[#888B97] mt-2'>Apartment</li>
                <li className='text-[#888B97] mt-2'>Villa</li>
              </ul>
            </div>
          </div>
          <div className='md:col-span-3 sm:col-span-6 col-span-12 flex justify-start md:justify-end'>
            <div>
              <h3 className='text-[#0E1735] text-xl mb-5'>Contact</h3>
              <p className='text-[#888B97]'>House b/156, Bahaddarhat chattogram bangladesh</p>
              <p className='text-[#888B97] mt-3'>+88 0956 686 867</p>
              <p className='text-[#888B97] mt-3'>info@ourdomain.com</p>
            </div>
          </div>
      </div>
      <div className='text-center py-3 bg-[#10B981] text-white'>&copy;{new Date(Date.now()).getFullYear()} All Right Reserved.</div>
    </div>
  )
}
