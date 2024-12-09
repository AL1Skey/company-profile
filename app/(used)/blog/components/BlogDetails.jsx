"use client"; // Ensures client-side rendering only
// 'app/blog/[id]/page.js' (for the new app directory structure in Next.js 13)

import Layout from "@/components/layout/Layout";
// import data from "./../blogTemplate.json"; // Assuming static data for simplicity
import Link from "next/link";
// import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

const isBrowser = () => typeof window !== 'undefined';
export default function BlogDetails({ id, data }) {
  const [isOpen, setOpen] = useState(false);
  // const Router = useParams(); // Get the dynamic ID from the URL
  const [blogPost, setBlogPost] = useState(data);
  // Get the dynamic id // Default to 1 if no ID is provided
  const [pathname, setPathname] = useState('');
  const message = `Check this out: ${pathname}`;
  const instagramUrl = `instagram://direct-share/share?text=${encodeURIComponent(message)}`;
  
  useEffect(() => {
    // Fetch blog post by id on the client side
    if (isBrowser()) {
      setPathname(window.location.href);
    }
    const fetchBlogPost = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/public/blog/${id}?reformat=1`,
        { cache: "no-store" }
      ).then((res) => res.json());
      setBlogPost(response);
    };
    fetchBlogPost();
  }, [id]); // Trigger on id change

  return (
    <>
      {blogPost && (
        <>
          <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle={blogPost.title}
          >
            <div className="">
              <img src={blogPost.img} alt="" className="tw-h-[35rem] !tw-max-w-[100000960px] md:tw-w-full android:tw-w-auto !tw-overflow-clip" />
            </div>
            <div className="blog-page sp2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blogs">
                      <article className="post-blog post-format-image">
                        <div className="single-blog">
                          {/* Blog images */}
                          <div className="execution-images">
                            {/* <div className="execution-img1">
                                                            <img src="/assets/img/shapes/service-details-shaop-bg.svg" alt="" />
                                                        </div> */}

                            {/* <div className="execution-img3">
                                                            <img src="/assets/img/shapes/service-details-shape.svg" alt="" />
                                                        </div> */}
                          </div>
                          {/* Blog author, date, and category */}
                          <div className="author-bio mt-4 mb-3">
                            <div className="author-name">
                              <Link href="#" className="font-f-2">
                                <i className="fa-solid fa-user" />{" "}
                                {blogPost.author}
                              </Link>
                            </div>
                            <div className="blog-category">
                              <Link href="#" className="font-f-2">
                                <i className="fa-solid fa-tag" />{" "}
                                {blogPost.category}
                              </Link>
                            </div>
                            <div className="blog-date">
                              <Link href="#" className="font-f-2">
                                <i className="fa-solid fa-calendar-days" />{" "}
                                {blogPost.date}
                              </Link>
                            </div>
                          </div>
                          {/* Blog content */}
                          <div className="hadding2">
                            <h4 className="font-f-2 font-24 line-height-28 weight-500">
                              <Link href="/blog-single">{blogPost.title}</Link>
                            </h4>
                            <div className="space32" />
                            <div dangerouslySetInnerHTML={{__html:`${blogPost.content}` }} className="font-f-2 weight-400 line-height-28 font-16">
                              
                            </div>
                            <div className="space40" />
                          </div>
                        </div>
                      </article>
                      {/* Blog details tags */}
                      <div className="blog-details-tags">
                        {/* <div className="blog-details-tag">
                          <div className="hadding2">
                            <h4 className="font-f-2 font-16 weight-700 line-height-16">
                              Tags :
                            </h4>
                          </div>
                          <div className="details-tag-list">
                            <ul>
                              <li>
                                <Link href="#" className="font-f-2">
                                  {blogPost.category}
                                </Link>
                              </li>
                              </ul>
                          </div>
                        </div> */}
                        <div className="blog-details-icons">
                          <div className="hadding2">
                            <h4 className="font-f-2 font-16 weight-700 line-height-16">
                              Share :
                            </h4>
                          </div>
                          <div className="blogp-details-icon-list">
                            <ul>
                              <li>
                                <Link href={`https://twitter.com/intent/tweet?text=Check%20this%20out!&url=${pathname}`}>
                                  <i className="fa-brands fa-x" />
                                </Link>
                              </li>
                              <li>
                                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${pathname}`}>
                                  <i className="fa-brands fa-facebook-f" />
                                </Link>
                              </li>
                              {/* <li>
                                <Link href={instagramUrl}>
                                  <i className="fa-brands fa-instagram" />
                                </Link>
                              </li> */}
                              <li>
                                <Link
                                  href={`whatsapp://send?text=Check out this blog post: ${pathname}`}
                                  data-action="share/whatsapp/share"
                                >
                                  <i className="fa-brands fa-whatsapp" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
}
