'use client'
import Layout from "@/components/layout/Layout"
import BlogSlider from "@/components/slider/BlogSlider"
import data from "./../blogTemplate.json"
import Link from 'next/link'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import ModalVideo from 'react-modal-video'

export default function BlogDetails() {
    const [isOpen, setOpen] = useState(false)
    let Router = useParams()
    const [blogPost, setBlogPost] = useState(null)
    const id = Router.id || 1
    console.log(id)
    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <>
                {blogPost && (
                    <>
                    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={blogPost.title}>

                    <div>
                        <div className="blog-page sp2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blogs">
                                            <article className="post-blog post-format-image">
                                                <div className="single-blog">
                                        {/* Start Detail Blog Page (Author, Date Category) */}
                                                    <div className="execution-images">
                                                        <div className="execution-img1">
                                                            <img src="/assets/img/shapes/service-details-shaop-bg.svg" alt="" />
                                                        </div>
                                                        <div className="execution-img2">
                                                            <img src={"/assets/img/image/"+blogPost.img} alt="" />
                                                        </div>
                                                        <div className="execution-img3">
                                                            <img src="/assets/img/shapes/service-details-shape.svg" alt="" />
                                                        </div>
                                                    </div>
                                        {/* End Detail Blog Page (Author, Date Category) */}
                                        
                                                    <div className="author-bio mt-4 mb-3">
                                                        <div className="author-name">
                                                            <Link href="#" className="font-f-2"><i className="fa-solid fa-user" /> Miro koyetin</Link>
                                                        </div>
                                                        <div className="blog-category">
                                                            <Link href="#" className="font-f-2"><i className="fa-solid fa-tag" />Lifestyle</Link>
                                                        </div>
                                                        <div className="blog-date">
                                                            <Link href="#" className="font-f-2"><i className="fa-solid fa-calendar-days" />18 March 2023</Link>
                                                        </div>
                                                    </div>
                                        {/* Start Blog Page */}
                                                    <div className="hadding2">
                                                        <h4 className="font-f-2 font-24 line-height-28 weight-500"> <Link href="/blog-single">{blogPost.title}</Link></h4>
                                                        <div className="space32" />
                                                        {/* <p className="details-p-hadding font-18 line-height-18 weight-500 font-f-2">Client completes business questionnaire</p> */}
                                                        <div className="space16" />
                                                        <p className="font-f-2 weight-400 line-height-28 font-16">{blogPost.content.split("\n").map((value,index)=>(
                                                            <>
                                                            <p key={index}>{value}</p>
                                                            <br/>
                                                            </>
                                                        ))}</p>
                                                        <div className="space40" />
                                                        
                                                    </div>
                                                </div>
                                        {/* End Blog Page */}
                                            </article>
                                            <div className="border-details">
                                            </div>
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
                                                            <li>
                                                                <Link href="#"><i className="fa-brands fa-twitter" /></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-details">
                                            </div>
                                            <div className="space40" />
                                            <div className="hadding2">
                                                <h4 className="font-f-2 font-24 line-height-28 weight-500"> <Link href="/blog-single">3 Comments</Link></h4>
                                            </div>
                                            <div className="comment-box-all">
                                                <div className="commet-single-box">
                                                    <div >
                                                        <div className="single-commet-img">
                                                            <img src="/assets/img/image/single-commnet-img.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <div className="hadding2">
                                                            <h4 className="font-f-2 font-24 line-height-28 weight-500"> <Link href="/blog-single">Alyssa Breitenberg</Link></h4>
                                                            <div className="space20" />
                                                            <p className="font-f-2 weight-400 line-height-28 font-16">When it comes to business, listen to Henry David Thoreau: things usually don’t happen overnight – instead, to find success takes a lot of time, effort, and courage. Opus includes everything you need to build a beautiful website. </p>
                                                        </div>
                                                        <div className="replly-btn">
                                                            <Link href="#" className="font-f-2">Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="commet-single-box">
                                                    <div >
                                                        <div className="single-commet-img">
                                                            <img src="/assets/img/image/single-commnet-img.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <div className="hadding2">
                                                            <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="/blog-details">Violet DuBuque</Link></h4>
                                                            <div className="space20" />
                                                            <p className="font-f-2 weight-400 line-height-28 font-16">When it comes to business, listen to Henry David Thoreau: things usually don’t happen overnight – instead, to find success takes a lot of time, effort, and courage. Opus includes everything you need to build a beautiful website. </p>
                                                        </div>
                                                        <div className="replly-btn">
                                                            <Link href="#" className="font-f-2">Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="commet-single-box">
                                                    <div >
                                                        <div className="single-commet-img">
                                                            <img src="/assets/img/image/single-commnet-img.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <div className="hadding2">
                                                            <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="/blog-details">Forrest Altenwerth</Link></h4>
                                                            <div className="space20" />
                                                            <p className="font-f-2 weight-400 line-height-28 font-16">When it comes to business, listen to Henry David Thoreau: things usually don’t happen overnight – instead, to find success takes a lot of time, effort, and courage. Opus includes everything you need to build a beautiful website. </p>
                                                        </div>
                                                        <div className="replly-btn">
                                                            <Link href="#" className="font-f-2">Reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space60" />
                                            <div className="border-details">
                                            </div>
                                            <div className="space50" />
                                            <div className="contact-form-all">
                                                <div className="hadding2">
                                                    <h4 className="font-f-2 font-22 line--height-22 weight-500"> <Link href="/blog-details">Leave a Comment</Link></h4>
                                                </div>
                                                <div className="space30" />
                                                <form action="#">
                                                    <div className="contact-form-comon">
                                                        <div className="contact-input">
                                                            <input type="text" placeholder="First Name" />
                                                            <input type="email" placeholder="Email" />
                                                        </div>
                                                        <div className="contact-input">
                                                            <input type="number" placeholder="Phone" />
                                                            <input type="text" placeholder="Subject" />
                                                        </div>
                                                        <div className="contact-input">
                                                            <textarea cols={30} rows={3} placeholder="Message" />
                                                        </div>
                                                    </div>
                                                    <div className="space20" />
                                                    <div className="details-form-btn">
                                                        <div className="home2-btn">
                                                            <button className="font-18 line-height-30 weight-700 font-f-2 font-w">
                                                                Get Notified
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-realeted page-bg sp2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="hadding2 font-f-2">
                                            <h1 className="font-f-2 weight-500 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                                Read our <span className="after">realeted blog</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="space40" />
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="blog-page-boxs blog-page-boxs1">
                                            <div className="blog-boxs-img">
                                                <img src="/assets/img/image/blog-page1.png" alt="" />
                                            </div>
                                            <div className="space24" />
                                            <div className="hadding2 blog-page-hadding">
                                                <h4 className="font-f-2 font-20 line--height-24 weight-500"> <Link href="/blog-details">Consultant builds complete BPM hands solutions for clients around the world.</Link></h4>
                                                <div className="space16" />
                                                <p className="font-f-2 weight-400 line-height-28 font-16">Emprise builds complete BPM solutions for clients around the world. It allows for low cost of ownership and puts the decision making in the hands of the Business with expert consultant.</p>
                                            </div>
                                            <div className="space24" />
                                            <div className="all-read-btn">
                                                <Link href="/service-details" className="font-f-2 line--height-16 font-16 weight-700">Read more <i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="blog-page-boxs blog-page-boxs1">
                                            <div className="blog-boxs-img">
                                                <img src="/assets/img/image/blog-page2.png" alt="" />
                                            </div>
                                            <div className="space24" />
                                            <div className="hadding2 blog-page-hadding">
                                                <h4 className="font-f-2 font-20 line-height-24 weight-500"> <Link href="/blog-details">Your Business Building automation into business processes.</Link></h4>
                                                <div className="space16" />
                                                <p className="font-f-2 weight-400 line-height-28 font-16">Emprise builds complete BPM solutions for clients around the world. It allows for low cost of ownership and puts the decision making in the hands of the Business with expert consultant.</p>
                                            </div>
                                            <div className="space24" />
                                            <div className="all-read-btn">
                                                <Link href="/service-details" className="font-f-2 line--height-16 font-16 weight-700">Read more <i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="blog-page-boxs blog-page-boxs1">
                                            <div className="blog-boxs-img">
                                                <img src="/assets/img/image/blog-page3.png" alt="" />
                                            </div>
                                            <div className="space24" />
                                            <div className="hadding2 blog-page-hadding">
                                                <h4 className="font-f-2 font-20 line-height-24 weight-500"> <Link href="/blog-details">We leverage technology to solve challenges for your business.</Link></h4>
                                                <div className="space16" />
                                                <p className="font-f-2 weight-400 line-height-28 font-16">Emprise builds complete BPM solutions for clients around the world. It allows for low cost of ownership and puts the decision making in the hands of the Business with expert consultant.</p>
                                            </div>
                                            <div className="space24" />
                                            <div className="all-read-btn">
                                                <Link href="/service-details" className="font-f-2 line--height-16 font-16 weight-700">Read more <i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*=====SUBSRIBE START=======*/}
                        <div className="subsribe-all sp2">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="all-subsribe-hadding">
                                            <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45 font-w">
                                                Get the properties you're interested in delivered straight to
                                                your inbox.
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="comon-subsribe-all-input">
                                            <input type="email" placeholder="Enter your email here" />
                                            <div className="subsribe-btn">
                                                <div className="home2-btn">
                                                    <button className="font-18 line-height-30 weight-700 font-f-2 font-w">
                                                        Get Notified
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="SZEflIVnhH8" onClose={() => setOpen(false)} />
                    </Layout>
                    </>
                )}
        </>
    )
}