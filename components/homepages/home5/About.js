
import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className="sp2" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about5-images" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="about5-img-1">
                                    <img src="/assets/img/shapes/home5-main-shape.svg" alt="" />
                                </div>
                                <div className="about5-img-2">
                                    <img src="/assets/img/image/about5-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hadding5 about5-hadding">
                                <span className="span" data-aos="fade-left" data-aos-duration={600}><img src="/assets/img/icons/span5.svg" alt="" />About us</span>
                                <div className="space24" />
                                <h1 className="font-f-7 weight-700 font-lg-34 line-height-lg-44 line-height-38 font-30" data-aos="fade-left" data-aos-duration={800}>
                                    Our staff has been working in the industry for <span className="after">many years.</span>
                                </h1>
                                <div className="space24" />
                                <p className="font-f-8 font-16 font-w weight-400 line-height-28" data-aos="fade-left" data-aos-duration={1000}>
                                    Most of us know our driving record affects our car insurance rates. But, do you know that
                                    your region and even your neighborhood impacts your home, business, and car insurance rates
                                    Marin County.
                                </p>
                                <div className="space24" />
                                <div className="about5-hadding" data-aos="fade-left" data-aos-duration={700}>
                                    <h4 className="font-f-7 weight-700 line-height-20 font-20"> <img src="/assets/img/icons/about5-icon.svg" alt="" /> Health insurance</h4>
                                    <div className="space8" />
                                    <p className="font-f-8 font-16 font-w weight-400 line-height-28">Since our inception, we have
                                        worked extensively to <br /> build a network consisting of the world’s highest</p>
                                </div>
                                <div className="space32" />
                                <div className="about5-hadding" data-aos="fade-left" data-aos-duration={900}>
                                    <h4 className="font-f-7 weight-700 line-height-20 font-20"> <img src="/assets/img/icons/about5-icon.svg" alt="" /> Education insurance</h4>
                                    <div className="space8" />
                                    <p className="font-f-8 font-16 font-w weight-400 line-height-28">Since our inception, we have
                                        worked extensively to <br /> build a network consisting of the world’s highest</p>
                                </div>
                                <div className="space32" />
                                <div className="button5" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link href="#">More about us <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
