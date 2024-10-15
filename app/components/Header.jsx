
'use client'
import Link from 'next/link'
import { useEffect, useState } from "react"
import HeaderSlider from './HeaderSlider'
export default function Header() {
    const [activeIndex, setActiveIndex] = useState(1)
    const [data, setData] = useState()
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/header`,{cache:'no-store'}).then(res => res.json())
            setData(data)
        }
        fetchData()
    },[])
    console.log(data,"HEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD")
    return (
        <>
        <div className="hero-area" style={{ marginTop:"7rem" }}>
        <HeaderSlider slider={data} />
        </div>
        </>

    )
}
