
'use client'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Hero() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="hero-area home5-hero _relative">
                <div className="container">`
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="home5-main-hadding hadding5">
                                <span className="span"><img src="/assets/img/icons/span5.svg" data-aos="fade-right" data-aos-duration={600} alt="" /> We give you piece of mind</span>
                                <div className="space24" />
                                <h1 className="font-f-7 weight-700 font-lg-44 line-height-lg-48 line-height-38 font-30" data-aos="fade-right" data-aos-duration={600}>
                                    Since long, we have been providing <span className="after">group health</span> insurance and
                                    other solutions.
                                </h1>
                                <div className="space24" />
                                <p className="font-f-8 font-16 font-w weight-400 line-height-28" data-aos="fade-right" data-aos-duration={600}>
                                    Since our inception, we have worked extensively to build a ensure network consisting of the
                                    world’s highest rated insurance.
                                </p>
                                <div className="space32" />
                                <div className="button5" data-aos="fade-right" data-aos-duration={600}>
                                    <Link href="#">Make an Appointment <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-6" data-aos="zoom-out" data-aos-duration={800}>
                            <div className="video-play-sec">
                                <div className="home5-header-images">
                                    <img src="/assets/img/image/home5-hero-img.png" alt="" />
                                    <div className="home5-header-image1">
                                        <img src="/assets/img/shapes/home5-main-shape.svg" alt="" />
                                    </div>
                                    <div className="modal-video-box">
                                        <div className="hadding5 play-hadding">
                                            <h6 className="font-f-8 font-16 line-height-28 weight-400">What is a happy family like?
                                                Watch this video <br /> to her their answer.</h6>
                                        </div>
                                        <div className="play-btn">
                                            <a id="play-video" className="video-play-button video-action-btn1 video-play-button2" onClick={() => setOpen(true)}>
                                                <span />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home3-header-star">
                    <img src="/assets/img/icons/home3-star.svg" alt="" />
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="SZEflIVnhH8" onClose={() => setOpen(false)} />
        </>

    )
}
