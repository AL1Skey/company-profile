
import Link from 'next/link'

export default function Feedback() {
    return (
        <>
            <div className="home4-feedback sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="hadding4">
                                <h1 className="font-f-4 font-30 font-lg-40 line-height-38 line-height-lg-40 weight-800" data-aos="fade-right" data-aos-duration={600}>
                                    Our Customer’s Valuable <span className="after">
                                        Feedback
                                    </span>
                                </h1>
                                <div className="space24" />
                                <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2" data-aos="fade-right" data-aos-duration={800}>
                                    Using high perfomance web hosting options from Rackspace,
                                    Amazon, Microsoft and more; Text Connects can build your
                                    business a great web hosting plan, for less than you think.
                                </p>
                                <div className="space32" />
                                <div className="home4-button" data-aos="fade-right" data-aos-duration={1000}>
                                    <Link className="home4-btn-f font-f-4 font-16 line-height-16 weight-700" href="#">View All
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6" data-aos="zoom-out" data-aos-duration={800}>
                                    <div className="feedback-box">
                                        <div className="feedback-box-img">
                                            <img src="/assets/img/image/feedback-img1.png" alt="" />
                                        </div>
                                        <div className="feedback-box-img2">
                                            <img src="/assets/img/shapes/feedback-shape.svg" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="feedback-box-hadding">
                                            <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                Using high perfomance web hosting options from Rackspace,
                                                Amazon, Microsoft and more; Text Connects can build your
                                                business a great web hosting plan, for less than you think.
                                            </p>
                                            <div className="space24" />
                                            <div className="feedback-icons">
                                                <ul>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                </ul>
                                            </div>
                                            <div className="space16"> </div>
                                            <div className="feedback-bottom-hadding hadding4">
                                                <h6><Link href="#" className="font-f-2 font-16 line-height-16 weight-700">Wilbur
                                                    Boyle</Link></h6>
                                                <div className="space8" />
                                                <p className="font-f-4 line-height-12 font-12 weight-500 feed-p">Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="zoom-out" data-aos-duration={1000}>
                                    <div className="feedback-box">
                                        <div className="feedback-box-img">
                                            <img src="/assets/img/image/feedback-img2.png" alt="" />
                                        </div>
                                        <div className="feedback-box-img2">
                                            <img src="/assets/img/shapes/feedback-shape.svg" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="feedback-box-hadding">
                                            <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                                Using high perfomance web hosting options from Rackspace,
                                                Amazon, Microsoft and more; Text Connects can build your
                                                business a great web hosting plan, for less than you think.
                                            </p>
                                            <div className="space24" />
                                            <div className="feedback-icons">
                                                <ul>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                    <li><i className="fa-solid fa-star" /></li>
                                                </ul>
                                            </div>
                                            <div className="space16"> </div>
                                            <div className="feedback-bottom-hadding hadding4">
                                                <h6><Link href="#" className="font-f-2 font-16 line-height-16 weight-700">Genevieve
                                                    Baileye</Link></h6>
                                                <div className="space8" />
                                                <p className="font-f-4 line-height-12 font-12 weight-500 feed-p">Client</p>
                                            </div>
                                        </div>
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
