
import Link from 'next/link'

export default function Blog() {
    return (
        <>
            <div className="home3-blog sp3" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <div className="hadding3">
                                <h1 className="font-lg-40 font-f-4 font-30 weight-700 line-height-lg-48 line-height-38" data-aos="fade-up" data-aos-duration={600}>
                                    Read our blog
                                </h1>
                                <div className="space16" />
                                <p className="font-f-5 font-16 line-height-28" data-aos="fade-up" data-aos-duration={800}>
                                    We've been working really hard to improve the appino with this
                                    amazing new features that you aked for! Check out the appino’s
                                    new amazing features.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="blog-single-img" data-aos="fade-up" data-aos-duration={700}>
                                <div >
                                    <img className="img-border" src="/assets/img/image/home3-blog-1.png" alt="" />
                                </div>
                                <div className="hadding3 blog-hadding">
                                    <div className="space30" />
                                    <h6 className="font-f-5 font-16 line-height-16 weight-400">
                                        <img src="/assets/img/icons/clock.svg" alt="" /><span>October 15,2020</span>
                                    </h6>
                                    <div className="space8" />
                                    <h4 className="font-f-4 font-24 line-height-34 weight-600">
                                        <Link href="#">Avigo Will Support Bitcoin Cash Afterall.</Link>
                                    </h4>
                                    <div className="space16" />
                                    <Link href="#" className="home3-read-more font-f-4 font-16 line-height-16 weight-700">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-single-img" data-aos="fade-up" data-aos-duration={1000}>
                                <div >
                                    <img className="img-border" src="/assets/img/image/home3-blog-2.png" alt="" />
                                </div>
                                <div className="hadding3 blog-hadding">
                                    <div className="space30" />
                                    <h6 className="font-f-5 font-16 line-height-16 weight-400">
                                        <img className="img-border" src="/assets/img/icons/clock.svg" alt="" /><span>October
                                            15,2020</span>
                                    </h6>
                                    <div className="space8" />
                                    <h4 className="font-f-4 font-24 line-height-34 weight-600">
                                        <Link href="#">Peter Funch Shares The Photos Books that Inspire His Own
                                            Practice.</Link>
                                    </h4>
                                    <div className="space16" />
                                    <Link href="#" className="home3-read-more font-f-4 font-16 line-height-16 weight-700">Read More <i className="fa-solid fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
