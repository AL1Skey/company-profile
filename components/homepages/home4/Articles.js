
import Link from 'next/link'

export default function Articles() {
    return (
        <>
            <div className="home4-articles sp2" id='articles'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 m-auto text-center">
                            <div className="hadding4">
                                <h1 className="font-f-4 font-30 font-lg-40 line-height-38 line-height-lg-40 weight-800" data-aos="fade-up" data-aos-duration={600}>
                                    Latest News  <span className="after">
                                        Articles
                                    </span>
                                </h1>
                                <div className="space16" />
                                <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2" data-aos="fade-up" data-aos-duration={800}>
                                    Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                                    core competencies through client-centered core competencies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 " data-aos="fade-left" data-aos-duration={800}>
                            <div className="home4-article-box box-after">
                                <div className="article-box-img">
                                    <img src="/assets/img/image/home4-articel1.png" alt="" />
                                </div>
                                <div className="article-hadding hadding4">
                                    <h4 className="font-f-4 font-24 line-height-30 weight-600">
                                        <Link href="#">WordPress Hosting Security in 2020 - What We Do To Protect Our Users. </Link>
                                    </h4>
                                    <div className="space16" />
                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                        Thanks to a very fast web server,which is light speed.which in combinataion with opcache
                                        and lscache of website hosting. Every company needs a website in todays market.
                                    </p>
                                    <div className="space32" />
                                    <div className="home4-button home4-button-article">
                                        <Link href="#">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 " data-aos="fade-left" data-aos-duration={600}>
                            <div className="home4-article-box box-after">
                                <div className="article-box-img">
                                    <img src="/assets/img/image/home4-articel2.png" alt="" />
                                </div>
                                <div className="article-hadding hadding4">
                                    <h4 className="font-f-4 font-24 line-height-30 weight-600">
                                        <Link href="#">WordPress 6.0 Release Candidate Why You Should Test It. </Link>
                                    </h4>
                                    <div className="space16" />
                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                        Thanks to a very fast web server,which is light speed.which in combinataion with opcache
                                        and lscache of website hosting. Every company needs a website in todays market.
                                    </p>
                                    <div className="space32" />
                                    <div className="home4-button home4-button-article">
                                        <Link href="#">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 " data-aos="fade-left" data-aos-duration={1000}>
                            <div className="home4-article-box box-after">
                                <div className="article-box-img">
                                    <img src="/assets/img/image/home4-articel3.png" alt="" />
                                </div>
                                <div className="article-hadding hadding4">
                                    <h4 className="font-f-4 font-24 line-height-30 weight-600">
                                        <Link href="#">How To Add a related Posts features To WordPress, Should You Hire A Writter.
                                        </Link>
                                    </h4>
                                    <div className="space16" />
                                    <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2">
                                        Thanks to a very fast web server,which is light speed.which in combinataion with opcache
                                        and lscache of website hosting. Every company needs a website in todays market.
                                    </p>
                                    <div className="space32" />
                                    <div className="home4-button home4-button-article">
                                        <Link href="#">Learn More</Link>
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
