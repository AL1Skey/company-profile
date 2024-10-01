
'use client'
import Link from 'next/link'

import { useState } from 'react'
export default function Faq() {

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
            <div className="home3-faq sp3" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 m-auto text-center">
                            <div className="hadding3">
                                <h1 className="font-lg-40 font-f-4 font-30 weight-700 line-height-lg-48 line-height-38" data-aos="fade-up" data-aos-duration={600}>
                                    Frequently asked questions
                                </h1>
                                <div className="space16" />
                                <p className="font-f-5 font-16 line-height-28" data-aos="fade-up" data-aos-duration={900}>
                                    We've been working really hard to improve the appino with this
                                    amazing new features that you aked for! Check out the appino’s
                                    new amazing features.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space40" />
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={900}>
                            <div className="accordion" id="tax-faq-3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header active-header" id="business-faq-header-1" onClick={() => handleToggle(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-1" aria-expanded="true" aria-controls="business-collapse-1">
                                            How to reduce federal, state or local tax ?
                                        </button>
                                    </h2>
                                    <div id="business-collapse-1"
                                        className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="business-faq-header-2" onClick={() => handleToggle(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-2" aria-expanded="false" aria-controls="business-collapse-2">
                                            How to help you deal with any business ?
                                        </button>
                                    </h2>
                                    <div id="business-collapse-2" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="business-faq-header-2" data-bs-parent="#tax-faq-3">
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="business-faq-header-3" onClick={() => handleToggle(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-3" aria-expanded="false" aria-controls="business-collapse-3">
                                            How your business grows and Changes ?
                                        </button>
                                    </h2>
                                    <div id="business-collapse-3" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="business-faq-header-3" data-bs-parent="#tax-faq-3">
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="business-faq-header-4" onClick={() => handleToggle(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-4" aria-expanded="false" aria-controls="business-collapse-4">
                                            How personal and your business tax issues ?
                                        </button>
                                    </h2>
                                    <div id="business-collapse-4" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="business-faq-header-4" data-bs-parent="#tax-faq-3">
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                            <div className="accordion" id="tax-faq-4">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="business-faq-header-5" onClick={() => handleToggle(5)}>
                                        <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-5" aria-expanded="true" aria-controls="business-collapse-5">
                                            Consult with you about your financial situation ?
                                        </button>
                                    </h2>
                                    <div id="business-collapse-5" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="business-faq-header-5" data-bs-parent="#tax-faq-4">
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="business-faq-header-6" onClick={() => handleToggle(6)}>
                                        <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-6" aria-expanded="false" aria-controls="business-collapse-6">
                                            Prepare your tax information using the proper ?
                                        </button>
                                    </h2>
                                    <div id="business-collapse-6" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="business-faq-header-6" data-bs-parent="#tax-faq-4">
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="business-faq-header-7" onClick={() => handleToggle(7)}>
                                        <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-7" aria-expanded="false" aria-controls="business-collapse-7">
                                            Process your tax return and go over Tax Console
                                        </button>
                                    </h2>
                                    <div id="business-collapse-7" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="business-faq-header-7" data-bs-parent="#tax-faq-4">
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header active-header" id="business-faq-header-8" onClick={() => handleToggle(8)}>
                                        <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#business-collapse-8" aria-expanded="false" aria-controls="business-collapse-8">
                                            Tax preparation doesn't have to be stressful ?
                                        </button>
                                    </h2>
                                    <div id="business-collapse-8" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="business-faq-header-8" data-bs-parent="#tax-faq-4">
                                        <div className="accordion-body">
                                            Coaching can be indicative of increased employee engagement;
                                            65% of employees from companies with strong coaching
                                            cultures rated themselves as highly engaged. Coaching also
                                            has an impact on financial performance, with 60% of
                                            respondents from organizations with strong coaching cultures
                                            reporting their 2013 revenue to be above average, compared
                                            to their peer group.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space60" />
                        <div className="col-md-12 text-center">
                            <div className="faq-bottom-hadding">
                                <h4 className="font-f-5 font-16 line-height-16 weight-400">
                                    Have Another Question? <Link href="/contact">Contact Avigo</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
