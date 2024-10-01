import BrandSlider1 from "@/components/slider/BrandSlider1"


export default function Loveus() {
    return (
        <>
            <div className="love-us sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 m-auto text-center">
                            <div className="hadding4">
                                <h1 className="font-f-4 font-30 font-lg-40 line-height-38 line-height-lg-40 weight-800" data-aos="fade-up" data-aos-duration={600}>
                                    Lots Of Customer <span className="after">Love Us</span>
                                </h1>
                                <div className="space16" />
                                <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2" data-aos="fade-up" data-aos-duration={800}>
                                    Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                                    core competencies through client-centered core competencies.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" data-aos="zoom-out" data-aos-duration={800}>
                                <BrandSlider1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
