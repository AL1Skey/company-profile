import BrandSlider1 from "@/components/slider/BrandSlider1"


export default function Brand() {
    return (
        <>
            <div className="our-brands padding50 our-brands2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="brands-hadding brands-hadding-all1 text-center hadding2">
                                <h4 className="font-16 weight-500 font-f-2 line-height-18">
                                    Partners With 100+ Company
                                </h4>
                            </div>
                            <BrandSlider1/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
