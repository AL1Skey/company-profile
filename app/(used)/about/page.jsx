import React from 'react'
import AboutUs from './component/AboutUs'
const page = async() => {
    const data ={
        aboutUs: await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/about-us`,{cache:'no-store'}).then(res => res.json()),
        alumni: await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni`,{cache:'no-store'}).then(res => res.json()),
        dewan: await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/dewan`,{cache:'no-store'}).then(res => res.json()),
        pengurus: await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/pengurus`,{cache:'no-store'}).then(res => res.json()),
    }
    console.log(data,"ASDG*EYF&EGFUICJNU")
  return (
    <div>
      <AboutUs data={data} />
    </div>
  )
}

export default page
