'use client'; // Ensures client-side rendering only
// 'app/blog/[id]/page.js' (for the new app directory structure in Next.js 13)

import Layout from "@/components/layout/Layout";
// import data from "./../blogTemplate.json"; // Assuming static data for simplicity
import Link from 'next/link';
// import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ModalVideo from 'react-modal-video';

export default function BlogDetails({data }) {
    const [isOpen, setOpen] = useState(false);
    // const Router = useParams(); // Get the dynamic ID from the URL
    const [blogPost, setBlogPost] = useState(data);
    // Get the dynamic id // Default to 1 if no ID is provided

    // useEffect(() => {
    //     // Fetch blog post by id on the client side
    //     const post = data?.find((post) => post.id == id);
    //     setBlogPost(post); // Set the blog post
    // }, [id]); // Trigger on id change

    return (
        <>
            {blogPost && (
                <>
                    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={blogPost.title}>
                        <div className="blog-page sp2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blogs">
                                            <article className="post-blog post-format-image">
                                                <div className="single-blog">
                                                    {/* Blog images */}
                                                    <div className="execution-images">
                                                        <div className="execution-img1">
                                                            <img src="/assets/img/shapes/service-details-shaop-bg.svg" alt="" />
                                                        </div>
                                                        <div className="execution-img2">
                                                            <img src={blogPost.img} alt="" />
                                                        </div>
                                                        <div className="execution-img3">
                                                            <img src="/assets/img/shapes/service-details-shape.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    {/* Blog author, date, and category */}
                                                    <div className="author-bio mt-4 mb-3">
                                                        <div className="author-name">
                                                            <Link href="#" className="font-f-2">
                                                                <i className="fa-solid fa-user" /> {blogPost.author}
                                                            </Link>
                                                        </div>
                                                        <div className="blog-category">
                                                            <Link href="#" className="font-f-2">
                                                                <i className="fa-solid fa-tag" /> {blogPost.category}
                                                            </Link>
                                                        </div>
                                                        <div className="blog-date">
                                                            <Link href="#" className="font-f-2">
                                                                <i className="fa-solid fa-calendar-days" /> {blogPost.date}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* Blog content */}
                                                    <div className="hadding2">
                                                        <h4 className="font-f-2 font-24 line-height-28 weight-500">
                                                            <Link href="/blog-single">{blogPost.title}</Link>
                                                        </h4>
                                                        <div className="space32" />
                                                        <p className="font-f-2 weight-400 line-height-28 font-16">
                                                            {blogPost?.content?.split("\n")?.length > 0 ? blogPost.content.split("\n").map((value, index) => (
                                                                <p key={index}>{value}</p>
                                                            )) : blogPost.content}
                                                        </p>
                                                        <div className="space40" />
                                                    </div>
                                                </div>
                                            </article>
                                            {/* Blog details tags */}
                                            <div className="blog-details-tags">
                                                <div className="blog-details-tag">
                                                    <div className="hadding2">
                                                        <h4 className="font-f-2 font-16 weight-700 line-height-16">Tags :</h4>
                                                    </div>
                                                    <div className="details-tag-list">
                                                        <ul>
                                                            <li><Link href="#" className="font-f-2">Business consult</Link></li>
                                                            <li><Link href="#" className="font-f-2">Consultant</Link></li>
                                                            <li><Link href="#" className="font-f-2">Consulting</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-details-icons">
                                                    <div className="hadding2">
                                                        <h4 className="font-f-2 font-16 weight-700 line-height-16">Share :</h4>
                                                    </div>
                                                    <div className="blogp-details-icon-list">
                                                        <ul>
                                                            <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                                            <li>
                                                                <Link href="whatsapp://send?text=The text to share!" data-action="share/whatsapp/share">
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
                        <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="SZEflIVnhH8" onClose={() => setOpen(false)} />
                    </Layout>
                </>
            )}
        </>
    );
}
