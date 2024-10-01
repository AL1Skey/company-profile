
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import Link from 'next/link'

export default function Testimonial() {
    return (
        <>
            <div className="home5-testimonial home5-testimonial-bg sp2" id="testimonial">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 m-auto text-center">
                            <div className="hadding5 hadding5-tes">
                                <span className="span" data-aos="fade-up" data-aos-duration={600}><img src="/assets/img/icons/span5-2.svg" alt="" /> Testimonial</span>
                                <div className="space20" />
                                <h1 className="font-f-7 weight-700 font-lg-34 line-height-lg-44 line-height-38 font-w font-30" data-aos="fade-up" data-aos-duration={900}>
                                    We are very happy to get our <br /> <span className="after">client’s reviews</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="space40" />
                    <div className="row" data-aos="fade-up" data-aos-duration={1200}>
                        <div className="col-md-12">
                            <TestimonialSlider1/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
