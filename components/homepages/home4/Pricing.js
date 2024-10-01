

'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Pricing() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className="home2-pricing-plan sec-padding sp2" id="plan">
                <div className="container">
                    <div className="home2-princing-plans">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto text-center">
                                    <div className="hadding4">
                                        <h1 className="font-f-4 font-30 font-lg-40 line-height-38 line-height-lg-40 weight-800" data-aos="fade-up" data-aos-duration={600}>
                                            Let’s Grow Up With Our Hostika
                                            <span className="after">Services</span>
                                        </h1>
                                        <div className="space16" />
                                        <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2" data-aos="fade-up" data-aos-duration={800}>
                                            Using high perfomance web hosting options from Rackspace,
                                            Amazon, Microsoft and more; Text Connects can build your
                                            business a great web hosting plan, for less than you think.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center" data-aos="fade-up" data-aos-duration={1000}>
                                    <div className="plan-toggle-wrap">
                                        <div className="toggle-inner home2-toggle-inner">
                                            <input id="ce-toggle" onClick={handleToggle} type="checkbox" />
                                            <span className="custom-toggle" />
                                            <span className="t-month">Monthly</span>
                                            <span className="t-year">Annual</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="tab-content">
                                {!isToggled ? <><div id="monthly">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={600}>
                                            <div className="home2-pricing-box">
                                                <div className="home4-single-service hadding4">
                                                    <h2 className="font-f-4 font-24 line-height-24 weight-700">Starlight Plan</h2>
                                                    <h1 className="pricing-plan-span-hadding"><span>$2.</span> 99/month</h1>
                                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                        Packed with great features,suchas one click softwere installs.24/7
                                                        support.
                                                    </p>
                                                    <div className="space24" />
                                                    <div className="home4-pricing-main-img">
                                                        <img src="/assets/img/icons/hostika-paln-main-img.svg" alt="" />
                                                    </div>
                                                    <div className="home4-price-list">
                                                        <ul className="font-f-4">
                                                            <li><img src="/assets/img/icons/hostika-plan-icon1.svg" alt="" />
                                                                <span>2GB</span> SSD Disk Space</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon2.svg" alt="" />
                                                                <span>Unmetered</span> Brandwidth</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon3.svg" alt="" />
                                                                <span>Host 2</span> Websites Hosted</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon4.svg" alt="" />
                                                                <span>Unlimited</span> Email Accounts</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon5.svg" alt="" />
                                                                <span>Free</span> Domain Name </li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon6.svg" alt="" />
                                                                <span>24/7</span> Tecnicial Services</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon7.svg" alt="" /> Up to
                                                                <span>32 GB</span> Storage</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon8.svg" alt="" />
                                                                <span>Attach</span> Custom Domain</li>
                                                        </ul>
                                                    </div>
                                                    <div className="space24" />
                                                    <div className="home4-button home4-pricing-btn">
                                                        <Link href="#" className="home4-btn-plan">Get Started Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="home2-pricing-box active" data-aos="fade-up" data-aos-duration={800}>
                                                <div className="home4-single-service hadding4">
                                                    <h2 className="font-f-4 font-24 line-height-24 weight-700">Starlight Plan</h2>
                                                    <h1 className="pricing-plan-span-hadding"><span>$19.</span> 99/month</h1>
                                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                        Packed with great features,suchas one click softwere installs.24/7
                                                        support.
                                                    </p>
                                                    <div className="space24" />
                                                    <div className="home4-pricing-main-img">
                                                        <img src="/assets/img/icons/hostika-paln-main-img.svg" alt="" />
                                                    </div>
                                                    <div className="home4-price-list">
                                                        <ul className="font-f-4">
                                                            <li><img src="/assets/img/icons/hostika-plan-icon1.svg" alt="" />
                                                                <span>4GB</span> SSD Disk Space</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon2.svg" alt="" />
                                                                <span>Unmetered</span> Brandwidth</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon3.svg" alt="" />
                                                                <span>Host 5</span> Websites Hosted</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon4.svg" alt="" />
                                                                <span>Unlimited</span> Email Accounts</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon5.svg" alt="" />
                                                                <span>Free</span> Domain Name </li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon6.svg" alt="" />
                                                                <span>24/7</span> Tecnicial Services</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon7.svg" alt="" /> Up to
                                                                <span>64 GB</span> Storage</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon8.svg" alt="" />
                                                                <span>Attach</span> Custom Domain</li>
                                                        </ul>
                                                    </div>
                                                    <div className="space24" />
                                                    <div className="home4-button home4-pricing-btn">
                                                        <Link href="#" className="home4-btn-plan">Get Started Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="home2-pricing-box" data-aos="fade-up" data-aos-duration={1000}>
                                                <div className="home4-single-service hadding4">
                                                    <h2 className="font-f-4 font-24 line-height-24 weight-700">Premium Plan</h2>
                                                    <h1 className="pricing-plan-span-hadding"><span>$29.</span> 99/month</h1>
                                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                        Packed with great features,suchas one click softwere installs.24/7
                                                        support.
                                                    </p>
                                                    <div className="space24" />
                                                    <div className="home4-pricing-main-img">
                                                        <img src="/assets/img/icons/hostika-paln-main-img.svg" alt="" />
                                                    </div>
                                                    <div className="home4-price-list">
                                                        <ul className="font-f-4">
                                                            <li><img src="/assets/img/icons/hostika-plan-icon1.svg" alt="" />
                                                                <span>8GB</span> SSD Disk Space</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon2.svg" alt="" />
                                                                <span>Unmetered</span> Brandwidth</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon3.svg" alt="" />
                                                                <span>Host 8</span> Websites Hosted</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon4.svg" alt="" />
                                                                <span>Unlimited</span> Email Accounts</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon5.svg" alt="" />
                                                                <span>Free</span> Domain Name </li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon6.svg" alt="" />
                                                                <span>24/7</span> Tecnicial Services</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon7.svg" alt="" /> Up to
                                                                <span>128 GB</span> Storage</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon8.svg" alt="" />
                                                                <span>Attach</span> Custom Domain</li>
                                                        </ul>
                                                    </div>
                                                    <div className="space24" />
                                                    <div className="home4-button home4-pricing-btn">
                                                        <Link href="#" className="home4-btn-plan">Get Started Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></> : <><div id="yearly">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="home2-pricing-box">
                                                <div className="home4-single-service hadding4">
                                                    <h2 className="font-f-4 font-24 line-height-24 weight-700">Premium Plan</h2>
                                                    <h1 className="pricing-plan-span-hadding"><span>$22.</span> 99/month</h1>
                                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                        Packed with great features,suchas one click softwere installs.24/7
                                                        support.
                                                    </p>
                                                    <div className="space24" />
                                                    <div className="home4-pricing-main-img">
                                                        <img src="/assets/img/icons/hostika-paln-main-img.svg" alt="" />
                                                    </div>
                                                    <div className="home4-price-list">
                                                        <ul className="font-f-4">
                                                            <li><img src="/assets/img/icons/hostika-plan-icon1.svg" alt="" />
                                                                <span>8GB</span> SSD Disk Space</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon2.svg" alt="" />
                                                                <span>Unmetered</span> Brandwidth</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon3.svg" alt="" />
                                                                <span>Host 8</span> Websites Hosted</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon4.svg" alt="" />
                                                                <span>Unlimited</span> Email Accounts</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon5.svg" alt="" />
                                                                <span>Free</span> Domain Name </li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon6.svg" alt="" />
                                                                <span>24/7</span> Tecnicial Services</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon7.svg" alt="" /> Up to
                                                                <span>128 GB</span> Storage</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon8.svg" alt="" />
                                                                <span>Attach</span> Custom Domain</li>
                                                        </ul>
                                                    </div>
                                                    <div className="space24" />
                                                    <div className="home4-button home4-pricing-btn">
                                                        <Link href="#" className="home4-btn-plan">Get Started Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="home2-pricing-box active">
                                                <div className="home4-single-service hadding4">
                                                    <h2 className="font-f-4 font-24 line-height-24 weight-700">Premium Plan</h2>
                                                    <h1 className="pricing-plan-span-hadding"><span>$99.</span> 99/month</h1>
                                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                        Packed with great features,suchas one click softwere installs.24/7
                                                        support.
                                                    </p>
                                                    <div className="space24" />
                                                    <div className="home4-pricing-main-img">
                                                        <img src="/assets/img/icons/hostika-paln-main-img.svg" alt="" />
                                                    </div>
                                                    <div className="home4-price-list">
                                                        <ul className="font-f-4">
                                                            <li><img src="/assets/img/icons/hostika-plan-icon1.svg" alt="" />
                                                                <span>8GB</span> SSD Disk Space</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon2.svg" alt="" />
                                                                <span>Unmetered</span> Brandwidth</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon3.svg" alt="" />
                                                                <span>Host 8</span> Websites Hosted</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon4.svg" alt="" />
                                                                <span>Unlimited</span> Email Accounts</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon5.svg" alt="" />
                                                                <span>Free</span> Domain Name </li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon6.svg" alt="" />
                                                                <span>24/7</span> Tecnicial Services</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon7.svg" alt="" /> Up to
                                                                <span>128 GB</span> Storage</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon8.svg" alt="" />
                                                                <span>Attach</span> Custom Domain</li>
                                                        </ul>
                                                    </div>
                                                    <div className="space24" />
                                                    <div className="home4-button home4-pricing-btn">
                                                        <Link href="#" className="home4-btn-plan">Get Started Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="home2-pricing-box">
                                                <div className="home4-single-service hadding4">
                                                    <h2 className="font-f-4 font-24 line-height-24 weight-700">Premium Plan</h2>
                                                    <h1 className="pricing-plan-span-hadding"><span>$120.</span> 99/month</h1>
                                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                        Packed with great features,suchas one click softwere installs.24/7
                                                        support.
                                                    </p>
                                                    <div className="space24" />
                                                    <div className="home4-pricing-main-img">
                                                        <img src="/assets/img/icons/hostika-paln-main-img.svg" alt="" />
                                                    </div>
                                                    <div className="home4-price-list">
                                                        <ul className="font-f-4">
                                                            <li><img src="/assets/img/icons/hostika-plan-icon1.svg" alt="" />
                                                                <span>8GB</span> SSD Disk Space</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon2.svg" alt="" />
                                                                <span>Unmetered</span> Brandwidth</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon3.svg" alt="" />
                                                                <span>Host 8</span> Websites Hosted</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon4.svg" alt="" />
                                                                <span>Unlimited</span> Email Accounts</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon5.svg" alt="" />
                                                                <span>Free</span> Domain Name </li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon6.svg" alt="" />
                                                                <span>24/7</span> Tecnicial Services</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon7.svg" alt="" /> Up to
                                                                <span>128 GB</span> Storage</li>
                                                            <li><img src="/assets/img/icons/hostika-plan-icon8.svg" alt="" />
                                                                <span>Attach</span> Custom Domain</li>
                                                        </ul>
                                                    </div>
                                                    <div className="space24" />
                                                    <div className="home4-button home4-pricing-btn">
                                                        <Link href="#" className="home4-btn-plan">Get Started Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></>}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
