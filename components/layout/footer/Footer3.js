import Link from "next/link"
export default function Footer3() {
    return (
        <>
            <footer className="footer-area footer-area3 padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer mr50 hadding3">
                                <div className="site-logo home1-site-logo">
                                    <Link href="#"><img src="/assets/img/logo/home3-header.svg" alt="" />
                                    </Link>
                                    <span className="font-f-2">We’re hiring</span>
                                </div>
                                <div className="space24" />
                                <p className="font-f-6 font-16 line-height-26">
                                    As a graphic designer, add motion to your skillset. Animate
                                    whatever you create and tell your story in a magical way with
                                    Artboard Studio.
                                </p>
                            </div>
                            <div className="space32" />
                            <div className="app-btns">
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
                        <div className="col-lg col-sm-6">
                            <div className="single-footer hadding3">
                                <h3 className="font-f-4 font-20 weight-700 line-height-20">
                                    Facility
                                </h3>
                                <div>
                                    <ul className="font-f-6 font-16 line-height-26 pera-c-3">
                                        <li><Link href="#">Mobile App</Link></li>
                                        <li><Link href="#">Easy to Payment</Link></li>
                                        <li><Link href="#">5 mastercard</Link></li>
                                        <li><Link href="#">Features</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="single-footer hadding3">
                                <h3 className="font-f-4 font-20 weight-700 line-height-20">
                                    Service
                                </h3>
                                <div>
                                    <ul className="font-f-6 font-16 line-height-26 pera-c-3">
                                        <li><Link href="#">FAQ</Link></li>
                                        <li><Link href="#">Easy to Download</Link></li>
                                        <li><Link href="#">Testimonials</Link></li>
                                        <li><Link href="#">Payonner</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer">
                                <h3 className="font-f-4 font-20 weight-700 line-height-20">
                                    Support
                                </h3>
                                <div>
                                    <ul className="font-f-6 font-16 line-height-26 pera-c-3">
                                        <li><Link href="#">Banking</Link></li>
                                        <li><Link href="#">Finance</Link></li>
                                        <li><Link href="#">Bitcoin</Link></li>
                                        <li><Link href="#">Payonner</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright2">
                        <div className="col-lg-12">
                            <p className="font-16 text-center weight-400 font-f-5 line-height-16 pera-c-1">
                                © {new Date().getFullYear()} Avigo - NextJS template by AliThemes. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
