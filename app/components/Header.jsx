
'use client'
import Link from 'next/link'
import { useState } from "react"
import HeaderSlider from './HeaderSlider'
export default function Header() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        <div className="hero-area" style={{ marginTop:"7rem" }}>
        <HeaderSlider>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage:'url("/assets/img/image/home2-main-img.png")', backgroundSize:"100% 100%"}}>
                            <div className="home1-hero-hadding" style={{ height:"40rem" }}>
                                <div className="hadding2 hadding2-main home2-header-hadding">
                                    <h1 className="font-f-2 weight-700 font-40 font-lg-60 line-height-48 line-height-lg-65" data-aos="fade-right" data-aos-duration={900}>
                                        Find your dream home in <span className="after">Europe.</span>
                                    </h1>
                                    <div className="space24" />
                                    <p className="font-18 font-f-2 weight-400 line-height-p-30" data-aos="fade-right" data-aos-duration={1100}>
                                        Search homes in 70 different countries represented by 550 LeadingRE member brokerages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </HeaderSlider>
        </div>
        </>

    )
}
