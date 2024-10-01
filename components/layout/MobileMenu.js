import Link from "next/link"
import { useState } from 'react'
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div>
                <div className="mobile-header mobile-header-4 d-block d-lg-none ">
                    <div className="container-fluid">
                        <div className="col-12">
                            <div className="mobile-header-elements">
                                <div className="mobile-logo">
                                    <Link href="/"><img src="/assets/img/logo/header-logo1.svg" alt="" /></Link>
                                </div>
                                <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                    <i className="fa-solid fa-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mobile-sidebar d-block d-lg-none ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                    <div className="menu-close" onClick={handleMobileMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                    <div className="mobile-nav">
                        <ul className="mobile-nav-list">
                            <li className="has-sub hash-has-sub">
                                <span className={isActive.key == 1 ? "submenu-button opened" : "submenu-button"} onClick={() => handleToggle(1)}><em /></span>
                                <Link href="#" className="hash-nav">Home</Link>
                                <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li className="has-dropdown has-dropdown1 has-sub hash-has-sub">

                                        <span className={isActive.key == 1 ? "submenu-button opened" : "submenu-button"} onClick={() => handleToggle(1)}><em /></span>
                                        <Link href="/index4" className="hash-nav">Multipage</Link>
                                        <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            <li className="hash-has-sub"><Link href="/" className="hash-nav">Real Estate</Link></li>
                                            <li className="hash-has-sub"><Link href="/index2" className="hash-nav">Management</Link></li>
                                            <li className="hash-has-sub"><Link href="/index3" className="hash-nav">App Landing</Link></li>
                                            <li className="hash-has-sub"><Link href="/index4" className="hash-nav">Web Hosting </Link></li>
                                            <li className="hash-has-sub"><Link href="/index5" className="hash-nav">Consulting </Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown has-dropdown1 has-sub hash-has-sub">

                                        <span className={isActive.key == 1 ? "submenu-button opened" : "submenu-button"} onClick={() => handleToggle(1)}><em /></span>
                                        <Link href="/index4" className="hash-nav">Landing Page</Link>
                                        <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                            <li className="hash-has-sub"><Link href="/single-index1" className="hash-nav">Real Estate</Link></li>
                                            <li className="hash-has-sub"><Link href="/single-index2" className="hash-nav">Management</Link></li>
                                            <li className="hash-has-sub"><Link href="/single-index3" className="hash-nav">App Landing</Link></li>
                                            <li className="hash-has-sub"><Link href="/single-index4" className="hash-nav">Web Hosting </Link></li>
                                            <li className="hash-has-sub"><Link href="/single-index5" className="hash-nav">Consulting </Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <li className="hash-has-sub"><Link href="/about" className="hash-nav">About Us</Link></li>
                        <li className="has-sub hash-has-sub">
                            <span className={isActive.key == 2 ? "submenu-button opened" : "submenu-button"} onClick={() => handleToggle(2)}><em /></span>
                            <Link href="#" className="hash-nav">Service</Link>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                <li className="hash-has-sub"><Link href="/service" className="hash-nav">Service</Link></li>
                                <li className="hash-has-sub"><Link href="/service2" className="hash-nav">Service</Link></li>
                                <li className="hash-has-sub"><Link href="/service-details" className="hash-nav">Service Details</Link></li>
                            </ul>
                        </li>
                        <li className="has-sub hash-has-sub">
                            <span className={isActive.key == 3 ? "submenu-button opened" : "submenu-button"} onClick={() => handleToggle(3)}><em /></span>
                            <Link href="#" className="hash-nav">Blog</Link>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                <li className="hash-has-sub"><Link href="/blog" className="hash-nav">Blog</Link></li>
                                <li className="hash-has-sub"><Link href="/blog-left-bar" className="hash-nav">Blog Left</Link></li>
                                <li className="hash-has-sub"><Link href="/blog-right-bar" className="hash-nav">Blog Right</Link></li>
                                <li className="hash-has-sub"><Link href="/blog-details" className="hash-nav">Blog Details</Link></li>
                                <li className="hash-has-sub"><Link href="/blog-single" className="hash-nav">Single Blog</Link></li>
                            </ul>
                        </li>
                        <li className="has-sub hash-has-sub">
                            <span className={isActive.key == 4 ? "submenu-button opened" : "submenu-button"} onClick={() => handleToggle(4)}><em /></span>
                            <Link href="#" className="hash-nav">Pages</Link>
                            <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                <li className="hash-has-sub"><Link href="/pricing-plan" className="hash-nav">Pricing Plan</Link></li>
                                <li className="hash-has-sub"><Link href="/team" className="hash-nav">Our Team</Link></li>
                                <li className="hash-has-sub"><Link href="/faq" className="hash-nav">Our Faq</Link></li>
                            </ul>
                        </li><li className="hash-has-sub"><Link href="/contact" className="hash-nav">Contact Us</Link></li>
                        <li className="d-lg-none d-block hash-has-sub"><Link href="#" className="hash-nav">Sign In / Sign up </Link></li>
                    </div>

                </div>
            </div>

        </>
    )
}
