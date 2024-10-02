import Link from "next/link"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="">
                <div className={`header-area d-none d-lg-block ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo home1-site-logo">
                                        <Link href="/"><img src="/assets/img/logo/header-logo1.svg" alt="" />
                                        </Link>
                                        <span>We’re hiring</span>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex1">
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/about">About Us</Link>
                                            </li>
                                            <li><Link href="/karir">Karir</Link></li>
                                            <li><Link href="/alumni">Alumni</Link></li>
                                            <li><Link href="/blog">Our Blog</Link></li>
                                            {/* <li className="dropdown-menu-parrent"><Link href="#">Pages <i className="fa-solid fa-angle-down" /></Link>
                                                <ul>
                                                    <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                                                    
                                                    <li><Link href="/team">Our Team</Link></li>
                                                </ul>
                                            </li>
                                            
                                            <li className="has-dropdown"><Link href="#">Blog <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="sub-menu">
                                                    <li className="has-dropdown has-dropdown1"><Link href="/blog">Blog<span><i className="fa-solid fa-angle-right" /></span></Link>
                                                        <ul className="sub-menu">
                                                            
                                                            <li><Link href="/blog-details">Blog Formets</Link></li>
                                                            <li><Link href="/blog-sidebar-left">Blog Sidebar Left</Link></li>
                                                            <li><Link href="/blog-sidebar-right">Blog Sidebar Right</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/blog-details">Single Blog</Link></li>
                                                </ul>
                                            </li> */}
                                            <li><Link href="/contact">Contact Us</Link></li>
                                            <li className="d-lg-none"><Link href="#">Sign In / Sign up</Link> </li>
                                        </ul>
                                    </div>
                                    {/* <div className="header-site-btn">
                                        <Link href="#" className="home2-site-btn-1 font-f-2 weight-400 font-16 line-height-16">Sign In
                                            / Sign Up</Link>
                                        <Link className="cta-btn font-f-2 weight-700" href="#">List Your Property</Link>
                                    </div> */}
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
