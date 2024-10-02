
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Page() {

    return (
        <>
        {/* <div className="!hover:bg-black">
        <img src="/assets/img/image/about-team2.png" alt="" />
        </div> */}
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Karir">
                <div>
                    {/*=====team-page-start=======*/}
                    <div className="team-page-all sp2">
                        <div className="container">
                            <div className="row">
                                {/* Loop Start */}
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, i) => (
                                <div key={i} className="col-lg-3 col-md-6">
                                    <div className="about-slider-single about-slider-single2 text-center">
                                        <div className="hover:size-96">
                                            <img src="/assets/img/image/about-team2.png" alt="" />
                                            {/* <div className="about-team-hover">
                                                <div className="about-hover-icons">
                                                    <ul>
                                                        <li>
                                                            <Link href="#"><i className="fa-brands fa-twitter" /></Link>
                                                            <Link href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                            <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                                            <Link href="#"><i className="fa-brands fa-github" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="hadding2">
                                            <div className="space24" />
                                            <h4 className="font-f-2 font-20 line--height-20 weight-500"> <Link href="#">Topo Industry Specialist</Link></h4>
                                            <div className="space12" />
                                            <p className="font-f-2 weight-400 line-height-28 font-16">CEO  Founder</p>
                                            <p className="font-f-2 weight-400 line-height-28 font-16">CEO  Founder</p>
                                            <p className="font-f-2 weight-400 line-height-28 font-16">CEO  Founder</p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                {/* Loop End */}
                                
                            </div>
                        </div>
                    </div>
                    {/*=====team-page-end=======*/}
                    
                </div>

            </Layout>
        </>
    )
}