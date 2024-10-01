"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Hero from '@/components/homepages/home1/Hero'

export default function AutoSlideHeader(props) {
  const slides = [
    {
      title: "Welcome to Our Site",
      description: "Discover amazing products and services",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Special Offers",
      description: "Check out our latest deals",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Join Our Community",
      description: "Connect with like-minded individuals",
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  return (
    <header className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {(props?.slider ? props?.slider : slides).map((slide, index) => (
          <SwiperSlide className='h-full' key={index}>
            {props.children}
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  )
}