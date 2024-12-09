"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Preloader from '@/components/elements/Preloader'
export default function About() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                setLoading(true)
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/about-us`,{cache:'no-store'}).then(res=>res.json())
                setData(response.data)
                console.log(response,"RESPONEDDDD")
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchData()
    },[])
    if (loading) return <Preloader/>;
    
    return (
        <>
            <div className="container tw-mt-[15rem] android:tw-pb-[5rem] lg:tw-rounded-3xl apartment tw-bg-[#3e90ba] " id="apartment">
                <div className=" tw-flex tw-flex-col">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="apartment-imgs">
                                {/* <div className="apartment-img1">
                                    <img src="/assets/img/shapes/apartment-img-1.svg" alt="" />
                                </div> */}
                                <div className="apartment-img2 tw-p-5 tw-w-full tw-h-full" >
                                    <img className="tw-w-[470px] tw-h-[600px]" src={data?.image} alt="" />
                                </div>
                                {/* <div className="apartment-img3" data-aos="zoom-out" data-aos-duration={1300}>
                                    <img src="/assets/img/shapes/apartment-img-3.svg" alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-6 android:tw-mt-[2rem]">
                            <div className="hadding2 apartment-hadding font-f-2">
                                <h1 className=" font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55" data-aos="fade-left" data-aos-duration={800}>
                                    About Us
                                </h1>
                                <div className="space32" />
                                <p className="font-18 line-height-p-30 !tw-text-white" data-aos="fade-left" data-aos-duration={1100}>
                                {data?.description}
                                </p>
                                <div className="space50" />
                                <div 
                                // className="home2-btn" 
                                data-aos="fade-left" data-aos-duration={1300}>
                                    <Link className="font-18 line-height-30 font-f-2 tw-py-5 tw-px-4 tw-rounded-xl tw-bg-white tw-text-black hover:tw-bg-[#E4322C] hover:tw-text-[#fff]" href="/about">See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
