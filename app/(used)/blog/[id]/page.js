import BlogDetails from "../components/BlogDetails";

export default function Pages({ params }) {
    const { id } = params
    return(
        <BlogDetails id={id} />
    )
}

// Step 1: Define static IDs
const staticIds = Array.from({length:100}, (_, i) => i + 1);

// Step 2: Implement generateStaticParams
export function generateStaticParams() {
  return staticIds.map(id => ({
    id: id.toString(),
  }));
}

