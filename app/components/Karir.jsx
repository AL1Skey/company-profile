"use client"
import CitySlider1 from '@/components/slider/CitySlider1'
import Link from 'next/link'
import KarirSlider from './KarirSlider'
import { useEffect, useState } from 'react'

export default function Karir() {
    const [data, setData] = useState()
    
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/karir`,{cache:'no-store'}).then(res=>res.json())
            setData(response)
        }
        fetchData()
    },[])
    console.log(data,"KARIRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    return (
        <>
            <div className="cities sp2 _relative" id="cities">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="hadding2">
                                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                    <span className="after">Karir</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" data-aos="zoom-out" data-aos-duration={800}>
                    <div className="row">
                        <KarirSlider data={data}/>
                    </div>
                </div>
            </div>

        </>

    )
}
