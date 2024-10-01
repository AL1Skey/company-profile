
import Link from 'next/link'

export default function Works() {
    return (
        <>
            <div className="works sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <div className="hadding2" data-aos="fade-up" data-aos-duration={600}>
                                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                    How it <span className="after">works</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="space40" />
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <div className="work-box" data-aos="fade-up" data-aos-duration={700}>
                                <div className="work-box-img">
                                    <img src="/assets/img/icons/works-icon-1.svg" alt="" />
                                </div>
                                <div className="space32" />
                                <div className="hadding2">
                                    <h4 className="font-20 line-height-20 weight-500">
                                        <Link className="home2-a weight-500" href="#">Choose a property</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p className="font-16 line-height-28 font-f-2 weight-400">
                                        If miss part by fact he park just shew. Discovered had get
                                        considered projection who have favourable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="work-box" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="work-box-img">
                                    <img src="/assets/img/icons/works-icon-2.svg" alt="" />
                                </div>
                                <div className="space32" />
                                <div className="hadding2">
                                    <h4 className="font-20 line-height-20 weight-400">
                                        <Link className="home2-a weight-500" href="#">Visit the property</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p className="font-16 line-height-28 font-f-2 weight-400">
                                        If miss part by fact he park just shew. Discovered had get
                                        considered projection who have favourable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="work-box" data-aos="fade-up" data-aos-duration={1300}>
                                <div className="work-box-img">
                                    <img src="/assets/img/icons/works-icon-3.svg" alt="" />
                                </div>
                                <div className="space32" />
                                <div className="hadding2">
                                    <h4 className="font-20 line-height-20 weight-500">
                                        <Link className="home2-a weight-500" href="#">Close the deal</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p className="font-16 line-height-28 font-f-2 weight-400">
                                        If miss part by fact he park just shew. Discovered had get
                                        considered projection who have favourable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
