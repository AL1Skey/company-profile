"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider({ className = "",useIcon=true,data, ...props }) {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };

  return (
    <>
      <Swiper
        {...swiperOptions}
        className="about-team-slider-all tw-overflow-visible! comon-slider"
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index} className="about-slider-single text-center">
            <div className="tw-group tw-relative tw-overflow-hidden tw-rounded-lg tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-z-10 hover:tw-shadow-xl">
              <div className=" tw-overflow-hidden">
                <img
                  src={slide?.image}
                  className={`tw-transition-transform tw-duration-300 tw-ease-in-out ${className !=="" ?  className : "tw-scale-75 tw-w-full tw-h-[25rem] group-hover:tw-scale-100 android:tw-scale-[0.5]"}`}
                  alt="Team member"
                />
              </div>
              {useIcon && (
                <div className="about-team-hover  tw-translate-x-[-0.5rem] android:tw-translate-x-6">
                <div className="about-hover-icons">
                  <ul>
                    <li>
                      <Link href={slide?.twitter}>
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link href={slide?.facebook}>
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                      <Link href={slide?.instagram}>
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              )}
              
            </div>
            <div className="hadding2">
              <div className="space20" />
              <h4 className="font-f-2 font-22 line--height-22 weight-500">
                {" "}
                <Link href="#">{slide?.name}</Link>
              </h4>
              {/* <div className="space10" /> */}
              <p className="font-f-2 weight-400 line-height-28 font-16">
              {slide?.position}
              </p>
              <div className="space10" />
              <p className="font-f-2 weight-400 line-height-28 font-16">
              {slide?.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
