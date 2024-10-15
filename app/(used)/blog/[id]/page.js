import BlogDetails from "../components/BlogDetails";
import { notFound } from "next/navigation";
export async function generateStaticParams() {
  // const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog`, {
  //   next: { revalidate: 10 } // Revalidate every 60 seconds
  // }).then((res) => res.json())

  return Array.from({length:500}).map((post,index) => ({
    id: `${index+1}`
  }))
}

async function getPost(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog/${id}`, {
    next: { revalidate: 10 } // Revalidate every 60 seconds,
    
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export const dynamicParams = true


const  Pages=async({ params })=> {
    const { id } = params
    return(
        <BlogDetails id={id} />
    )
}

export default Pages


