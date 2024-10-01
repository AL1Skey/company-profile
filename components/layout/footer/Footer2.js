import Link from "next/link"
export default function Footer2() {
    return (
        <>
            <footer className="footer-area padding-top font-f-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer mr50">
                                <div className="site-logo home1-site-logo">
                                    <Link href="#"><img src="/assets/img/logo/header-logo1.svg" alt="" />
                                    </Link>
                                    <span className="font-f-2">We’re hiring</span>
                                </div>
                                <div className="space30" />
                                <p className="font-f-2 font-16 line-height-26 pera-c-1">As a graphic designer, add motion to your
                                    skillset. Animate whatever you create and tell your story in a magical way with Artboard
                                    Studio.</p>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6">
                            <div className="single-footer">
                                <h3 className="font-f-1 font-20 weight-700 line-height-20 hadding-c1">Discover</h3>
                                <div>
                                    <ul className="font-f-2 font-16 line-height-26 pera-c-1">
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
                            <div className="single-footer">
                                <h3 className="font-f-1 font-20 weight-700 line-height-20 hadding-c1">Company</h3>
                                <div>
                                    <ul className="font-f-2 font-16 line-height-26 pera-c-1">
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
                            <div className="single-footer">
                                <h3 className="font-f-1 font-20 weight-700 line-height-20 hadding-c1">Templates</h3>
                                <div>
                                    <ul className="font-f-2 font-16 line-height-26 pera-c-1">
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
                    <div className="row align-items-center copyright2">
                        <div className="col-lg-6">
                            <p className="font-16 weight-400 font-f-2 line-height-16 pera-c-1">© {new Date().getFullYear()} Avigo - NextJS template by AliThemes. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 text-right">
                            <div className="social social1 comon-footer-icons">
                                <ul>
                                    <li>
                                        <Link href="#"><i className="fa-brands fa-twitter" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fa-brands fa-github" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
