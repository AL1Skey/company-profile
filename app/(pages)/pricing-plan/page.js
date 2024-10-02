'use client'
import Layout from "@/components/layout/Layout"
import AboutSlider1 from "@/components/slider/AboutSlider1"
import Link from "next/link"
import { useState } from 'react'
export default function Page() {
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


    const [isToggled, setToggled] = useState(false)
    const handlePrice = () => setToggled(!isToggled)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing plan">
                <div>
                    <div className="oricin-plan-solutions sp2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            Choose among a variety of business <span className="after">solutions</span>
                                        </h1>
                                        <div className="space24" />
                                        <p className="font-f-2 weight-400 line-height-p-30 font-18">
                                            By choosing our services, you not only save on costs but also gain access to a team of experienced managers who are solely dedicated to driving revenue growth for your startup.
                                        </p>
                                        <div className="space32" />
                                        <div className="service-details-lest">
                                            <p className="font-f-2 weight-500 font-20 line-height-24 "><img src="/assets/img/icons/service-check.svg" alt="" />Prioritize the features your customers need</p>
                                            <p className="font-f-2 weight-500 font-20 line-height-24 "><img src="/assets/img/icons/service-check.svg" alt="" />Align everyone around the roadmap</p>
                                            <p className="font-f-2 weight-500 font-20 line-height-24 "><img src="/assets/img/icons/service-check.svg" alt="" />Define your product vision with customer feedback</p>
                                        </div>
                                        <div className="space20" />
                                        <div className="home2-btn">
                                            <Link className="font-18 line-height-30 font-f-2 font-w" href="#">Choose a plan</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="apartment-imgs">
                                        <div className="apartment-img1-img-right">
                                            <img src="/assets/img/shapes/apartment-img-1.svg" alt="" />
                                        </div>
                                        <div className="apartment-img2-img-right border15">
                                            <img src="/assets/img/image/pricing-plan-page-img.png" alt="" />
                                        </div>
                                        <div className="apartment-img3-img-right">
                                            <img src="/assets/img/shapes/apartment-img-3.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====pricing page solutions=======*/}
                    {/*=====pricing-plan-start=======*/}
                    <div className="home2-pricing-plan sec-padding sp2 page-bg" id="pricing-plan">
                        <div className="container">
                            <div className="home1-princing-plans">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-7 m-auto text-center">
                                            <div className="hadding2">
                                                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                                    Choose among a variety of business <span className="after">solutions</span>
                                                </h1>
                                                <div className="space24" />
                                                <p className="font-f-2 weight-400 line-height-p-30 font-18">
                                                    By choosing our services, you not only save on costs but also gain access to a team of experienced managers who are solely dedicated to driving revenue growth for your startup.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 text-center">
                                        <div className="plan-toggle-wrap">
                                            <div className="toggle-inner home2-toggle-inner">
                                                <input id="ce-toggle" onClick={handlePrice} type="checkbox" />
                                                <span className="custom-toggle" />
                                                <span className="t-month">Monthly</span>
                                                <span className="t-year">Annual</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space60" />
                                <div className="tab-content">
                                    {isToggled ? <><div id="monthly">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box home1-pricing-box">
                                                    <div className="home5-single-plan5 hadding2">
                                                        <h2 className="font-f-2 font-20 line-height-20 weight-700">Basic</h2>
                                                        <div className="space16" />
                                                        <p className="font-f-2 font-16 font-w weight-400 line-height-28">
                                                            Business planning and coaching is designed to help you have a clear view of your money and your business goals
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding1 font-f-2 font-46 weight-700 line-height-46"> $49/mo</h1>
                                                        <div className="space14" />
                                                        <h4 className="font-f-2 font-16 weight-400 line-height-16">Billed monthly</h4>
                                                        <div className="space32" />
                                                        <div className="home5-price-list home1-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> Business Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Corporate Finance</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                                <li> <span className="list-erorr"><i className="fa-solid fa-xmark" /></span> Business Finance Planning </li>
                                                                <li> <span className="list-erorr"><i className="fa-solid fa-xmark" /></span> Purposive Business Planning</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5 pricing-plan-btn1">
                                                            <Link href="#" className="font-f-2">Get statred</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box home1-pricing-box">
                                                    <div className="home5-single-plan5 hadding2">
                                                        <h2 className="font-f-2 font-20 line-height-20 weight-700">Pro</h2>
                                                        <div className="space16" />
                                                        <p className="font-f-2 font-16 font-w weight-400 line-height-28">
                                                            Business planning and coaching is designed to help you have a clear view of your money and your business goals
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding1 font-f-2 font-46 weight-700 line-height-46"> $199/mo</h1>
                                                        <div className="space14" />
                                                        <h4 className="font-f-2 font-16 weight-400 line-height-16">Billed monthly</h4>
                                                        <div className="space32" />
                                                        <div className="home5-price-list home1-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> Business Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Corporate Finance</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Business Finance Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5 pricing-plan-btn1">
                                                            <Link href="#" className="font-f-2">Get statred</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box home1-pricing-box">
                                                    <div className="home5-single-plan5 hadding2">
                                                        <h2 className="font-f-2 font-20 line-height-20 weight-700">Ultimate</h2>
                                                        <div className="space16" />
                                                        <p className="font-f-2 font-16 font-w weight-400 line-height-28">
                                                            Business planning and coaching is designed to help you have a clear view of your money and your business goals
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding1 font-f-2 font-46 weight-700 line-height-46">$99/mo</h1>
                                                        <div className="space14" />
                                                        <h4 className="font-f-2 font-16 weight-400 line-height-16">Billed monthly</h4>
                                                        <div className="space32" />
                                                        <div className="home5-price-list home1-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> Business Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Corporate Finance</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Business Finance Planning</li>
                                                                <li> <span className="list-erorr"><i className="fa-solid fa-xmark" /></span> Purposive Business Planning</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5 pricing-plan-btn1">
                                                            <Link href="#" className="font-f-2">Get statred</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></> : <><div id="yearly">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box home1-pricing-box">
                                                    <div className="home5-single-plan5 hadding2">
                                                        <h2 className="font-f-2 font-20 line-height-20 weight-700">Basic</h2>
                                                        <div className="space16" />
                                                        <p className="font-f-2 font-16 font-w weight-400 line-height-28">
                                                            Business planning and coaching is designed to help you have a clear view of your money and your business goals
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding1 font-f-2 font-46 weight-700 line-height-46"> $499/year</h1>
                                                        <div className="space14" />
                                                        <h4 className="font-f-2 font-16 weight-400 line-height-16">Billed yearly</h4>
                                                        <div className="space16" />
                                                        <div className="home5-price-list home1-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> Business Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Corporate Finance</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                                <li> <span className="list-erorr"><i className="fa-solid fa-xmark" /></span> Business Finance Planning </li>
                                                                <li> <span className="list-erorr"><i className="fa-solid fa-xmark" /></span> Purposive Business Planning</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5 pricing-plan-btn1">
                                                            <Link href="#" className="font-f-2">Get statred</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box home1-pricing-box">
                                                    <div className="home5-single-plan5 hadding2">
                                                        <h2 className="font-f-2 font-20 line-height-20 weight-700">Pro</h2>
                                                        <div className="space16" />
                                                        <p className="font-f-2 font-16 font-w weight-400 line-height-28">
                                                            Business planning and coaching is designed to help you have a clear view of your money and your business goals
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding1 font-f-2 font-46 weight-700 line-height-46"> $1999/year</h1>
                                                        <div className="space16" />
                                                        <h4 className="font-f-2 font-16 weight-400 line-height-16">Billed yearly</h4>
                                                        <div className="space32" />
                                                        <div className="home5-price-list home1-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> Business Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Corporate Finance</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Business Finance Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5 pricing-plan-btn1">
                                                            <Link href="#" className="font-f-2">Get statred</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box home1-pricing-box">
                                                    <div className="home5-single-plan5 hadding2">
                                                        <h2 className="font-f-2 font-20 line-height-20 weight-700">Ultimate</h2>
                                                        <div className="space16" />
                                                        <p className="font-f-2 font-16 font-w weight-400 line-height-28">
                                                            Business planning and coaching is designed to help you have a clear view of your money and your business goals
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding1 font-f-2 font-46 weight-700 line-height-46">$999/mo</h1>
                                                        <div className="space16" />
                                                        <h4 className="font-f-2 font-16 weight-400 line-height-16">Billed yearly</h4>
                                                        <div className="space32" />
                                                        <div className="home5-price-list home1-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> Business Planning</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Corporate Finance</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Next Genaration Accounting</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span>Business Finance Planning</li>
                                                                <li> <span className="list-erorr"><i className="fa-solid fa-xmark" /></span> Purposive Business Planning</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5 pricing-plan-btn1">
                                                            <Link href="#" className="font-f-2">Get statred</Link>
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
                    {/*=====pricing-plan-end=======*/}
                    {/*=====service details start=======*/}
                    <div className="service-details-faq sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto text-center">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            Frequently asked <span className="after">questions</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item accordion-item2 font-f-2">
                                            <h2 className="accordion-header active-header active-header2" id="headingOne" onClick={() => handleToggle(1)}>
                                                <button type="button" className={isActive.key == 1 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"}>
                                                    How to reduce federal, state or local tax ?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item font-f-2">
                                            <h2 className="accordion-header accordion-header2" id="headingTwo" onClick={() => handleToggle(2)}>
                                                <button className={isActive.key == 2 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How to help you deal with any business ?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion" id="accordionExample2">
                                        <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                            <h2 className="accordion-header accordion-header2 accordion-header2" id="headingThree" onClick={() => handleToggle(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    How your business grows and Changes ?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item font-f-2">
                                            <h2 className="accordion-header accordion-header2" id="headingFour" onClick={() => handleToggle(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    How to help you deal with any business ?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====service details END=======*/}
                    {/*=====ABOUT US END=======*/}
                    <div className="litings home1-about-us sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 m-auto text-center">
                                    <div className="hadding2 apartment2-hadding font-f-2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            What our <span className="after">customers</span> <br />
                                            say about us.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="row">
                                <AboutSlider1 />
                            </div>
                        </div>
                    </div>
                    {/*=====ABOUT US  END=======*/}
                    {/*=====SUBSRIBE START=======*/}
                    <div className="subsribe-all sp2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <div className="all-subsribe-hadding">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45 font-w">
                                            Get the properties you're interested in delivered straight to
                                            your inbox.
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="comon-subsribe-all-input">
                                        <input type="email" placeholder="Enter your email here" />
                                        <div className="subsribe-btn">
                                            <div className="home2-btn">
                                                <button className="font-18 line-height-30 weight-700 font-f-2 font-w" href="#">
                                                    Get Notified
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}