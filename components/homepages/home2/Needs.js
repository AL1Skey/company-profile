
import Link from 'next/link'

export default function Needs() {
    return (
        <>
            <div className="sec-needs sp3 _relative" id="need">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <div className="need-hadding">
                                <h1 className="font-30 font-lg-42 weight-700 font-w line-height-lg-50 line-height-38 font-f-1" data-aos="fade-up" data-aos-duration={600}>
                                    An app built for <span className="after">your needs.</span>
                                </h1>
                                <div className="space20" />
                                <p className="font-20 weight-400 line-height-30 font-f-2 pera-c-2" data-aos-duration={900} data-aos="fade-up">
                                    Avigo project management helps you stay in full control of all
                                    your projects and keep track of all the moving parts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="needs-single-box font-w" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="needs-icons">
                                    <img src="/assets/img/icons/need-icon-1.svg" alt="" />
                                </div>
                                <div className="space30" />
                                <div className="hadding">
                                    <h4 className="font-20 weight-700 line-height-20 font-f-1">
                                        <Link className="font-w" href="#">Stay Organised</Link>
                                    </h4>
                                    <div className="space20" />
                                    <p className="font-16 weight-400 line-height-24 font-f-2">
                                        Resource calendar and Reports give you the much needed
                                        visibility your team’s current, past and future.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="needs-single-box font-w" data-aos="fade-up" data-aos-duration={600}>
                                <div className="needs-icons">
                                    <img src="/assets/img/icons/need-icon-2.svg" alt="" />
                                </div>
                                <div className="space20" />
                                <div className="hadding">
                                    <h4 className="font-20 weight-700 line-height-20 font-f-1">
                                        <Link className="font-w" href="#">Manage your task</Link>
                                    </h4>
                                    <div className="space20" />
                                    <p className="font-16 weight-400 line-height-24 font-f-2">
                                        Resource calendar and Reports give you the much needed
                                        visibility your team’s current, past and future.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="needs-single-box font-w" data-aos="fade-up" data-aos-duration={900}>
                                <div className="needs-icons">
                                    <img src="/assets/img/icons/need-icon-3.svg" alt="" />
                                </div>
                                <div className="space45" />
                                <div className="hadding">
                                    <h4 className="font-20 weight-700 line-height-20 font-f-1">
                                        <Link className="font-w" href="#">Centre communication</Link>
                                    </h4>
                                    <div className="space20" />
                                    <p className="font-16 weight-400 line-height-24 font-f-2">
                                        Resource calendar and Reports give you the much needed
                                        visibility your team’s current, past and future.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="needs-single-box font-w" data-aos="fade-up" data-aos-duration={600}>
                                <div className="needs-icons">
                                    <img src="/assets/img/icons/need-icon-4.svg" alt="" />
                                </div>
                                <div className="space30" />
                                <div className="hadding">
                                    <h4 className="font-20 weight-700 line-height-20 font-f-1">
                                        <Link className="font-w" href="#">Meet your deadline</Link>
                                    </h4>
                                    <div className="space20" />
                                    <p className="font-16 weight-400 line-height-24 font-f-2">
                                        Resource calendar and Reports give you the much needed
                                        visibility your team’s current, past and future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shopes1" src="/assets/img/shapes/sce-after-1.svg" alt="" />
            </div>

        </>

    )
}
