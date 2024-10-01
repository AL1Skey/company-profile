import BrandSlider1 from "@/components/slider/BrandSlider1"


export default function Brand() {
    return (
        <>
            <div className="our-brands our-brands-h3 our-brands3" data-aos="zoom-in-up" data-aos-duration={800}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="brands-hadding text-center hadding2">
                                <h4 className="font-20 weight-600 font-f-4 line-height-32">
                                    Trusted by more than 400+ companies worldwide
                                </h4>
                            </div>
                            <BrandSlider1 />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
