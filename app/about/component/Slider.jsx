'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
    }
}

export default function Slider() {
    return (
        <>
            <Swiper {...swiperOptions} className="about-team-slider-all  comon-slider">
                <SwiperSlide className="about-slider-single text-center">
                    <div className="about-slider-img">
                        <img src="/assets/img/image/about-team1.png" alt="" />
                        <div className="about-team-hover">
                            <div className="about-hover-icons">
                                <ul>
                                    <li>
                                        <Link href="#"><i className="fa-brands fa-twitter" /></Link>
                                        <Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                        <Link href="#"><i className="fa-brands fa-github" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hadding2">
                        <div className="space20" />
                        <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="#">Topo industry
                            specialist</Link></h4>
                        <div className="space10" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">CEO  Founder</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
