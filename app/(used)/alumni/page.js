import React from 'react'
import Alumni from './components/Alumni'
const page = async() => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni?reformat=1`,{cache:'no-store'}).then(res => res.json())
    console.log(data,"ASDG*EYF&EGFUICJNU")
  return (
    <div>
      <Alumni data={data} />
    </div>
  )
}

export default page
