
import Link from 'next/link'

export default function Mobile() {
    return (
        <>
            <div className="mobile sp2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="hadding mobile-hadding">
                                <div className="hadding-span" data-aos="zoom-out" data-aos-duration={900}>
                                    <img src="/assets/img/icons/titel-icon-1.svg" alt="" />
                                </div>
                                <h1 className="font-30 font-lg-42 hadding-c1 weight-700 line-height-38 line-height-lg-50 font-f-1" data-aos="fade-left" data-aos-duration={600}>
                                    Project <span className="after">management</span> is mobile friendly!
                                </h1>
                                <div className="space24" />
                                <p className="font-20 pera-c-1 weight-400 line-height-p-30 font-f-2" data-aos="fade-right" data-aos-duration={900}>
                                    Stay connected with your team with Avigo for iOS and Andriod. Sell all apps, integrations
                                    and extentions for desktop, browser and email.
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
                            <div className="task-img" data-tilt>
                                <img src="/assets/img/image/mobile.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
