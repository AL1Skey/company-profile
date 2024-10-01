import Link from "next/link"
export default function Footer5() {
    return (
        <>
            <footer className="footer-area footer-area5 padding-top font-f-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer mr50">
                                <div className="site-logo home1-site-logo">
                                    <Link href="#"><img src="/assets/img/logo/footer-logo5.svg" alt="" />
                                    </Link>
                                    <span className="font-f-2">We’re hiring</span>
                                </div>
                                <div className="space30" />
                                <p className="font-f-8 font-16 line-height-26 footer5-p">
                                    As a graphic designer, add motion to your skillset. Animate
                                    whatever you create and tell your story in a magical way with
                                    Artboard Studio.
                                </p>
                            </div>
                            <div className="space24" />
                            <div className="social social1 social5 text-start">
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
                        <div className="col-lg-2 col-sm-6 hadding2">
                            <div className="single-footer5">
                                <h3 className="font-f-7 font-20 weight-700 font-w line-height-20">
                                    Discover
                                </h3>
                                <div className="space32" />
                                <div>
                                    <ul className="font-f-8 font-16 line-height-26 foorer5-list">
                                        <li><Link href="#">Learn</Link></li>
                                        <li><Link href="#">Blog</Link></li>
                                        <li><Link href="#">Pricing</Link></li>
                                        <li><Link href="#">Template Maker</Link></li>
                                        <li><Link href="#">Mockup Generator</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 hadding2">
                            <div className="single-footer-contact">
                                <h3 className="font-f-7 font-20 weight-700 font-w line-height-20">
                                    Discover
                                </h3>
                                <div className="space12" />
                                <div className="foonter-contact-1">
                                    <div className="foonter-contact-icon-5">
                                        <div >
                                            <img src="/assets/img/icons/footer5-icon-1.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="foonter-contact-p foonter-contact-p5">
                                        <Link href="#" className="font-f-8">Insurea New York
                                            t</Link>
                                        <Link href="#" className="font-f-8">831 SW 149th Stree</Link>
                                    </div>
                                </div>
                                <div className="foonter-contact-1">
                                    <div className="foonter-contact-icon-5">
                                        <div >
                                            <img src="/assets/img/icons/footer5-icon-2.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="foonter-contact-p foonter-contact-p5">
                                        <Link href="/tel:+910225850556" className="fotn-f-8">496-525-9376</Link>
                                    </div>
                                </div>
                                <div className="foonter-contact-1">
                                    <div className="foonter-contact-icon-5">
                                        <div >
                                            <img src="/assets/img/icons/footer5-icon-3.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="foonter-contact-p foonter-contact-p5">
                                        <Link href="/mailto:Insurea@gmail.com" className="fotn-f-8">Insurea@gmail.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hadding5">
                                <h3 className="font-f-7 font-20 weight-700 font-w line-height-20">
                                    Discover
                                </h3>
                                <form action="#">
                                    <div className="footer5-from">
                                        <div >
                                            <div className="footer5-from-input">
                                                <input type="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="footer5-p">
                                            <div className="button5 button5-footer5">
                                                <button>Subscribe<span><i className="fa-solid fa-arrow-right" /></span></button>
                                            </div>
                                            <p className="font-f-8 white-p ">We Promise not to Spam!</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright5" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <p className="font-16 weight-400 font-f-2 line-height-16 font-w">
                                © {new Date().getFullYear()} Avigo - NextJS template by AliThemes. All Rights Reserved.
                            </p>
                            <div className="space20" />
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
