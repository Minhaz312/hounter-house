import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {MdKeyboardArrowRight} from "react-icons/md"
import {MdLocationOn} from "react-icons/md"

import { useMatch } from 'react-router-dom'
import Navbar from './common/Navbar';

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };
  const summarySliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    variableWidth: true
  };
  const partners = [
    {image:"/images/traveloka.png"},
    {image:"/images/ticketdotcom.png"},
    {image:"/images/airbnb.png"},
    {image:"/images/tripadvisor.png"},
    {image:"/images/travel.png"},
    {image:"/images/valettravel.png"},
  ]
  const visitorSummary = [
    {title:"1k+ people",subtitle:"Successfully Getting Home",image:"/images/hero-totalpeople.png"},
    {title:"56 Houses",subtitle:"Sold Monthly",image:"/images/hero-houses.png"},
    {title:"4k+",subtitle:"People looking for houses",image:"/images/people-looking-for-house.png"},
  ]
  return (
    <div className='relative lg:block flex flex-col-reverse md:mb-24 mb-10'>
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14 '>
      <div className='hero_bg_gradient'></div>
      <div className='relative'>
        <img src="/images/hero-home.png" className='w-full max-h-[700px] lg:rounded-bl-[80px] xl:h-auto lg:h-[700px] h-[150px] object-cover' />
        <div className='-mt-32 lg:px-14 md:px-8 px-3'>
          <Slider {...summarySliderSettings}>
              {
                visitorSummary.map((item,i)=><div key={i} className='px-3'>
                  <div className='flex gap-x-3 bg-white rounded-[20px] px-3 py-5'>
                      <img src={item.image} className='h-[46px]' />
                      <div>
                        <h3 className='text-slate-900 font-semibold'>{item.title}</h3>
                        <p className='text-sm text-slate-500'>{item.subtitle}</p>
                      </div>
                  </div>
                </div>)
              }
          </Slider>
        </div>
      </div>
    </div>
    <div className='lg:absolute top-0'>
      {Boolean(useMatch("/"))===true?<header>
              <Navbar />
          </header>:""}
        <div className='w-full px-2 grid grid-cols-1 lg:grid-cols-2 xl:w-9/12 md:w-11/12 md:mx-auto md:mt-10 mt-3'>
          <div className=''>
          <h1 className='text-4xl font-bold capitalize text-center sm:text-5xl lg:text-left'>find the place to live <span className='dream_text'>your dreams</span> easily here</h1>
          <p className='md:text-md text-sm md:my-8 my-4 lg:mx-1 md:mx-10 mx-4 text-slate-500 text-center lg:text-left'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
          <div className='max-w-[400px] lg:w-11/12 border border-slate-300 rounded-full flex p-1 mx-auto lg:mx-0'>
            <button className='font-semibold rounded-full'><MdLocationOn size={30} color='#F59E0B' /></button>
            <input type='text' placeholder='Search for the location you want!' className='w-full py-2' />
            <button className='bg-[#10B981] text-white font-semibold flex items-center px-3 py-2 rounded-full'>search<MdKeyboardArrowRight className='ml-1' /></button>
          </div>
          <div>
            <p className='text-slate-500 mt-8 mb-3 text-center lg:text-left'>Our Partnership</p>
            <Slider {...settings}>
                {
                  partners.map((partner,i)=><div key={i} className='h-[100px] w-full p-3'>
                    <img src={partner.image} className='h-full w-full object-contain' />
                </div>)
                }
            </Slider>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}
