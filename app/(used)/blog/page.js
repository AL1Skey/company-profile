"use client";
import BlogPost from "./components/BlogPost";
import Layout from "@/components/layout/Layout";
import React from "react";
import Blog from "./components/Blog";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TitleWithSubheader from "./components/Title";
import loader from "@/app/loading"
// import data from './blogTemplate.json'
export default async function Page() {
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
  if (loading) return loader;
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={"Our Blog"}>
        <div className="blog-page-boxs-all sp2">
        <TitleWithSubheader title={"Blog:"}  />
          <div className="container">
            <div className="row">
              <BlogPost
                showItem={6}
                style={1}
                showPagination
                dataFetch={blog}
              />
            </div>
            <div className="space24" />
          </div>
          <TitleWithSubheader title={"Buletin:"}  />
          <div className="container">
            <div className="row">
              <BlogPost
                showItem={6}
                style={1}
                showPagination
                dataFetch={buletin}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
