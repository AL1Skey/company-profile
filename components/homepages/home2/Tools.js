
import Link from 'next/link'

export default function Tools() {
    return (
        <>
            <div className="toos sp2" id="tools">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="tools-img " data-tilt>
                                <img src="/assets/img/image/tools.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="hadding task-hadding">
                                <div className="hadding-span" data-aos="zoom-out" data-aos-duration={900}>
                                    <img src="/assets/img/icons/titel-icon-3.svg" alt="" />
                                </div>
                                <h1 className="font-30 font-lg-42 hadding-c1 weight-700 line-height-38 line-height-lg-50 font-f-1" data-aos="fade-left" data-aos-duration={600}>
                                    Easily <span className="after">integrate</span> with all your favorite tools.
                                </h1>
                                <div className="space24" />
                                <p className="font-20 pera-c-1 weight-400 line-height-p-30 font-f-2" data-aos="fade-left" data-aos-duration={900}>
                                    Seamlessly integrate your Softr app with the modern and trusted tools of your workflow like
                                    Zapier, Google Analytics, Stripe, Hotjar, Mailchimp and more.
                                </p>
                                <div className="space40" />
                                <div className="read-more-btn" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link className="font-f-1 font-16 line-height-16 weight-700" href="#">Learn More <img src="/assets/img/icons/learn-more.svg" alt="" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
