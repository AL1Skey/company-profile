
'use client'
import Link from 'next/link'
import { useState } from "react"
import HeaderSlider from './HeaderSlider'
export default function Header({data}) {
    console.log(data,"HEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD")
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        <div className="hero-area" style={{ marginTop:"7rem" }}>
        <HeaderSlider slider={data} />
        </div>
        </>

    )
}
