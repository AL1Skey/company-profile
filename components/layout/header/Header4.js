import Link from "next/link"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div className={`header-area header-area2 d-none d-lg-block ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements font-w">
                                    <div className="site-logo home1-site-logo">
                                        <Link href="#"><img src="/assets/img/logo/logo4.svg" alt="" />
                                        </Link>
                                        <span>We’re hiring</span>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex4 font-f-4">
                                        <ul>
                                            <li className="has-dropdown"><Link href="#">Home <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="sub-menu">
                                                    <li className="has-dropdown has-dropdown1"><Link href="/index4">Multipage<span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="/">Real Estate</Link></li>
                                                            <li><Link href="/index2">Management</Link></li>
                                                            <li><Link href="/index3">App landing</Link></li>
                                                            <li><Link href="/index4">Web Hosting </Link></li>
                                                            <li><Link href="/index5">Consulting </Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown has-dropdown1"><Link href="/index4">Landing
                                                        Page<span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="/single-index1">Real Estate</Link></li>
                                                            <li><Link href="/single-index2">Management</Link></li>
                                                            <li><Link href="/single-index3">App landing</Link></li>
                                                            <li><Link href="/single-index4">Web Hosting </Link></li>
                                                            <li><Link href="/single-index5">Consulting </Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="/about">About Us</Link>
                                            </li>
                                            <li className="has-dropdown"><Link href="#">Service <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="sub-menu">
                                                    <li className="has-dropdown has-dropdown1"><Link href="/index4">Our
                                                        Service<span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="/service">Our Service 1</Link></li>
                                                            <li><Link href="/service2">Our Service 2</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/service-details">Service Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-menu-parrent"><Link href="#">Pages <i className="fa-solid fa-angle-down" /></Link>
                                                <ul>
                                                    <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                                                    <li><Link href="/faq">FAQ</Link></li>
                                                    <li><Link href="/team">Our Team</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown"><Link href="#">Blog <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="sub-menu">
                                                    <li className="has-dropdown has-dropdown1"><Link href="/blog">Blog<span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="/blog">Our Blog</Link></li>
                                                            <li><Link href="/blog-details">Blog Formets</Link></li>
                                                            <li><Link href="/blog-sidebar-left">Blog Sidebar Left</Link></li>
                                                            <li><Link href="/blog-sidebar-right">Blog Sidebar Right</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/blog-details">Single Blog</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact">Contact Us</Link></li>
                                            <li className="d-lg-none"><Link href="#">Sign In / Sign up</Link> </li>
                                        </ul>
                                    </div>
                                    <div className="d-none home4-button d-md-block header-site-btn">
                                        <Link className="cta-btn4" href="#">Sign Up</Link>
                                        <Link className="home4-btn2 home4-btn-f font-f-4 font-16 line-height-16 weight-700" href="#">Sign In
                                        </Link>
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
