
export default function Header9({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div className="header-area header-area2 d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements font-w">
                                    <div className="site-logo home1-site-logo">
                                        <a href="#"><img src="assets/img/logo/logo4.svg" alt="" />
                                        </a>
                                        <span>We’re hiring</span>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex4 font-f-5">
                                        <ul>
                                            <li><a href="#features">Features</a></li>
                                            <li><a href="#hostika">Switch to Hostika</a></li>
                                            <li><a href="#plan">Pricing Plan</a></li>
                                            <li><a href="#service">Services</a></li>
                                            <li><a href="#articles">Articles</a></li>
                                        </ul>
                                    </div>
                                    <div className="d-none home4-button d-md-block header-site-btn">
                                        <a className="cta-btn4" href="#">Sign Up</a>
                                        <a className="home4-btn2 home4-btn-f font-f-4 font-16 line-height-16 weight-700" href="#">Sign In
                                        </a>
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
