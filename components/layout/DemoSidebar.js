'use client'
import Link from "next/link"
import { useState } from "react"

export default function DemoSidebar() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className={isToggled? "demo-sidebar active-sidebar" : " demo-sidebar"} id="demo-sidebar">
                <div className="demo-sidebar-wrap">
                    <div className="demo-sidebar-menu" onClick={handleToggle}>
                        <span data-bs-toggle="tooltip" title="View Demos" className="demosIcon" id="demosIcon"><i className="fa-solid fa-gear" /></span>
                        {/* <span data-bs-toggle="tooltip" title="Buy Theme"><Link href="#"><i className="fa-solid fa-cart-shopping" /></Link></span> */}
                    </div>
                    <div className="demo-sidebar-content">
                        <div className="heading2">
                            <h2>Pre-Built Demos Collection</h2>
                        </div>
                        <div className="space20" />
                        <div className="demo-sidebar-items">
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/sidebar-img1.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/">Multi Page</Link>
                                        <Link href="/single-index1">Landing Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/">Real Estate</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/sidebar-img2.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/index2">Multi Page</Link>
                                        <Link href="/single-index2">Landing Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/index2">Management</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/sidebar-img3.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/index3">Multi Page</Link>
                                        <Link href="/single-index3">Landing Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/index3">App Landing</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/sidebar-img4.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/index4" className="theme-btn-9">Multi Page</Link>
                                        <Link href="/single-index4" className="theme-btn-9">Landing Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/index4">Web Hosting</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/sidebar-img5.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/index5">Multi Page</Link>
                                        <Link href="/single-index5">Landing Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/index5">Consulting</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item coming-soon">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/sidebar-img6.png" alt="" />
                                    <div className="coming-son-text">
                                        <h4>Coming Soon</h4>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="#">Coming Soon</Link>
                                </div>
                            </div>
                        </div>
                        <div className="space30" />
                        <div className="heading2">
                            <h2>Pre-Built Inner Demos</h2>
                        </div> -
                        {/* inner page */}
                        <div className="demo-sidebar-items inner-dmeos">
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner1.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/about">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/about">About Us</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner2.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/service">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/service">Service 1</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner4.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/service2">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/service2">Service 2</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner3.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/service-details">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/service-details">Service Details</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner5.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/pricing-plan">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/pricing-plan">Pricing Plan</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner6.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/team">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/team">Our Team</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner7.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/faq">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/faq">FAQ</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner8.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/blog">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/blog">Our Blog</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner9.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/blog-details">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/blog-details">Blog Details</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner10.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/blog-left-bar">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/blog-left-bar">Blog Left</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner11.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/blog-right-bar">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/blog-right-bar">Blog Right</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner12.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/blog-single">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/blog-single">Single Blog</Link>
                                </div>
                            </div>
                            <div className="single-demo-sidebar-item">
                                <div className="demo-sidebar-item-img">
                                    <img src="/assets/img/image/demo-inner13.png" alt="" />
                                    <div className="demo-sidebar-buttons">
                                        <Link href="/contact">View Page</Link>
                                    </div>
                                </div>
                                <div className="demo-item-content">
                                    <Link href="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
