"use client";
import React from "react";
import BlogPost from "./BlogPost";
import Breadcrumb from "@/components/layout/Breadcrumb";
const Blog = () => {
  const [blog, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [buletin, setBuletin] = React.useState([]);
  React.useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/public/blog?reformat=true`,
        { cache: "no-store" }
      ).then((res) => res.json());
      console.log(response);
      setBlog(response["Blog"]);
      setBuletin(response["Buletin"]);
      setLoading(false);
    };
    fetchBlog();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div className="col-lg-12">
        <div className="section-title text-center">
          <Breadcrumb breadcrumbTitle={"Blog"} />
        </div>
        <BlogPost showItem={6} style={1} showPagination dataFetch={blog} />
        <div className="section-title text-center">
          <Breadcrumb breadcrumbTitle={"Buletin"} />
          <BlogPost showItem={6} style={1} showPagination dataFetch={buletin} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
