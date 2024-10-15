
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Navigation} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // loop: true,

    // Navigation
    navigation: {
        nextEl: '.testimonial-next-arrow',
        prevEl: '.testimonial-prev-arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Blog({...props}) {
    const [data, setData] = useState()
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog`,{cache:'no-store'}).then(res=>res.json())
            setData(response)
        }
        fetchData()
    },[])
    return (
        <>
            <div className="litings sp2" id="listings">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="hadding2" data-aos="fade-up" data-aos-duration={600}>
                                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                    Our <span className="after">Blog</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={900}>
                            <div className="slider-arrows">
                                <div className="testimonial-next-arrow testimonial-next-arrow1">
                                    <span><i className="fa-solid fa-arrow-left" /></span>
                                </div>
                                <div className="testimonial-prev-arrow testimonial-prev-arrow1">
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <Swiper {...swiperOptions} className="ml--15">
                            {data?.map((blog, index) => (
                            <SwiperSlide className="siting-single-sliider">
                                <div className="liting-slider-img comon-slider-img">
                                    <div className="img-border">
                                        <img src={`${blog?.image}`} alt={`${blog?.image}`} className='tw-w-full tw-h-52' />
                                    </div>

                                </div>
                                <div className="space20" />
                                <div className="liting-hadding-all hadding2">
                                    <div className="liting-hadding hadding2">
                                        <h4 className="font-f-2 font-18 line-height-18 weight-500">
                                        {blog?.title}
                                        </h4>
                                        <div className="space8" />
                                        <p className="font-16 line-height-16 weight-400">
                                        {blog?.description}
                                        </p>
                                        <div className="space24" />
                                        <div className="all-read-btn">
                                            <Link href={`/blog/${index+1}`} className="font-f-2 line--height-16 font-16 weight-700">Read more <i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="space24" />

                                </div>
                            </SwiperSlide>
                            ))}
                            {/* <SwiperSlide className="siting-single-sliider">
                                <div className="liting-slider-img comon-slider-img">
                                    <div className="img-border">
                                        <img src="/assets/img/image/home2-liting-2.png" alt="" />
                                    </div>

                                </div>
                                <div className="space20" />
                                <div className="liting-hadding-all hadding2">
                                    <div className="liting-hadding hadding2">
                                        <h4 className="font-f-2 font-18 line-height-18 weight-500">
                                            Sunset Plaza
                                        </h4>
                                        <div className="space8" />
                                        <p className="font-16 line-height-16 weight-400">
                                            3504 S Olive Avenue, West Palm Beach
                                        </p>
                                    </div>
                                    <div className="space24" />
                                    <div className="hadding-pricing">
                                        <div className="hadding-pricing-1">
                                            <h2 className="font-f-2 font-26 line-height-26 weight-500">
                                                $899,000
                                            </h2>
                                        </div>
                                        <div className="liting-hadding-icon">
                                            <div className="liting-hadding-icon-1">
                                                <Link href="#"><img src="/assets/img/icons/liting-like1.svg" alt="" /></Link>
                                            </div>
                                            <div className="liting-hadding-icon-1 liting-hadding-icon-2">
                                                <Link href="#"><img src="/assets/img/icons/liting-like2.svg" alt="" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="liting-box-bottom-icons">
                                        <div className="liting-ion">
                                            <div >
                                                <img src="/assets/img/icons/liting-3.svg" alt="" />
                                            </div>
                                            <div className="featured-p">
                                                <p className="font-f-2">5 Bed</p>
                                            </div>
                                        </div>
                                        <div className="liting-ion">
                                            <div >
                                                <img src="/assets/img/icons/liting-2.svg" alt="" />
                                            </div>
                                            <div className="featured-p">
                                                <p className="font-f-2">2 Bath</p>
                                            </div>
                                        </div>
                                        <div className="liting-ion">
                                            <div >
                                                <img src="/assets/img/icons/liting-1.svg" alt="" />
                                            </div>
                                            <div className="featured-p">
                                                <p className="font-f-2">1500 SQFT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide> */}
                            
                        </Swiper>
                    </div>
                </div>
            </div>

        </>

    )
}
