import Link from "next/link"

export default function Header6({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div className="header-area d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo home1-site-logo">
                                        <Link href="/"><img src="assets/img/logo/header-logo1.svg" alt="" />
                                        </Link>
                                        <span>We’re hiring</span>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex1">
                                        <ul>
                                            <li><a href="#about">About Us</a></li>
                                            <li><a href="#apartment">Apartment</a></li>
                                            <li><a href="#cities">Popular Cities</a></li>
                                            <li><a href="#Properties">Properties</a></li>
                                            <li><a href="#listings">Listings</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-site-btn">
                                        <a href="#" className="home2-site-btn-1 font-f-2 weight-400 font-16 line-height-16">Sign In
                                            / Sign Up</a>
                                        <a className="cta-btn font-f-2 weight-700" href="#">List Your Property</a>
                                    </div>
                                    <div className="mobile-menu-bar d-lg-none">
                                        <i className="fas fa-bars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
