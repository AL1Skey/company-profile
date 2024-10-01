
import Link from 'next/link'

export default function Subscribe() {
    return (
        <>
            <div className="subsribe5 subsribe5-bg sp2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hadding5">
                                <span className="span" data-aos="fade-right" data-aos-duration={600}><img src="/assets/img/icons/span5.svg" alt="" /> We give you piece of mind</span>
                                <div className="space24" />
                                <h1 className="font-f-7 weight-700 font-lg-34 line-height-lg-44 line-height-38 font-30" data-aos="fade-right" data-aos-duration={900}>
                                    Since long, we have been providing <span className="after">group health</span> insurance and
                                    other solutions.
                                </h1>
                                <div className="space24" />
                                <p className="font-f-8 font-16 font-w weight-400 line-height-28" data-aos="fade-right" data-aos-duration={1000}>
                                    Since our inception, we have worked extensively to build a ensure network consisting of the
                                    world’s highest rated insurance.
                                </p>
                                <div className="space32" />
                                <div className="button5" data-aos="fade-right" data-aos-duration={600}>
                                    <Link href="#">Lets Talk<span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-end">
                            <div className="cta5-images" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="contact-image1">
                                    <img src="/assets/img/shapes/cta5-shaop.svg" alt="" />
                                </div>
                                <div className="contact-image2">
                                    <img src="/assets/img/image/cta5-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
