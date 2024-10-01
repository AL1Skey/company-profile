
import Link from 'next/link'

export default function Hostika() {
    return (
        <>
            <div className="hostika sp2" id="hostika">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="hostika-img" data-aos="zoom-out" data-aos-duration={1000}>
                                <img src="/assets/img/image/hostika-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-5 space-left-30">
                            <div className="hadding4">
                                <h1 className="font-f-4 font-30 font-lg-40 line-height-38 line-height-lg-40 weight-800" data-aos="fade-left" data-aos-duration={600}>
                                    Good Reason To Switch <br />
                                    to <span className="after">Hostika</span>
                                </h1>
                                <div className="space16" />
                                <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2" data-aos="fade-left" data-aos-duration={800}>
                                    Using high perfomance web hosting options from Rackspace,
                                    Amazon, Microsoft and more; Text Connects can build your
                                    business a great web hosting plan, for less than you think.
                                </p>
                            </div>
                            <div className="space8" />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hostika-box hadding4" data-aos="fade-left" data-aos-duration={600}>
                                        <div className="hostika-icon">
                                            <img src="/assets/img/icons/hostika-icon1.svg" alt="" />
                                        </div>
                                        <div className="space16" />
                                        <h4 className="font-f-4 font-20 line-height-20 weight-600">
                                            <Link href="#">24/7 Support</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p1">
                                            Every company needs a website in todays market. Most
                                            companies spend.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hostika-box hadding4" data-aos="fade-left" data-aos-duration={900}>
                                        <div className="hostika-icon">
                                            <img src="/assets/img/icons/hostika-icon2.svg" alt="" />
                                        </div>
                                        <div className="space16" />
                                        <h4 className="font-f-4 font-20 line-height-20 weight-600">
                                            <Link href="#">The Faster Site</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p1">
                                            Every company needs a website in todays market. Most
                                            companies spend.
                                        </p>
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
