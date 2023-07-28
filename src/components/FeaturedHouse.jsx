import React, { useRef } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import Slider from 'react-slick'
import HouseCard from './HouseCard';
export default function FeaturedHouse() {
    const sliderRef = useRef(null)
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
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
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

    const houseList = [
        {name:"Roselands House",type:"new",price:"$ 35.000.000",owner:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}},
        {name:"Roselands House",type:"popular",price:"$ 35.000.000",owner:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}},
        {name:"Roselands House",type:"best",price:"$ 35.000.000",owner:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}},
        {name:"Roselands House",type:"new",price:"$ 35.000.000",owner:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}},
        {name:"Roselands House",type:"popular",price:"$ 35.000.000",owner:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}},
    ]

    const handleGoNext = () => {
        sliderRef.current.slickNext()
    }
    const handleGoPrevious = () => {
        sliderRef.current.slickPrev()
    }

  return (
    <section className='w-full px-2 my-10 xl:w-9/12 md:w-11/12 md:mx-auto'>
        <div className='flex justify-between'>
            <h1 className='mt-10 md:mt-0 text-2xl font-semibold text-slate-900'>Featured House</h1>
            <div className='hidden md:flex gap-x-2'>
                <button className='bg-[#10B981] text-white font-semibold flex items-center px-3 py-2 rounded-full' onClick={handleGoPrevious}><IoIosArrowBack /></button>
                <button className='bg-[#10B981] text-white font-semibold flex items-center px-3 py-2 rounded-full' onClick={handleGoNext}><IoIosArrowForward /></button>
            </div>
        </div>
        <div>
            <Slider {...settings} ref={sliderRef}>
                {
                    houseList.map((item,i)=><div key={i} className='pr-0 pr-2 md:pr-8 py-8'>
                        <HouseCard house={item} />
                    </div>)
                }
            </Slider>
            <div className='flex justify-center my-3 md:hidden'>
                <div className='flex gap-x-2'>
                    <button className='bg-[#10B981] text-white font-semibold flex items-center px-3 py-2 rounded-full' onClick={handleGoPrevious}><IoIosArrowBack /></button>
                    <button className='bg-[#10B981] text-white font-semibold flex items-center px-3 py-2 rounded-full' onClick={handleGoNext}><IoIosArrowForward /></button>
                </div>
            </div>
        </div>
    </section>
  )
}
