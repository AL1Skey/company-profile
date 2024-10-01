
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className="hero-area home4-hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="home4-main-hadding">
                                <span className="font-f-4 font-16 line-height-16 weight-500 font-w span" data-aos="fade-right" data-aos-duration={600}>Best Wordpress Hosting</span>
                                <div className="space20" />
                                <h1 className="font-f-4 font-lg-70 font-40 line-height-lg-80 weight-800 line-height-48 font-w" data-aos="fade-right" data-aos-duration={800}>
                                    Web hosting provider <br />
                                    for businesses  <br />
                                    <span className="after">creative</span> professionals
                                </h1>
                                <div className="space24" />
                                <p data-aos="fade-right" data-aos-duration={600} className="font-f-4 weight-400 font-16 line-height-24">
                                    Every company needs a website in todays market. Most companies
                                    spend their <br />
                                    entire budget on the design, then spend $5/month on horrible web
                                    hosting.
                                </p>
                                <div className="space32" />
                                <div className="home4-buttons" data-aos="fade-right" data-aos-duration={1000}>
                                    <div className="home4-button">
                                        <Link className="home4-btn1 home4-btn-f font-f-4 font-16 line-height-16 weight-700" href="#">Get Started</Link>
                                        <Link className="home4-btn2 home4-btn-f font-f-4 font-16 line-height-16 weight-700" href="#">View Price
                                        </Link>
                                    </div>
                                </div>
                                <div className="space40" />
                                <div className="reviews-all" data-aos="fade-right" data-aos-duration={1200}>
                                    <div className="review-images">
                                        <img src="/assets/img/image/review-all.png" alt="" />
                                    </div>
                                    <div className="star-reviews">
                                        <div className="star-review">
                                            <div className="star">
                                                <ul>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                </ul>
                                            </div>
                                            <div className="review-p">
                                                <h6 className="font-f-4 font-w font-16">(5.0)</h6>
                                            </div>
                                        </div>
                                        <p className="font-f-4 font-16 line-height-16 font-w weight-500 reviewp">
                                            From 560 Reviews
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
