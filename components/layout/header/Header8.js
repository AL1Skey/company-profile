
export default function Header8({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>

            <header>
                <div className="header-area d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo home1-site-logo">
                                        <a href="#"><img src="assets/img/logo/home3-header.svg" alt="" />
                                        </a>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex3 font-f-5">
                                        <ul>
                                            <li><a href="#business">Business</a></li>
                                            <li><a href="#work">Works</a></li>
                                            <li><a href="#blog">Blog</a></li>
                                            <li><a href="#faq">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div className="d-none d-md-block header-site-btn">
                                        <a href="#" className="home3-cta font-f-4 weight-700 font-16 line-height-16">Sign Up</a>
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
