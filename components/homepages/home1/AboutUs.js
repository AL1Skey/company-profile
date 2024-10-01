import AboutSlider1 from "@/components/slider/AboutSlider1"


export default function AboutUs() {
    return (
        <>
            <div className="litings home1-about-us sp2" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <div className="hadding2 apartment2-hadding font-f-2">
                                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55" data-aos="fade-up" data-aos-duration={600}>
                                    What our <span className="after">customers</span> <br />
                                    say about us.
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row" data-aos="fade-up" data-aos-duration={900}>
                        <AboutSlider1 />
                    </div>
                </div>
            </div>

        </>

    )
}
