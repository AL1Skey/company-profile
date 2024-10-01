
import Link from 'next/link'

export default function Service() {
    return (
        <>
            <div className="service4 sp2 service5-bg" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <div className="hadding5">
                                <span className="span" data-aos="fade-up" data-aos-duration={600}><img src="/assets/img/icons/span5.svg" alt="" /> Our service</span>
                                <div className="space24" />
                                <h1 className="font-f-7 weight-700 font-lg-34 line-height-lg-44 line-height-38 font-30" data-aos="fade-up" data-aos-duration={900}>
                                    We offer guidance help you make the <span className="after">right decisions</span> for yourself.
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-duration={600}>
                            <div className="space40" />
                            <div className="service5-box">
                                <div className="service5-box-icon">
                                    <img src="/assets/img/icons/service5-icon.svg" alt="" />
                                </div>
                                <div className="hadding5 secvice5-hadding">
                                    <div className="space20" />
                                    <h4 className="font-f-7 weight-700 line-height-20 font-20"><Link href="#">Home insurance</Link></h4>
                                    <div className="space20" />
                                    <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                        Since our inception, we have worked extensively to build a ensure network consisting of
                                        the world’s highest rated insurance.
                                    </p>
                                    <div className="space32" />
                                    <div className="read5-btn">
                                        <Link className="font-f-8 font-16 line-height-16 weight-700" href="#">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-duration={900}>
                            <div className="space40" />
                            <div className="service5-box">
                                <div className="service5-box-icon">
                                    <img src="/assets/img/icons/service5-icon.svg" alt="" />
                                </div>
                                <div className="hadding5 secvice5-hadding">
                                    <div className="space20" />
                                    <h4 className="font-f-7 weight-700 line-height-20 font-20"><Link href="#">Auto insurance</Link></h4>
                                    <div className="space20" />
                                    <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                        Since our inception, we have worked extensively to build a ensure network consisting of
                                        the world’s highest rated insurance.
                                    </p>
                                    <div className="space32" />
                                    <div className="read5-btn">
                                        <Link className="font-f-8 font-16 line-height-16 weight-700" href="#">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="space40" />
                            <div className="service5-box">
                                <div className="service5-box-icon">
                                    <img src="/assets/img/icons/service5-icon.svg" alt="" />
                                </div>
                                <div className="hadding5 secvice5-hadding">
                                    <div className="space20" />
                                    <h4 className="font-f-7 weight-700 line-height-20 font-20"><Link href="#">Business insurance</Link>
                                    </h4>
                                    <div className="space20" />
                                    <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                        Since our inception, we have worked extensively to build a ensure network consisting of
                                        the world’s highest rated insurance.
                                    </p>
                                    <div className="space32" />
                                    <div className="read5-btn">
                                        <Link className="font-f-8 font-16 line-height-16 weight-700" href="#">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-duration={600}>
                            <div className="space40" />
                            <div className="service5-box">
                                <div className="service5-box-icon">
                                    <img src="/assets/img/icons/service5-icon.svg" alt="" />
                                </div>
                                <div className="hadding5 secvice5-hadding">
                                    <div className="space20" />
                                    <h4 className="font-f-7 weight-700 line-height-20 font-20"><Link href="#">Health insurance</Link></h4>
                                    <div className="space20" />
                                    <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                        Our staff has been working in the industry for many years. We offer guidance and help
                                        you make the right decisions
                                    </p>
                                    <div className="space32" />
                                    <div className="read5-btn">
                                        <Link className="font-f-8 font-16 line-height-16 weight-700" href="#">Read More <i className="fa-solid fa-arrow-right" /></Link>
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
