import React from 'react'
import Karir from './components/Karir'
const page = async() => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/karir`,{cache:'no-store'}).then(res => res.json())
  console.log(data,"ASDG*EYF&EGFUICJNU")
    return (
    <div>
      <Karir data={data} />
    </div>
  )
}

export default page
