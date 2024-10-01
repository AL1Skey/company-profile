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

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

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

export default function BrandSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="our-brnad-logos ">
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-1.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-2.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-4.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-5.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-1.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-2.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-4.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="brand-logo">
                    <img src="/assets/img/logo/brend-logo-5.svg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
