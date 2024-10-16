"use client"
import React from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Page() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/footer`, { cache: 'no-store' }).then(res => res.json())
            setData(data[0])
        }
        fetchData()
    }, [])
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">

                <div>
                    <div className="contact-all-page sp2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto text-center">
                                    <div className="hadding2">
                                        <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                                            Request a <span className="after">Call Back</span>
                                        </h1>
                                    </div>
                                    <div className="space60" />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-6 text-center">
                                    <div className="contact-page-box">
                                        <div className="contact-box-img">
                                            <img src="/assets/img/icons/contact-img-icon3.svg" alt="" />
                                        </div>
                                        <div className="space20" />
                                        <div className="contact-hadding">
                                            <h4><Link href={data?.addressUrl ? data?.addressUrl : "#"} className="font-f-2 font-24 line-height-24 weight-700">{data?.address}</Link></h4>
                                            <div className="space20" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 text-center">
                                    <div className="contact-page-box">
                                        <div className="contact-box-img">
                                            <img src="/assets/img/icons/contact-img-icon2.svg" alt="" />
                                        </div>
                                        <div className="space20" />
                                        <div className="contact-hadding">
                                            <h4><Link href="#" className="font-f-2 font-24 line-height-24 weight-700">Phone Number</Link></h4>
                                            <div className="space20" />
                                            <Link href={`https://wa.me/${data?.phone}`} className="font-f-2 font-20 weight-400 line-height-30">{data?.phone}</Link> <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 text-center">
                                    <div className="contact-page-box">
                                        <div className="contact-box-img">
                                            <img src="/assets/img/icons/contact-img-icon1.svg" alt="" />
                                        </div>
                                        <div className="space20" />
                                        <div className="contact-hadding">
                                            <h4><Link href="" className="font-f-2 font-24 line-height-24 weight-700">Email</Link></h4>
                                            <div className="space20" />
                                            <Link href={`/mailto:${data?.email}`} className="font-f-2 font-20 weight-400 line-height-30">{data?.email}
                                            </Link>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="space70" />
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contact-from-all">
                                        <div className="hadding2">
                                            <h4 className="font-f-2 weight-700 font-24 font-lg-24 line-height-30 line-height-lg-45">Send us a Message</h4>
                                            <div className="space24" />
                                            <p className="font-16 line-height-18 font-f-2 weight-400">As a fellow small business owner, we know the fulfillment that an a comes from running your own business contact to Financy.</p>
                                        </div>
                                        <div className="space10" />
                                        <form action="#">
                                            <div className="contact-page-form">
                                                <div className="forom-input">
                                                    <input type="text" placeholder="First Name" />
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                                <div className="forom-input">
                                                    <input type="email" placeholder="Email" />
                                                    <input type="text" placeholder="Subject" />
                                                </div>
                                                <div className="forom-input">
                                                    <input type="number" placeholder="Phone" />
                                                    <select className="wide">
                                                        <option value>Service</option>
                                                        <option value>Service 2</option>
                                                        <option value>Service 3</option>
                                                        <option value>Service 4</option>
                                                    </select>
                                                </div>
                                                <div className="forom-input">
                                                    <textarea cols={30} rows={2} placeholder="Your Message" />
                                                </div>
                                                <div className="space10" />
                                                <div className="form-check form-check-inline input-chack-box">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" />
                                                    <label className="form-check-label font-f-2" htmlFor="inlineCheckbox2">I agree to the <span>terms</span>  <span>conditions</span> and <span>privacy policy</span></label>
                                                </div>
                                                <div className="contact-form-btn">
                                                    <button>Send Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-img">
                                        <img src="/assets/img/image/contact-page-img.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="space70" />
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196064.65881483705!2d88.93201515862421!3d24.061083775097945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1673751720794!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div> */}
                        </div>
                    </div>
                    {/*=====SUBSRIBE START=======*/}
                    
                </div>

            </Layout>
        </>
    )
}