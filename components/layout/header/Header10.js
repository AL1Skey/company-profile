
export default function Header10({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div className="header-area d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo home1-site-logo">
                                        <a href="#"><img src="assets/img/logo/logo5.svg" alt="" />
                                        </a>
                                        <span>We’re hiring</span>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex5 font-f-5">
                                        <ul>
                                            <li><a href="#about">About Us</a></li>
                                            <li><a href="#service">Our Services</a></li>
                                            <li><a href="#benefit">Benefit</a></li>
                                            <li><a href="#testimonial">Testimonial</a></li>
                                            <li><a href="#contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="d-none d-md-block button5-btn2">
                                        <a href="#">Get a Quote <span><i className="fa-solid fa-arrow-right" /></span></a>
                                    </div>
                                    <div className="mobile-menu-bar d-lg-none">
                                        <a href="#">Get a Quote <span><i className="fa-solid fa-arrow-right" /></span></a>
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
