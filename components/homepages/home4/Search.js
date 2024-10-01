
import Link from 'next/link'

export default function Search() {
    return (
        <>
            <section className="position-relative zindex-2" data-aos="zoom-in-up" data-aos-duration={800}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-10 col-12">
                            <div className="home4-header-form-bg">
                                <div className="row">
                                    <div className="col-md-10 m-auto">
                                        <div className="domain-search-wrap gray-light-bg">
                                            <h4 className="text-center hadding4 font-lg-40 font-30 font-f-4 line-height-lg-48 line-height-38 weight-800">
                                                Looking For Domain Name?
                                            </h4>
                                            <div className="space10" />
                                            <form action="#" method="GET" className="domain-search-form my-4">
                                                <input type="text" name="domain" id="domain" className="form-control" placeholder="yourdomainname.com" />
                                                <div className="select-group">
                                                    <select name="domainType" className="form-control">
                                                        <option value="com">.com</option>
                                                        <option value="net">.net</option>
                                                        <option value="io">.io</option>
                                                        <option value="info">.info</option>
                                                        <option value="store">.store</option>
                                                        <option value="store">.org</option>
                                                    </select>
                                                    <button type="submit" className="btn btn-primary font-f-4 font-16 weight-700">
                                                        <i className="fas fa-search pe-1" /> Search
                                                    </button>
                                                </div>
                                            </form>
                                            <div className="domain-list-wrap text-center">
                                                <ul className="list-inline domain-search-list">
                                                    <li className="list-inline-item bg-white border rounded">
                                                        <Link href="#">
                                                            <p className="com font-f-4 font-16 line-height-16 weight-700">
                                                                .com
                                                            </p>
                                                            <span className="font-f-4 font-16 line-height-16 weight-400 net-price">$8.99</span>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item bg-white border rounded">
                                                        <Link href="#">
                                                            <p className="net font-f-4 font-16 line-height-16 weight-700">
                                                                .online
                                                            </p>
                                                            <span className="font-f-4 font-16 line-height-16 weight-400 net-price">$0.99</span>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item bg-white border rounded">
                                                        <Link href="#">
                                                            <p className="com font-f-4 font-16 line-height-16 weight-700">
                                                                .Net
                                                            </p>
                                                            <span className="font-f-4 font-16 line-height-16 weight-400 net-price">$4.99</span>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item bg-white border rounded">
                                                        <Link href="#">
                                                            <p className="net font-f-4 font-16 line-height-16 weight-700">
                                                                .org
                                                            </p>
                                                            <span className="font-f-4 font-16 line-height-16 weight-400 net-price">$2.99</span>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item bg-white border rounded">
                                                        <Link href="#">
                                                            <p className="com font-f-4 font-16 line-height-16 weight-700">
                                                                .Store
                                                            </p>
                                                            <span className="font-f-4 font-16 line-height-16 weight-400 net-price">$0.99</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
