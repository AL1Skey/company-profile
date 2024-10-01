import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className="pages-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-hadding hadding2">
                                <h1 className="font-f-2 weight-700 font-40 font-lg-60 line-height-48 line-height-lg-65" data-aos="fade-right" data-aos-duration={900}>
                                    <span className="after">{breadcrumbTitle}</span>
                                </h1>
                                <p className="font-f-2 font-16 weight-500 line-height-16"><Link href="#">Home</Link> <span><i className="fa-solid fa-angle-right" /></span> {breadcrumbTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
