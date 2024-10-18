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
            <div className="apartment sp2" id="apartment">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="apartment-imgs">
                                {/* <div className="apartment-img1">
                                    <img src="/assets/img/shapes/apartment-img-1.svg" alt="" />
                                </div> */}
                                <div className="apartment-img2" >
                                    <img className="tw-w-[40rem] tw-h-[40rem]" src={data?.image} alt="" />
                                </div>
                                {/* <div className="apartment-img3" data-aos="zoom-out" data-aos-duration={1300}>
                                    <img src="/assets/img/shapes/apartment-img-3.svg" alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hadding2 apartment-hadding font-f-2">
                                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55" data-aos="fade-left" data-aos-duration={800}>
                                    About <span className="after">Us</span>
                                </h1>
                                <div className="space32" />
                                <p className="font-18 line-height-p-30" data-aos="fade-left" data-aos-duration={1100}>
                                {data?.description}
                                </p>
                                <div className="space50" />
                                <div className="home2-btn" data-aos="fade-left" data-aos-duration={1300}>
                                    <Link className="font-18 line-height-30 font-f-2 font-w" href="/about">See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
