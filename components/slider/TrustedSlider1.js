'use client'
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
}

export default function TrustedSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="trusred-slider-all  _relative">
                <SwiperSlide className="trusted-single-slider">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="trusted-slider-img">
                                <img src="/assets/img/image/home1-slider-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hadding trusted-hadding">
                                <div className="hadding-span hadding-span2">
                                    <img src="/assets/img/icons/titel-icon-2.svg" alt="" />
                                </div>
                                <p className="font-20 weight-400 line-height-36 font-f-2 font-w">
                                    "I'm now able to organize hundreds of links across 15 different affiliate
                                    programs and easily re-use them across my site. Best of all, the displays
                                    are beautiful and eye-catching, showing my readers exactly what to click and
                                    buy."
                                </p>
                                <div className="space24" />
                                <div className="slider-bottom">
                                    <h4 className="font-f-1 font-16 weight-700 line-height-16 font-w">Jennifer Duran
                                    </h4>
                                    <div className="space5" />
                                    <p className="font-f-2 weight-400 font-14 line-height-14 pera-c-2">Head of
                                        Content and Partner Marketing at Brex</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="trusted-single-slider">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="trusted-slider-img">
                                <img src="/assets/img/image/home1-slider-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hadding trusted-hadding">
                                <div className="hadding-span hadding-span2">
                                    <img src="/assets/img/icons/titel-icon-2.svg" alt="" />
                                </div>
                                <p className="font-20 weight-400 line-height-36 font-f-2 font-w">
                                    "I'm now able to organize hundreds of links across 15 different affiliate
                                    programs and easily re-use them across my site. Best of all, the displays
                                    are beautiful and eye-catching, showing my readers exactly what to click and
                                    buy."
                                </p>
                                <div className="space24" />
                                <div className="slider-bottom">
                                    <h4 className="font-f-1 font-16 weight-700 line-height-16 font-w">Jennifer Duran
                                    </h4>
                                    <div className="space5" />
                                    <p className="fong-f-2 weight-400 font-14 line-height-14 pera-c-2">Head of
                                        Content and Partner Marketing at Brex</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="trusted-single-slider">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="trusted-slider-img">
                                <img src="/assets/img/image/home1-slider-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hadding trusted-hadding">
                                <div className="hadding-span hadding-span2">
                                    <img src="/assets/img/icons/titel-icon-2.svg" alt="" />
                                </div>
                                <p className="font-20 weight-400 line-height-36 font-f-2 font-w">
                                    "I'm now able to organize hundreds of links across 15 different affiliate
                                    programs and easily re-use them across my site. Best of all, the displays
                                    are beautiful and eye-catching, showing my readers exactly what to click and
                                    buy."
                                </p>
                                <div className="space24" />
                                <div className="slider-bottom">
                                    <h4 className="font-f-1 font-16 weight-700 line-height-16 font-w">Jennifer Duran
                                    </h4>
                                    <div className="space5" />
                                    <p className="fong-f-2 weight-400 font-14 line-height-14 pera-c-2">Head of
                                        Content and Partner Marketing at Brex</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
