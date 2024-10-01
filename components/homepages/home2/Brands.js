import BrandSlider2 from "@/components/slider/BrandSlider2"


export default function Brands() {
    return (
        <>
            <div className="our-brands our-brands-all2 sp3" data-aos="zoom-in-up" data-aos-duration={900}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="brands-hadding text-center">
                                <h4 className="hadding-c1 font-18 weight-500 font-f-2 line-height-18 ">Trusted by 20,000+ Happy
                                    Customers Worldwide</h4>
                            </div>
                            <BrandSlider2 />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
