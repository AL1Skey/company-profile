
'use client'
import Layout from "@/components/layout/Layout"
import AboutSlider1 from "@/components/slider/AboutSlider1"

import Link from 'next/link'

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Karir">
                <div>
                    
                    {/*=====service details box end=======*/}
                    {/*=====service details binifet end=======*/}
                    <div className="">
                        <div className="p-10">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="apartment-imgs">
                                        <div className="apartment-img1">
                                            <img src="/assets/img/shapes/apartment-img-1.svg" alt="" />
                                        </div>
                                        <div className="apartment-img2 border15">
                                            <img src="/assets/img/image/service-details1.png" alt="" />
                                        </div>
                                        <div className="apartment-img3">
                                            <img src="/assets/img/shapes/apartment-img-3.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-32 font-lg-44 line-height-38 line-height-lg-44">
                                            Benefits you will get in our business <span className="after">consultaing</span>
                                        </h1>
                                        <div className="space24" />
                                        <p className="font-16 font-f-2 line-height-p-30 font-18 weight-400">
                                            By choosing our services, you not only save on costs but also gain access to a team of experienced managers who are solely dedicated to driving revenue growth for your startup.
                                        </p>
                                        <div className="space24" />
                                        <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="#">Listening your needs for IT Strategy</Link></h4>
                                        <div className="space16" />
                                        <p className="font-f-2 weight-400 line-height-28 font-16">We won’t just tell you what to do; we will show the ‘how to’ execute the proven strategies and systems.</p>
                                        <div className="space32" />
                                        <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="#">Solutions Taliored to your needs</Link></h4>
                                        <div className="space16" />
                                        <p className="font-f-2 weight-400 line-height-28 font-16">If you do the work, your investment in coaching will more than 10 times pay for itself in financial returns.</p>
                                        <div className="space40" />
                                        <div className="home2-btn">
                                            <Link className="font-18 line-height-30 font-f-2 font-w" href="#">Find Apartment</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====service details binifet end=======*/}
                    
                </div>

            </Layout>
        </>
    )
}