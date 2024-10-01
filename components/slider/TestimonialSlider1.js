'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="home5-slider ">
                <SwiperSlide className="testimonial5-single">
                    <div className="testimonial-slider-srat-list">
                        <ul>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                        </ul>
                    </div>
                    <div className="testimonial-box-hadding">
                        <p className="fotn-f-8 font-16 line-height-28 weight-500">I’m proud to own one of the Bay
                            Area’s most service-oriented and community-rooted insurance firms. From the Castro
                            and beyond, including Haight-Ashbury, NOPA, Mission District, Cole Valley, Twin
                            Peaks, Noe Valley and the greater San Francisco Bay Area.</p>
                        <div className="space24" />
                        <div className="testimonial5-bottom-img-hadding">
                            <div className="testimonial5-bottom-img">
                                <img src="/assets/img/image/testimonial5-img.png" alt="" />
                            </div>
                            <div className="bottom-hadding5">
                                <h6><Link href="#" className="font-f-7">Ricky Bashirian</Link></h6>
                                <div className="space8" />
                                <p>Human Marketing Agent</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="testimonial5-single">
                    <div className="testimonial-slider-srat-list">
                        <ul>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                        </ul>
                    </div>
                    <div className="testimonial-box-hadding">
                        <p className="fotn-f-8 font-16 line-height-28 weight-500">I’m proud to own one of the Bay
                            Area’s most service-oriented and community-rooted insurance firms. From the Castro
                            and beyond, including Haight-Ashbury, NOPA, Mission District, Cole Valley, Twin
                            Peaks, Noe Valley and the greater San Francisco Bay Area.</p>
                        <div className="space24" />
                        <div className="testimonial5-bottom-img-hadding">
                            <div className="testimonial5-bottom-img">
                                <img src="/assets/img/image/testimonial5-img.png" alt="" />
                            </div>
                            <div className="bottom-hadding5">
                                <h6><Link href="#" className="font-f-7">Ricky Bashirian</Link></h6>
                                <div className="space8" />
                                <p>Human Marketing Agent</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="testimonial5-single">
                    <div className="testimonial-slider-srat-list">
                        <ul>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                        </ul>
                    </div>
                    <div className="testimonial-box-hadding">
                        <p className="fotn-f-8 font-16 line-height-28 weight-500">I’m proud to own one of the Bay
                            Area’s most service-oriented and community-rooted insurance firms. From the Castro
                            and beyond, including Haight-Ashbury, NOPA, Mission District, Cole Valley, Twin
                            Peaks, Noe Valley and the greater San Francisco Bay Area.</p>
                        <div className="space24" />
                        <div className="testimonial5-bottom-img-hadding">
                            <div className="testimonial5-bottom-img">
                                <img src="/assets/img/image/testimonial5-img.png" alt="" />
                            </div>
                            <div className="bottom-hadding5">
                                <h6><Link href="#" className="font-f-7">Ricky Bashirian</Link></h6>
                                <div className="space8" />
                                <p>Human Marketing Agent</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="testimonial5-single">
                    <div className="testimonial-slider-srat-list">
                        <ul>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                            <li><i className="fa-solid fa-star" /></li>
                        </ul>
                    </div>
                    <div className="testimonial-box-hadding">
                        <p className="fotn-f-8 font-16 line-height-28 weight-500">I’m proud to own one of the Bay
                            Area’s most service-oriented and community-rooted insurance firms. From the Castro
                            and beyond, including Haight-Ashbury, NOPA, Mission District, Cole Valley, Twin
                            Peaks, Noe Valley and the greater San Francisco Bay Area.</p>
                        <div className="space24" />
                        <div className="testimonial5-bottom-img-hadding">
                            <div className="testimonial5-bottom-img">
                                <img src="/assets/img/image/testimonial5-img.png" alt="" />
                            </div>
                            <div className="bottom-hadding5">
                                <h6><Link href="#" className="font-f-7">Ricky Bashirian</Link></h6>
                                <div className="space8" />
                                <p>Human Marketing Agent</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
