
export default function Header7({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div className="header-area d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo home1-site-logo">
                                        <a href="/"><img src="assets/img/logo/header-logo1.svg" alt="" />
                                        </a>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex1 font-f-2">
                                        <ul>
                                            <li><a href="#need"> Your Needs</a></li>
                                            <li><a href="#task"> Task Manager</a></li>
                                            <li><a href="#features"> Features </a></li>
                                            <li><a href="#tools"> Favorite Tools</a></li>
                                            <li><a href="#testimonial"> Testimonial</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-site-btn">
                                        <a className="login-btn font-f-2 weight-400 mr-10" href="#">Login</a>
                                        <a className="cta-btn font-f-1 weight-700" href="#">Start for free</a>
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
