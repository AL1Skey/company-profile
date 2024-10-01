
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
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Frequently asked questions">
                <div>
                    <div className="photo-gellery sp2">
                        <div className="container">
                            <div className="row">
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-500 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            General FAQ <span className="after">questions</span>
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
                                                <button className={isActive.key == 1 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Why are you a management consultancy?
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
                                                    Where are you based and where do you operate?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                            <h2 className="accordion-header accordion-header2 accordion-header2" id="headingThree" onClick={() => handleToggle(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Our Business Consulting  Coaching Firm?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                            <h2 className="accordion-header accordion-header2 accordion-header2" id="headingFour" onClick={() => handleToggle(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    How do we work with you?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                            <h2 className="accordion-header accordion-header2 accordion-header2" id="headingFive" onClick={() => handleToggle(5)}>
                                                <button className={isActive.key == 5 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    We help your business needs
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item accordion-item font-f-2">
                                            <h2 className="accordion-header accordion-header2" id="headingSix" onClick={() => handleToggle(6)}>
                                                <button className={isActive.key == 6 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    Why are your services different?
                                                </button>
                                            </h2>
                                            <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item font-f-2">
                                            <h2 className="accordion-header accordion-header2" id="headingServen" onClick={() => handleToggle(7)}>
                                                <button className={isActive.key == 7 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    What does it cost to work with you?
                                                </button>
                                            </h2>
                                            <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingServen" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                            <h2 className="accordion-header accordion-header2 accordion-header2" id="headingEight" onClick={() => handleToggle(8)}>
                                                <button className={isActive.key == 8 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    Why would I pay for planning?
                                                </button>
                                            </h2>
                                            <div id="collapseEight" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                            <h2 className="accordion-header accordion-header2 accordion-header2" id="headingNine" onClick={() => handleToggle(9)}>
                                                <button className={isActive.key == 9 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                    What types of problems does Intelivate solve?
                                                </button>
                                            </h2>
                                            <div id="collapseNine" className={isActive.key == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                                <div className="accordion-body accordion-body2">
                                                    Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                            <h2 className="accordion-header accordion-header2 accordion-header2" id="headingTen" onClick={() => handleToggle(10)}>
                                                <button className={isActive.key == 10 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                    The experience and expertise to help you!
                                                </button>
                                            </h2>
                                            <div id="collapseTen" className={isActive.key == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingTen" data-bs-parent="#accordionExample">
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
                    {/*=====pages faq sce 1 end=======*/}
                    {/*=====pages faq company start=======*/}
                    <div className="faq-company sp2 page-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            You asked any questions about your <span className="after">company</span>
                                        </h1>
                                        <div className="space24" />
                                        <p className="font-f-2 weight-400 line-height-p-30 font-18">
                                            To deal with our busy world we often compartmentalize, obstructing access to our Best Selves. For Optimal Performance, you need to integrate and align every part of you, including Values, Dreams, and Abilities. In the midst of busyness it’s hard to pause and see where we’re not optimizing.
                                        </p>
                                        <div className="space20" />
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item accordion-item2 font-f-2">
                                                <h2 className="accordion-header active-header active-header2" id="heading1" onClick={() => handleToggle(11)}>
                                                    <button className={isActive.key == 11 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                        How to reduce federal, state or local tax ?
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className={isActive.key == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body accordion-body2">
                                                        Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item accordion-item font-f-2">
                                                <h2 className="accordion-header accordion-header2" id="heading2" onClick={() => handleToggle(12)}>
                                                    <button className={isActive.key == 12 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        How to help you deal with any business ?
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className={isActive.key == 12 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body accordion-body2">
                                                        Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                                <h2 className="accordion-header accordion-header2 accordion-header2" id="heading3" onClick={() => handleToggle(13)}>
                                                    <button className={isActive.key == 13 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        How your business grows and Changes ?
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className={isActive.key == 13 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body accordion-body2">
                                                        Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <div className="faq-massge-box-all">
                                        <div className="massge-box-img">
                                            <img src="/assets/img/icons/faq-company-massge.svg" alt="" />
                                        </div>
                                        <div className="space10" />
                                        <div className="hadding-massge">
                                            <h4 className="font-f-2 font-20 weight-700 line-height-20 font-w">Get in touch</h4>
                                            <div className="space10" />
                                            <p className="font-f-2 font-w font-16 line-height-28 weight-500">Velit tempor, aliquam vel mauris duis rhoncus maecenas Sed porttitor lectus.</p>
                                        </div>
                                        <div className="massge-inputs">
                                            <div className="massge-single-inputs">
                                                <input type="text" placeholder="Your name*" />
                                            </div>
                                            <div className="massge-single-inputs">
                                                <input type="email" placeholder="Email address**" />
                                            </div>
                                            <div className="massge-single-inputs">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                            <div className="massge-single-inputs">
                                                <textarea cols={30} rows={1} placeholder="Your message" />
                                            </div>
                                            <div className="massge-button">
                                                <div className="massge-btn">
                                                    <Link href="#" className="font-f-2">Submit now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====pages faq company end=======*/}
                    {/*=====ABOUT US START=======*/}
                    <div className="home1-about-us sp2">
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
                                <AboutSlider1 altStyle />
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
                                                <button className="font-18 line-height-30 weight-700 font-f-2 font-w">
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