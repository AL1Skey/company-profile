
'use client'
import Layout from "@/components/layout/Layout"
import AboutSlider1 from "@/components/slider/AboutSlider1"

import Link from 'next/link'

import { useState } from 'react'

const textTemplate = `
                                            PT. Topaz Maritime

Open job vacancy for crew as follow:

 

Rank: Bosun-Pumpman-Fitter-Cook

Type vessel: Bulk Carier and Chemical Tanker

Trading area: Foreign Going

 

Requirements:

- Experience Minimum 2 years’ experience on the same ship type

- Have experience onboard with foreign crew

- Have experience onboard trading area worldwide

- Documents and Certificate minimum valid min 1 year

- Completed Vaccine Covid 19

- Must be fluent in English

 

If you meet criteria or know who interest vacancy might be above, please send CV to email recruitmenttopaz@pttm.co.id
`

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
                    <div className="service-details-binifite sp2 ">
                        <div className="container">
                        {[1,2,3,4,5,6,7].map((value,index)=>(
                            <div key={index} className="row align-items-center w-10!">
                                <div className="space100" />
                                <div className="col-md-6">
                                    <div className="apartment-imgs">
                                        <div className="apartment-img2 border15">
                                            <img src="/assets/img/image/service-details1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        {/* Heading Title */}
                                        <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="#">Berakhir Pada 29 October, 2023</Link></h4>
                                        {/* <div className="space24" /> */}
                                        {/* Title */}
                                        <h1 className="font-f-2 weight-700 font-32 font-lg-44 line-height-38 line-height-lg-44">
                                        BOSUN-PUMPMAN-FITTER
                                        {/* <span className="after">consultaing</span> */}
                                        </h1>
                                        {/* Description */}
                                        <div className="space12" />
                                        {textTemplate.split("\n").map((text, index) => (
                                        <p key={index} className="font-16 font-f-2 line-height-p-30 font-18 weight-400">
                                            {text}
                                            {/* <br /> */}
                                        </p>
                                        ))}
{/*                                         
                                        <div className="space16" />
                                        <p className="font-f-2 weight-400 line-height-28 font-16">We won’t just tell you what to do; we will show the ‘how to’ execute the proven strategies and systems.</p>
                                        <div className="space32" />
                                        <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="#">Solutions Taliored to your needs</Link></h4>
                                        <div className="space16" />
                                        <p className="font-f-2 weight-400 line-height-28 font-16">If you do the work, your investment in coaching will more than 10 times pay for itself in financial returns.</p> */}
                                        <div className="space40" />
                                        <div className="home2-btn">
                                            <Link className="font-18 line-height-30 font-f-2 font-w" href="mailto:adamnurramadan@gmail.com">Send</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    {/*=====service details binifet end=======*/}

                </div>

            </Layout>
        </>
    )
}