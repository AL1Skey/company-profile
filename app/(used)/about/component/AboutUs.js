
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Slider from "./Slider"
import AlumniSlider from "./AlumniSlider"
export default function AboutUs({data}) {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About us">
                <div>
                    {/*=====about besnisess start=======*/}
                    <div className="about-besniess sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="apartment-imgs">
                                        {/* <div className="apartment-img1">
                                            <img src="/assets/img/shapes/apartment-img-1.svg" alt="" />
                                        </div> */}
                                        <div className="apartment-img2">
                                            <img src={data?.aboutUs?.data?.image} alt="" />
                                        </div>
                                        {/* <div className="apartment-img3">
                                            <img src="/assets/img/shapes/apartment-img-3.svg" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hadding2 font-f-2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-55">
                                            {data?.aboutUs?.data?.title}
                                        </h1>
                                        <div className="space20" />
                                        <p className="font-18 line-height-p-30 weight-400 fotn-f-2">
                                            {data?.aboutUs?.data?.description}
                                        </p>
                                        <div className="about-icon-box">
                                            <div >
                                                <div className="about-icon-box-icon">
                                                    <img src="/assets/img/icons/about-besniess-iocn-1.svg" alt="" />
                                                </div>
                                            </div>
                                            <div >
                                                <div className="hadding2">
                                                    <h4 className="font-f-2 font-22 line-height-22 weight-500"> <Link href="#">Visi</Link></h4>
                                                    <div className="space12" />
                                                    <p className="font-f-2 weight-400 line-height-28 font-16">{data?.aboutUs?.data?.visi}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about-icon-box">
                                            <div >
                                                <div className="about-icon-box-icon">
                                                    <img src="/assets/img/icons/about-besniess-iocn-2.svg" alt="" />
                                                </div>
                                            </div>
                                            <div >
                                                <div className="hadding2">
                                                    <h4 className="font-f-2 font-22 line-height-22 weight-400"> <Link href="#">Misi</Link></h4>
                                                    <div className="space12" />
                                                    <p className="font-f-2 weight-400 line-height-28 font-16">{data?.aboutUs?.data?.misi}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====about besnisess end=======*/}
                    {/*=====about history start=======*/}
                    
                    {/*=====about history end=======*/}
                    {/*=====about mission start=======*/}
                    
                    {/*=====about mission end=======*/}
                    {/*=====about choose us start=======*/}
                    <div className="about-team sp2 page-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                             <span className="after">Alumni</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="row">
                                <AlumniSlider data={data?.alumni} className="tw-scale-100 tw-w-full group-hover:tw-scale-110" useIcon={false} />
                            </div>
                        </div>
                    </div>
                    {/*=====about choose us end=======*/}
                    {/*=====about vision start=======*/}
                    <div className="about-team sp2 page-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            Dewan <span className="after">Pembina</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="row">
                                <Slider data={data?.dewan} />
                            </div>
                        </div>
                    </div>
                    {/*=====about vision end=======*/}
                    {/*=====about team start=======*/}
                    <div className="about-team sp2 page-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            Tim <span className="after">Kepengurusan</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="row">
                                <Slider data={data?.pengurus}  />
                            </div>
                        </div>
                    </div>
                    {/*=====about team end=======*/}
                    {/*=====SUBSRIBE START=======*/}
                    
                </div>

            </Layout>
        </>
    )
}