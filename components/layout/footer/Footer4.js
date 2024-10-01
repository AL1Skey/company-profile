import Link from "next/link"
export default function Footer4() {
    return (
        <>
            <footer className="footer-area4 padding-top font-f-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer single-footer4 mr50">
                                <div className="site-logo home1-site-logo">
                                    <Link href="#"><img src="/assets/img/logo/logo4.svg" alt="" />
                                    </Link>
                                    <span className="font-f-4">We’re hiring</span>
                                </div>
                                <div className="space30" />
                                <p className="font-f-4 font-16 weight-500 line-height-26">As a graphic designer, add motion to your
                                    skillset. Animate whatever you create and tell your story in a magical way with Artboard
                                    Studio.</p>
                            </div>
                            <div className="text-start">
                                <div className="social social4">
                                    <ul>
                                        <li>
                                            <Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="fa-brands fa-twitter" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="single-footer single-footer4">
                                <h3 className="font-f-4 font-20 weight-700 line-height-20 font-w">Discover</h3>
                                <div>
                                    <ul className="font-f-4 font-16 weight-500 line-height-26 pera-c-1">
                                        <li><Link href="#">Learn</Link></li>
                                        <li><Link href="#">Blog</Link></li>
                                        <li><Link href="#">Pricing</Link></li>
                                        <li><Link href="#">Template Maker</Link></li>
                                        <li><Link href="#">Mockup Generator</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="single-footer single-footer4">
                                <h3 className="font-f-4 font-20 weight-700  font-w weight-500 line-height-20">Company</h3>
                                <div>
                                    <ul className="font-f-4 font-16 weight-500 line-height-26">
                                        <li><Link href="#">About us</Link></li>
                                        <li><Link href="#">Licensing</Link></li>
                                        <li><Link href="#">privacy Policy</Link></li>
                                        <li><Link href="#">Terms of Use</Link></li>
                                        <li><Link href="#">Refund Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer single-footer4">
                                <h3 className="font-f-4 font-20 weight-800 line-height-20 font-w">Templates</h3>
                                <div>
                                    <ul className="font-f-4 font-16 weight-500 line-height-26">
                                        <li><Link href="#">Instagram Story Templates</Link></li>
                                        <li><Link href="#">Instagram Post Templates</Link></li>
                                        <li><Link href="#">iPhone Mockup Templates</Link></li>
                                        <li><Link href="#">Social Media Templates</Link></li>
                                        <li><Link href="#">Stationery Templates</Link></li>
                                        <li><Link href="#">Bag Templates</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright4">
                        <div className="col-lg-12 text-center single-footer4">
                            <p className="font-16 weight-400 font-f-4 line-height-16 ">© {new Date().getFullYear()} Avigo - NextJS template by AliThemes. All Rights
                                Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
