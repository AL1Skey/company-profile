'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
    }
}
export default function BlogSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className=" gallary-slider ">
                <SwiperSlide className="single-gallary">
                    <img src="/assets/img/image/blog-details-carosul.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="single-gallary">
                    <img src="/assets/img/image/blog-details-carosul.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="single-gallary">
                    <img src="/assets/img/image/blog-details-carosul.png" alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="slider-arrow-cs">
                <button className="h1p">
                    Prev
                </button>
                <button className="h1n">
                    Next
                </button>
            </div>
        </>
    )
}
