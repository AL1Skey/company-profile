
'use client'
import Layout from "@/components/layout/Layout"
import BlogSlider from "@/components/slider/BlogSlider"
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Page() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog formats">

                <div>
                    <div className="blog-page sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="widgets lg-ml-15">
                                        <div className="single-widget widget_search">
                                            <h3 className="font-f-2">Search</h3>
                                            <div className="search-form-widget">
                                                <form action="#">
                                                    <input type="search" placeholder="Search" />
                                                    <button type="submit" className="search-icon"><i className="fa-solid fa-magnifying-glass" /></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="single-widget widget_categories">
                                            <h3 className="font-f-2">Blog Category</h3>
                                            <div className="space10" />
                                            <div className="blog-category-list">
                                                <ul>
                                                    <li><Link className="active" href="#">Excutive consultant (10) <span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                    <li><Link href="#" className="font-f-2">Marketing  advertising (12) <span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                    <li><Link href="#" className="font-f-2">Accounbility  execution (08)<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                    <li><Link href="#" className="font-f-2">Business planning (21)<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                    <li><Link href="#" className="font-f-2">Privet planning (13)<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                    <li><Link href="#" className="font-f-2">Mutual invest planning (06)<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                    <li><Link href="#" className="font-f-2">Project managment (1)<span><i className="fa-solid fa-angle-right" /></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-widget single-widget-post-sidebar">
                                            <h3 className="font-f-2">Search</h3>
                                            <div className="recent-post">
                                                <div >
                                                    <div className="recent-img">
                                                        <img src="/assets/img/image/blog-details-side1.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="recent-post-content">
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><img src="/assets/img/icons/date.svg" alt="" /> 11/02/2022</li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link href="#" className="font-f-2">Leadership Burnout: What causes it and how avoid
                                                        it.</Link></h6>
                                                </div>
                                            </div>
                                            <div className="recent-post">
                                                <div >
                                                    <div className="recent-img">
                                                        <img src="/assets/img/image/blog-details-side2.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="recent-post-content">
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><img src="/assets/img/icons/date.svg" alt="" /> 11/02/2022</li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link href="#" className="font-f-2">New Consulting For All Kind Offer Finance...</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-post">
                                                <div >
                                                    <div className="recent-img">
                                                        <img src="/assets/img/image/blog-details-side3.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="recent-post-content">
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><img src="/assets/img/icons/date.svg" alt="" /> 11/02/2022</li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link href="#" className="font-f-2">What we are capable to usually discovered...</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-post">
                                                <div >
                                                    <div className="recent-img">
                                                        <img src="/assets/img/image/blog-details-side4.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="recent-post-content">
                                                    <div className="blog-date-time">
                                                        <ul className="blog-date">
                                                            <li><img src="/assets/img/icons/date.svg" alt="" /> 11/02/2022</li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link href="#" className="font-f-2">Questions every work business owner able...</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-img-box-all text-center">
                                            <div className="sidebar-img">
                                                <img src="/assets/img/image/sidebar-box-img.png" alt="" />
                                            </div>
                                            <div className="sidebar-box-hadding">
                                                <div className="space16" />
                                                <h4><Link href="#" className="font-f-2 font-20 line-height-20 weight-500 font-w">Alex Blake</Link>
                                                </h4>
                                                <div className="space24" />
                                                <p className="font-f-2 font-16 line-height-26 weight-400 font-w">When it comes to business,
                                                    listen to Henry David Thoreau: things usually don’t happen overnight – instead, to
                                                    find success takes a lot of time, effort, and courage. Opus includes everything you
                                                    need to build a beautiful website.</p>
                                            </div>
                                            <div className="space24" />
                                            <div className="details-side-box-icon">
                                                <ul>
                                                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-widget widget_tag_cloud">
                                            <h3 className="font-f-2">Tags</h3>
                                            <div className="space10" />
                                            <div className="tagcloud">
                                                <Link href="#" className="font-f-2">Healthcare</Link>
                                                <Link href="#" className="font-f-2">Consult</Link>
                                                <Link href="#" className="font-f-2">Cahless</Link>
                                                <Link href="#" className="font-f-2">Cyberattacks</Link>
                                                <Link href="#" className="font-f-2">Meeting</Link>
                                                <Link href="#" className="font-f-2">Leadership</Link>
                                                <Link href="#" className="font-f-2">Health Insurace</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="blogs padding-left">
                                        <article className="post-blog post-format-image">
                                            <div className="single-blog">
                                                <div className="execution-images">
                                                    <div className="execution-img1">
                                                        <img src="/assets/img/shapes/service-details-shaop-bg.svg" alt="" />
                                                    </div>
                                                    <div className="execution-img2">
                                                        <img src="/assets/img/image/service-details-img.png" alt="" />
                                                    </div>
                                                    <div className="execution-img3">
                                                        <img src="/assets/img/shapes/service-details-shape.svg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="author-bio mt-4">
                                                    <div className="author-name">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-user" /> Miro koyetin</Link>
                                                    </div>
                                                    <div className="blog-category">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-tag" />Lifestyle</Link>
                                                    </div>
                                                    <div className="blog-date">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-calendar-days" />18 March
                                                            2023</Link>
                                                    </div>
                                                </div>
                                                <div className="space24" />
                                                <div className="hadding2">
                                                    <h4 className="font-f-2 font-24 line--height-28 weight-500"> <Link href="/blog-details">We leverage technology to solve challenges for your
                                                        business.</Link></h4>
                                                    <div className="space24" />
                                                    <p className="font-f-2 weight-400 line-height-28 font-16">After an initial complimentary
                                                        phone call consultation, for new and potential clients we then conduct an
                                                        initial assessment, which reviews and covers the current or potential business
                                                        opportunities to made marketing strategies, marketplace competitive analysis,
                                                        social media presence and other specific an assessments as needed to determine
                                                        the best recommendations to improve client productivity, ensure efficiency, and
                                                        generate revenue immediately. This aids in the discovery process for both client
                                                        and consultant hen have a two hour meeting to discuss your business goals and
                                                        provide.</p>
                                                    <div className="space24" />
                                                    <p className="font-f-2 weight-400 line-height-28 font-16">After an initial complimentary
                                                        phone call consultation, for new and potential clients we then conduct an
                                                        initial assessment, which reviews and covers the current or potential business
                                                        opportunities to made marketing strategies, marketplace competitive analysis,
                                                        social media presence and other specific an assessments as needed to determine
                                                        the best recommendations to improve client productivity, ensure efficiency, and
                                                        generate revenue immediately. This aids in the discovery process for both client
                                                        and consultant hen have a two hour meeting to discuss your business goals and
                                                        provide.</p>
                                                </div>
                                                <div className="space40" />
                                                <div className="home2-btn">
                                                    <Link className="font-18 line-height-30 font-f-2 font-w" href="/blog-single">Learn
                                                        more</Link>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="post-blog post-format-video">
                                            <div className="single-blog">
                                                <div className="blog-img blog-details-img">
                                                    <Link href="/single"><img src="/assets/img/image/blog-details-video.png" alt="" /></Link>
                                                    <div className="video-btn-details">
                                                        <a id="play-video video-action-btn1" className="video-play-button2" onClick={() => setOpen(true)}>
                                                            <span />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="author-bio mt-4">
                                                    <div className="author-name">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-user" /> Miro koyetin</Link>
                                                    </div>
                                                    <div className="blog-category">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-tag" />Lifestyle</Link>
                                                    </div>
                                                    <div className="blog-date">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-calendar-days" />18 March
                                                            2023</Link>
                                                    </div>
                                                </div>
                                                <div className="space24" />
                                                <div className="hadding2">
                                                    <h4 className="font-f-2 font-24 line--height-28 weight-500"> <Link href="/blog-single">We leverage technology to solve challenges for your
                                                        business.</Link></h4>
                                                    <div className="space24" />
                                                    <p className="font-f-2 weight-400 line-height-28 font-16">After an initial complimentary
                                                        phone call consultation, for new and potential clients we then conduct an
                                                        initial assessment, which reviews and covers the current or potential business
                                                        opportunities to made marketing strategies, marketplace competitive analysis,
                                                        social media presence and other specific an assessments as needed to determine
                                                        the best recommendations to improve client productivity, ensure efficiency, and
                                                        generate revenue immediately. This aids in the discovery process for both client
                                                        and consultant hen have a two hour meeting to discuss your business goals and
                                                        provide.</p>
                                                </div>
                                                <div className="space40" />
                                                <div className="home2-btn">
                                                    <Link className="font-18 line-height-30 font-f-2 font-w" href="#">Learn more</Link>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="post-blog  post-format-gallery">
                                            <div className="single-blog">
                                                <BlogSlider />
                                                <div className="author-bio mt-4">
                                                    <div className="author-name">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-user" /> Miro koyetin</Link>
                                                    </div>
                                                    <div className="blog-category">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-tag" />Lifestyle</Link>
                                                    </div>
                                                    <div className="blog-date">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-calendar-days" />18 March
                                                            2023</Link>
                                                    </div>
                                                </div>
                                                <div className="space24" />
                                                <div className="hadding2">
                                                    <h4 className="font-f-2 font-24 line--height-28 weight-500"> <Link href="/blog-details">We leverage technology to solve challenges for your
                                                        business.</Link></h4>
                                                    <div className="space24" />
                                                    <p className="font-f-2 weight-400 line-height-28 font-16">After an initial complimentary
                                                        phone call consultation, for new and potential clients we then conduct an
                                                        initial assessment, which reviews and covers the current or potential business
                                                        opportunities to made marketing strategies, marketplace competitive analysis,
                                                        social media presence and other specific an assessments as needed to determine
                                                        the best recommendations to improve client productivity, ensure efficiency, and
                                                        generate revenue immediately. This aids in the discovery process for both client
                                                        and consultant hen have a two hour meeting to discuss your business goals and
                                                        provide.</p>
                                                </div>
                                                <div className="space40" />
                                                <div className="home2-btn">
                                                    <Link className="font-18 line-height-30 font-f-2 font-w" href="#">Learn more</Link>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="post-blog post-format-audio">
                                            <div className="single-blog">
                                                <div className="post-audio">
                                                    <iframe width="100%" height={300} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1368539359&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                                                    <div style={{ fontSize: 10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                                                        <Link href="/https://soundcloud.com/a8ani2" title="Sasa" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Sasa</Link> · <Link href="/https://soundcloud.com/a8ani2/pxphroz3omzp" title="فريد - بأمارة مين (لو جاي في رجوع إنساني)" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>فريد - بأمارة مين (لو جاي في
                                                            رجوع إنساني)</Link></div>
                                                </div>
                                                <div className="author-bio mt-4">
                                                    <div className="author-name">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-user" /> Miro koyetin</Link>
                                                    </div>
                                                    <div className="blog-category">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-tag" />Lifestyle</Link>
                                                    </div>
                                                    <div className="blog-date">
                                                        <Link href="#" className="font-f-2"><i className="fa-solid fa-calendar-days" />18 March
                                                            2023</Link>
                                                    </div>
                                                </div>
                                                <div className="space24" />
                                                <div className="hadding2">
                                                    <h4 className="font-f-2 font-24 line--height-28 weight-500"> <Link href="/blog-details">We leverage technology to solve challenges for your
                                                        business.</Link></h4>
                                                    <div className="space24" />
                                                    <p className="font-f-2 weight-400 line-height-28 font-16">After an initial complimentary
                                                        phone call consultation, for new and potential clients we then conduct an
                                                        initial assessment, which reviews and covers the current or potential business
                                                        opportunities to made marketing strategies, marketplace competitive analysis,
                                                        social media presence and other specific an assessments as needed to determine
                                                        the best recommendations to improve client productivity, ensure efficiency, and
                                                        generate revenue immediately. This aids in the discovery process for both client
                                                        and consultant hen have a two hour meeting to discuss your business goals and
                                                        provide.</p>
                                                </div>
                                                <div className="space40" />
                                                <div className="home2-btn">
                                                    <Link className="font-18 line-height-30 font-f-2 font-w" href="#">Learn more</Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="space60" />
                                    <div className="row text-center">
                                        <div className="col-12 m-auto text-center">
                                            <div className="theme-pagination text-center">
                                                <ul>
                                                    <li><Link href="#"><i className="fa-solid fa-angle-left" /></Link></li>
                                                    <li><Link className="active" href="#">01</Link></li>
                                                    <li><Link href="#">02</Link></li>
                                                    <li>...</li>
                                                    <li><Link href="#">12</Link></li>
                                                    <li><Link href="#"><i className="fa-solid fa-angle-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-bg sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="hadding2 font-f-2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            Read our <span className="after">realeted blog</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="space40" />
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="blog-page-boxs">
                                        <div className="blog-boxs-img">
                                            <img src="/assets/img/image/blog-page1.png" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="hadding2 blog-page-hadding">
                                            <h4 className="font-f-2 font-20 line--height-24 weight-500"> <Link href="/blog-details">Consultant builds complete BPM hands solutions for clients
                                                around the world.</Link></h4>
                                            <div className="space16" />
                                            <p className="font-f-2 weight-400 line-height-28 font-16">Emprise builds complete BPM solutions
                                                for clients around the world. It allows for low cost of ownership and puts the decision
                                                making in the hands of the Business with expert consultant.</p>
                                        </div>
                                        <div className="space24" />
                                        <div className="all-read-btn">
                                            <Link href="/service-details" className="font-f-2 line--height-16 font-16 weight-700">Read more
                                                <i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-page-boxs">
                                        <div className="blog-boxs-img">
                                            <img src="/assets/img/image/blog-page2.png" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="hadding2 blog-page-hadding">
                                            <h4 className="font-f-2 font-20 line-height-24 weight-500"> <Link href="/blog-details">Your
                                                Business Building automation into business processes.</Link></h4>
                                            <div className="space16" />
                                            <p className="font-f-2 weight-400 line-height-28 font-16">Emprise builds complete BPM solutions
                                                for clients around the world. It allows for low cost of ownership and puts the decision
                                                making in the hands of the Business with expert consultant.</p>
                                        </div>
                                        <div className="space24" />
                                        <div className="all-read-btn">
                                            <Link href="/service-details" className="font-f-2 line--height-16 font-16 weight-700">Read more
                                                <i className="fa-solid fa-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-page-boxs">
                                        <div className="blog-boxs-img">
                                            <img src="/assets/img/image/blog-page3.png" alt="" />
                                        </div>
                                        <div className="space24" />
                                        <div className="hadding2 blog-page-hadding">
                                            <h4 className="font-f-2 font-20 line-height-24 weight-500"> <Link href="/blog-details">We
                                                leverage technology to solve challenges for your business.</Link></h4>
                                            <div className="space16" />
                                            <p className="font-f-2 weight-400 line-height-28 font-16">Emprise builds complete BPM solutions
                                                for clients around the world. It allows for low cost of ownership and puts the decision
                                                making in the hands of the Business with expert consultant.</p>
                                        </div>
                                        <div className="space24" />
                                        <div className="all-read-btn">
                                            <Link href="/service-details" className="font-f-2 line--height-16 font-16 weight-700">Read more
                                                <i className="fa-solid fa-arrow-right" /></Link>
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
    )
}