
'use client'
import Link from 'next/link'
import { useState } from "react"
export default function Pricing() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className="home2-pricing-plan sec-padding sp2">
                <div className="container">
                    <div className="home5-princing-plans">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 m-auto text-center">
                                    <div className="hadding5">
                                        <span className="span" data-aos="fade-up" data-aos-duration={600}><img src="/assets/img/icons/span5.svg" alt="" /> Pricing plan</span>
                                        <div className="space24" />
                                        <h1 className="font-f-7 weight-700 font-lg-34 line-height-lg-44 line-height-38 font-30" data-aos="fade-up" data-aos-duration={800}>
                                            <span className="after">Purchase price</span> is just consideration should also weigh
                                            depreciation.
                                        </h1>
                                        <div className="space24" />
                                        <p className="font-f-8 font-16 font-w weight-400 line-height-28" data-aos="fade-up" data-aos-duration={1000}>
                                            Since our inception, we have worked extensively to build a ensure network consisting
                                            of the world’s highest rated insurance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className="plan-toggle-wrap active">
                                        <div className="toggle-inner home2-toggle-inner" data-aos="fade-up" data-aos-duration={700}>
                                            <input id="ce-toggle" defaultChecked type="checkbox" onClick={handleToggle} />
                                            <span className="custom-toggle" />
                                            <span className="t-month">Monthly</span>
                                            <span className="t-year">Annual</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="tab-content">
                                {!isToggled ? <>
                                    <div id="monthly">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={1000}>
                                                <div className="home5-pricing-box">
                                                    <div className="home5-single-plan5 hadding5">
                                                        <h2 className="font-f-7 font-20 line-height-20 weight-700">Basic</h2>
                                                        <div className="space24" />
                                                        <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                                            Free 7 day trial, No credit card required, Cancel Anytime
                                                        </p>
                                                        <div className="space30" />
                                                        <h1 className="pricing-plan-span-hadding5"> $99.00 <span>/month</span></h1>
                                                        <div className="space24" />
                                                        <div className="pricing5-border" />
                                                        <div className="space24" />
                                                        <div className="home5-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> 24/7 Customer
                                                                    Helper</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Super Medical
                                                                    care Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Home Visit
                                                                    Doctor Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Inpatient Meal
                                                                    Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Luxury Cost
                                                                    Medical Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 12 Months of
                                                                    care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 7 part health
                                                                    plan</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Health plan
                                                                    Update</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5">
                                                            <Link href="#">Try Free for 7 Days <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={700}>
                                                <div className="home5-pricing-box active">
                                                    <div className="home5-single-plan5 hadding5">
                                                        <h2 className="font-f-7 font-20 line-height-20 weight-700">Pro</h2>
                                                        <div className="space24" />
                                                        <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                                            Free 7 day trial, No credit card required, Cancel Anytime
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding5"> $199.00 <span>/month</span></h1>
                                                        <div className="space24" />
                                                        <div className="pricing5-border" />
                                                        <div className="space24" />
                                                        <div className="home5-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> 24/7 Customer
                                                                    Helper</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Super Medical
                                                                    care Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Home Visit
                                                                    Doctor Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Inpatient Meal
                                                                    Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Luxury Cost
                                                                    Medical Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 12 Months of
                                                                    care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 7 part health
                                                                    plan</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Health plan
                                                                    Update</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5">
                                                            <Link href="#">Try Free for 7 Days <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={1200}>
                                                <div className="home5-pricing-box">
                                                    <div className="home5-single-plan5 hadding5">
                                                        <h2 className="font-f-7 font-20 line-height-20 weight-700">Premium</h2>
                                                        <div className="space24" />
                                                        <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                                            Free 7 day trial, No credit card required, Cancel Anytime
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding5"> $99.00 <span>/month</span></h1>
                                                        <div className="space24" />
                                                        <div className="pricing5-border" />
                                                        <div className="space24" />
                                                        <div className="home5-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> 24/7 Customer
                                                                    Helper</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Super Medical
                                                                    care Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Home Visit
                                                                    Doctor Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Inpatient Meal
                                                                    Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Luxury Cost
                                                                    Medical Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 12 Months of
                                                                    care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 7 part health
                                                                    plan</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Health plan
                                                                    Update</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5">
                                                            <Link href="#">Try Free for 7 Days <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </> : <>
                                    <div id="yearly">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box">
                                                    <div className="home5-single-plan5 hadding5">
                                                        <h2 className="font-f-7 font-20 line-height-20 weight-700">Basic</h2>
                                                        <div className="space24" />
                                                        <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                                            Free 7 day trial, No credit card required, Cancel Anytime
                                                        </p>
                                                        <div className="space32" />
                                                        <h1 className="pricing-plan-span-hadding5"> $999.00 <span>/Annual</span></h1>
                                                        <div className="space24" />
                                                        <div className="pricing5-border" />
                                                        <div className="space24" />
                                                        <div className="home5-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> 24/7 Customer
                                                                    Helper</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Super Medical
                                                                    care Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Home Visit
                                                                    Doctor Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Inpatient Meal
                                                                    Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Luxury Cost
                                                                    Medical Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 12 Months of
                                                                    care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 7 part health
                                                                    plan</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Health plan
                                                                    Update</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5">
                                                            <Link href="#">Try Free for 7 Days <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box active">
                                                    <div className="home5-single-plan5 hadding5">
                                                        <h2 className="font-f-7 font-20 line-height-20 weight-700">Pro</h2>
                                                        <div className="space24" />
                                                        <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                                            Free 7 day trial, No credit card required, Cancel Anytime
                                                        </p>
                                                        <div className="space30" />
                                                        <h1 className="pricing-plan-span-hadding5"> $199.00 <span>/Annual</span></h1>
                                                        <div className="space24" />
                                                        <div className="pricing5-border" />
                                                        <div className="space24" />
                                                        <div className="home5-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> 24/7 Customer
                                                                    Helper</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Super Medical
                                                                    care Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Home Visit
                                                                    Doctor Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Inpatient Meal
                                                                    Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Luxury Cost
                                                                    Medical Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 12 Months of
                                                                    care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 7 part health
                                                                    plan</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Health plan
                                                                    Update</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5">
                                                            <Link href="#">Try Free for 7 Days <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="home5-pricing-box">
                                                    <div className="home5-single-plan5 hadding5">
                                                        <h2 className="font-f-7 font-20 line-height-20 weight-700">Premium</h2>
                                                        <div className="space24" />
                                                        <p className="font-f-8 font-16 font-w weight-400 line-height-28">
                                                            Free 7 day trial, No credit card required, Cancel Anytime
                                                        </p>
                                                        <div className="space30" />
                                                        <h1 className="pricing-plan-span-hadding5"> $39.00 <span>/Annual</span></h1>
                                                        <div className="space24" />
                                                        <div className="pricing5-border" />
                                                        <div className="space24" />
                                                        <div className="home5-price-list">
                                                            <ul className="font-f-8">
                                                                <li> <span><i className="fa-solid fa-check" /></span> 24/7 Customer
                                                                    Helper</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Super Medical
                                                                    care Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Home Visit
                                                                    Doctor Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Inpatient Meal
                                                                    Expenses</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Luxury Cost
                                                                    Medical Care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 12 Months of
                                                                    care</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> 7 part health
                                                                    plan</li>
                                                                <li> <span><i className="fa-solid fa-check" /></span> Health plan
                                                                    Update</li>
                                                            </ul>
                                                        </div>
                                                        <div className="space30" />
                                                        <div className="button5 pricing-plan-btn5">
                                                            <Link href="#">Try Free for 7 Days <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
