import TrustedSlider1 from "@/components/slider/TrustedSlider1"


export default function Trusted() {
    return (
        <>
            <div className="trusted sp2" id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="featuers-hadding text-center font-w">
                                <h1 className="font-30 font-lg-42 weight-700 line-height-lg-50 line-height-38 font-f-1" data-aos="fade-up" data-aos-duration={600}>
                                    <span className="after">Trusted by 300k+ customer.</span>
                                </h1>
                                <div className="space24" />
                                <p className="font-20 weight-400 line-height-30 font-f-2 pera-c-2" data-aos="fade-up" data-aos-duration={900}>
                                    Avigo project management helps you stay in full control of all your projects and keep track
                                    of all the moving parts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-md-8 m-auto" data-aos="fade-up" data-aos-duration={1000}>
                            <TrustedSlider1 />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
