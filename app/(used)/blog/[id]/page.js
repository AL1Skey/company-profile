import BlogDetails from "../components/BlogDetails";

export default async function Pages({ params }) {
    const { id } = params
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog/${id}`,{cache:'no-store'}).then(res => res.json())
    return(
        <BlogDetails data={data} />
    )
}



export async function generateStaticParams() {
  const ids = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/blog`, { cache: 'no-store' })
    .then(res => res.json());

  console.log('Fetched IDs:', ids); // Debug line

  return ids.map(blog => ({
    params: { id: blog.id.toString() }, // Ensuring id is a string
    revalidate: 1
  }));
}



