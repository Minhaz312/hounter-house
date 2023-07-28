import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Review from './Review';

export default function ReviewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 3000,
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
              breakpoint: 650,
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
      const reviewList = [
        {
            reviewText:"Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",user:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}
        },
        {
            reviewText:"Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",user:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}
        },
        {
            reviewText:"Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",user:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}
        },
        {
            reviewText:"Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",user:{name:"Dianne Russell",image:"/images/people-looking-for-house.png",address:"Manchester, Kentucky"}
        }
      ]
  return (
    <section className='my-10 w-full px-2 xl:w-9/12 md:w-11/12 md:mx-auto'>
      <div className='text-center my-5'>
        <p className='text-[13px] mb-5 text-[#F59E0B] bottom_border'>See our reviews</p>
        <h1 className='text-2xl text-[#1B1C57] font-semibold'>What Our User Say About Us</h1>
      </div>
      <div className='mt-10'>
        <Slider {...settings}>
            {
                reviewList.map((review,i)=><div key={i} >
                  <Review review={review} />
                </div>)
            }
        </Slider>
      </div>
    </section>
  )
}
