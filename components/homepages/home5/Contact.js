
import Link from 'next/link'

export default function Contact() {
    return (
        <>
            <div className="contact5 sp2" id="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="hadding5">
                                <span className="span" data-aos="fade-right" data-aos-duration={600}><img src="/assets/img/icons/span5.svg" alt="" /> Contact us</span>
                                <div className="space24" />
                                <h1 className="font-f-7 weight-700 font-lg-34 line-height-lg-44 line-height-38 font-30" data-aos="fade-right" data-aos-duration={900}>
                                    We offer guidance help you make the <span className="after">right decisions</span> for yourself.
                                </h1>
                                <div className="space24" />
                                <p className="font-f-8 font-16 font-w weight-400 line-height-28" data-aos="fade-right" data-aos-duration={1000}>
                                    Since our inception, we have worked extensively to build a ensure network consisting of the
                                    world’s highest rated insurance.
                                </p>
                            </div>
                            <div className="space24" />
                            <form action="#">
                                <div className="contact5-form">
                                    <div className="contact5-inputs">
                                        <div className="contact5-input" data-aos="fade-right" data-aos-duration={1200}>
                                            <input type="text" name="name" placeholder="First Name" />
                                            <input type="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="space10" />
                                        <div className="contact5-input" data-aos="fade-right" data-aos-duration={900}>
                                            <input type="number" name="name" placeholder="Phone" />
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                        <div className="space10" />
                                        <div className="contact5-input" data-aos="fade-right" data-aos-duration={600}>
                                            <textarea cols={30} rows={3} placeholder="Message" />
                                        </div>
                                        <div className="space32" />
                                        <div className="button5" data-aos="fade-right" data-aos-duration={1000}>
                                            <button>Send Us Message <span><i className="fa-solid fa-arrow-right" /></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="contact5-items">
                                <div data-aos="zoom-out" data-aos-duration={1200}>
                                    <div className="service5-2-box-single contact5-box-single">
                                        <div >
                                            <div className="service5-2-box-img">
                                                <img src="/assets/img/icons/contact5-icon1.svg" alt="" />
                                            </div>
                                        </div>
                                        <div >
                                            <div className="service5-2-box-hadding contact5-box-hadding hading5">
                                                <h4 ><Link href="#" className="font-f-7 weight-700 line-height-20 font-20">Office Location</Link>
                                                </h4>
                                                <div className="space12" />
                                                <Link href="#" className="font-f-8">Insurea New York </Link>
                                                <Link href="#" className="font-f-8"> 831 SW 149th Street, Burien.</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-out" data-aos-duration={900}>
                                    <div className="service5-2-box-single contact5-box-single">
                                        <div >
                                            <div className="service5-2-box-img">
                                                <img src="/assets/img/icons/contact5-icon2.svg" alt="" />
                                            </div>
                                        </div>
                                        <div >
                                            <div className="service5-2-box-hadding contact5-box-hadding hading5">
                                                <h4 ><Link href="#" className="font-f-7 weight-700 line-height-20 font-20">Email Address</Link>
                                                </h4>
                                                <div className="space12" />
                                                <Link href="/mailto:Celestino10@gmail.com" className="font-f-8">Celestino10@gmail.com
                                                </Link>
                                                <Link href="/mailto:Rhiannon52@gmail.com " className="font-f-8"> Rhiannon52@gmail.com
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-out" data-aos-duration={600}>
                                    <div className="service5-2-box-single contact5-box-single">
                                        <div >
                                            <div className="service5-2-box-img">
                                                <img src="/assets/img/icons/contact5-icon3.svg" alt="" />
                                            </div>
                                        </div>
                                        <div >
                                            <div className="service5-2-box-hadding contact5-box-hadding hading5">
                                                <h4 ><Link href="#" className="font-f-7 weight-700 line-height-20 font-20">Phone Number</Link></h4>
                                                <div className="space12" />
                                                <Link href="/tel:921-993-8903" className="font-f-8">921-993-8903
                                                </Link>
                                                <Link href="/tel:234-234-2342" className="font-f-8"> 234-234-2342</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
