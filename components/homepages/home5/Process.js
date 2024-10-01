
import Link from 'next/link'

export default function Process() {
    return (
        <>
            <div className="work-proces sp2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="hadding5">
                                <span className="span" data-aos="fade-right" data-aos-duration={600}><img src="/assets/img/icons/span5.svg" alt="" />Working proces</span>
                                <div className="space24" />
                                <h1 className="font-f-7 weight-700 font-lg-34 line-height-lg-44 line-height-38 font-30" data-aos="fade-right" data-aos-duration={900}>
                                    We work with a wide range quality, reliable <span className="after">insurance companies.</span>
                                </h1>
                                <div className="space24" />
                                <p className="font-f-8 font-16 font-w weight-400 line-height-28" data-aos="fade-right" data-aos-duration={1000}>
                                    Most of us know our driving record affects our car insurance rates. But, do you know that
                                    your region and even your neighborhood impacts.
                                </p>
                                <div className="space24" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="service5-hadding" data-aos="fade-right" data-aos-duration={1200}>
                                            <p className="font-f-8 font-16 font-w weight-400 line-height-28"><img src="/assets/img/icons/about5-icon.svg" alt="" /> Since our inception, we have
                                                worked extensively to build a network consisting of the world’s highest</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service5-hadding" data-aos="fade-right" data-aos-duration={800}>
                                            <p className="font-f-8 font-16 font-w weight-400 line-height-28"><img src="/assets/img/icons/about5-icon.svg" alt="" /> Since our inception, we have
                                                worked extensively to build a network consisting of the world’s highest</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="space24" />
                                        <div className="service5-hadding" data-aos="fade-right" data-aos-duration={900}>
                                            <p className="font-f-8 font-16 font-w weight-400 line-height-28"><img src="/assets/img/icons/about5-icon.svg" alt="" /> Since our inception, we have
                                                worked extensively to build a network consisting of the world’s highest</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="space24" />
                                        <div className="service5-hadding" data-aos="fade-right" data-aos-duration={600}>
                                            <p className="font-f-8 font-16 font-w weight-400 line-height-28"><img src="/assets/img/icons/about5-icon.svg" alt="" /> Since our inception, we have
                                                worked extensively to build a network consisting of the world’s highest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space32" />
                            <div className="button5" data-aos="fade-right" data-aos-duration={800}>
                                <Link href="#">Request a quote <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="proces-items" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="proces-item-single">
                                    <div className="proces-item-box">
                                        <h4><Link href="#" className="font-f-7 font-24 line-height-24 weight-500">Professional
                                            service</Link></h4>
                                    </div>
                                    <div className="proces-item-box-num">
                                        <h6 className="font-f-7 font-18 line-height-18 weight-700 font-w">01</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="proces-items" data-aos="zoom-out" data-aos-duration={1000}>
                                <div className="proces-item-single">
                                    <div className="proces-item-box">
                                        <h4><Link href="#" className="font-f-7 font-24 line-height-24 weight-500">Expertise you can
                                            trust</Link></h4>
                                    </div>
                                    <div className="proces-item-box-num">
                                        <h6 className="font-f-7 font-18 line-height-18 weight-700 font-w">02</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="proces-items" data-aos="zoom-out" data-aos-duration={600}>
                                <div className="proces-item-single">
                                    <div className="proces-item-box">
                                        <h4><Link href="#" className="font-f-7 font-24 line-height-24 weight-500">Promote responses</Link>
                                        </h4>
                                    </div>
                                    <div className="proces-item-box-num">
                                        <h6 className="font-f-7 font-18 line-height-18 weight-700 font-w">03</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="proces-items" data-aos="zoom-out" data-aos-duration={1500}>
                                <div className="proces-item-single">
                                    <div className="proces-item-box">
                                        <h4><Link href="#" className="font-f-7 font-24 line-height-24 weight-500">Experience agents</Link>
                                        </h4>
                                    </div>
                                    <div className="proces-item-box-num">
                                        <h6 className="font-f-7 font-18 line-height-18 weight-700 font-w">04</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
