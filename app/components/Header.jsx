
'use client'
import Link from 'next/link'
import { useEffect, useState } from "react"
import HeaderSlider from './HeaderSlider'
import Preloader from '@/components/elements/Preloader'
export default function Header() {
    const [activeIndex, setActiveIndex] = useState(1)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/header`,{cache:'no-store'}).then(res => res.json())
                setData(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchData()
    },[])
    if(loading) return <Preloader/>
    console.log(data,"HEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD")
    return (
        <>
        <div className="hero-area" style={{ marginTop:"7rem" }}>
        <HeaderSlider slider={data} />
        </div>
        </>

    )
}
