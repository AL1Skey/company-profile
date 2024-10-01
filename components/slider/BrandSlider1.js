'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,



    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
}

export default function BrandSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="our-brnad-logos ">
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-1.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-2.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-4.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-5.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-1.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-2.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-4.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brand2-logo-5.svg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
