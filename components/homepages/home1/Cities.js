
import CitySlider1 from '@/components/slider/CitySlider1'
import Link from 'next/link'

export default function Cities() {
    return (
        <>
            <div className="cities sp2 _relative" id="cities">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="hadding2">
                                <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                    Popular <span className="after">cities</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" data-aos="zoom-out" data-aos-duration={800}>
                    <div className="row">
                        <CitySlider1/>
                    </div>
                </div>
            </div>

        </>

    )
}
