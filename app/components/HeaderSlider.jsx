"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeaderSlider({ slider, ...props }) {
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
  ];

  console.log(slider, "AAAAAAAAAAAAAAAAAAAASSFFFFFFFFF");

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
        {slider?.map((slide, index) => (
          <SwiperSlide className="h-full" key={index}>
            <div>
              <div className="row align-items-center">
                <div
                  className="bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("${slide.image}")`,
                    backgroundSize: 'cover',
                    width: "100vw",
                  }}
                >
                  <div
                    className="home1-hero-hadding container android:tw-px-10 android:-tw-translate-y-[10rem]"
                    style={{ height: "40rem" }}
                  >
                    <div className="hadding2 hadding2-main home2-header-hadding">
                      <h1
                        className="font-f-2 weight-700 font-40 font-lg-60 android:tw-text-[2rem] line-height-48 line-height-lg-65"
                        style={{
                          color: "white",

                          textShadow:
                            "2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black",
                        }}
                        data-aos="fade-right"
                        data-aos-duration={900}
                      >
                        {slide.title}
                      </h1>
                      <div className="space24" />
                      <p
                        className="tw-text-[1.6rem] font-f-2 weight-400 line-height-p-30 android:tw-text-[0.9rem] "
                        data-aos="fade-right"
                        style={{
                          color: "white",
                          
                          textShadow:
                            "2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black",
                            
                        }}
                        data-aos-duration={1100}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}
