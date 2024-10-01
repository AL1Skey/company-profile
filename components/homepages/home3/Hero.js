
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className="hero-area home3-hero _relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="home3-main-hadding">
                                <h1 className="font-f-4 weight-700 font-lg-70 line-height-lg-78 line-height-38 font-w" data-aos="fade-right" data-aos-duration={700}>
                                    <span className="after">Make</span> easier your payment with
                                    avigo.
                                </h1>
                                <div className="space12" />
                                <p className="font-f-5 font-20px font-w weight-400 line-height-32" data-aos="fade-right" data-aos-duration={900}>
                                    A Smart Mobile Application You Can Controlo Business Needs Taxes
                                    is Hard. We Make It Easy And Help You Save Money.
                                </p>
                                <div className="space40" />
                                <div className="app-btns" data-aos="fade-right" data-aos-duration={1200}>
                                    <div className="app-btn">
                                        <Link href="#">
                                            <img src="/assets/img/icons/app-1.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="app-btn">
                                        <Link href="#">
                                            <img src="/assets/img/icons/app-2.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="home3-images" data-aos="zoom-out" data-aos-duration={1000}>
                                <div className="home3-img-1">
                                    <img src="/assets/img/shapes/home3-hero1.svg" alt="" />
                                </div>
                                <div className="home3-img-2">
                                    <img src="/assets/img/image/home3-hero2.png" alt="" />
                                </div>
                                <div className="home3-img-3">
                                    <img src="/assets/img/icons/home3-star.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home3-header-star">
                    <img src="/assets/img/icons/home3-star.svg" alt="" />
                </div>
            </div>

        </>

    )
}
