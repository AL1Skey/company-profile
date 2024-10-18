"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Footer1() {
  const [data, setData] = useState({});
  const [aboutUs, setAboutUs] = useState({});
  useEffect(() => {
    console.log("FOOTER");
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/public/footer`,
        { cache: "no-store" }
      ).then((res) => res.json());
      const aboutUs = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/public/about-us`,
        { cache: "no-store" }
      ).then((res) => res.json());
      console.log(response, "FOOTER");
      setData(response[0]);
      setAboutUs(aboutUs.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <footer className="footer-area padding-top font-f-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 android tw-py-10">
              <div className="single-footer mr50 hadding2">
                <div className="site-logo home1-site-logo">
                  <Link href="#">
                    <img
                      src="/assets/img/logo/header-logo1.svg"
                      className="android:tw-size-20"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="space30" />
                <p className="font-f-2 font-16 line-height-26">
                  {aboutUs?.description}
                </p>
              </div>
            </div>
            {/* <div className="col-lg col-sm-6 hadding2">
                            <div className="single-footer">
                                <h3 className="font-f-1 font-20 weight-700 line-height-20">
                                    Discover
                                </h3>
                                <div>
                                    <ul className="font-f-2 font-16 line-height-26 pera-c-1">
                                        <li><Link href="#">Learn</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="#">Pricing</Link></li>
                                        <li><Link href="#">Template Maker</Link></li>
                                        <li><Link href="#">Mockup Generator</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
            <div
              className="android:tw-hidden lg:tw-grid col-lg hadding2"
              style={{ transform: "translateX(8rem)" }}
            >
              <div className="single-footer">
                <h3 className="font-f-2 font-20 weight-700 line-height-20">
                  Company
                </h3>
                <div>
                  <ul className="font-f-2 font-16 line-height-26 pera-c-1">
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/karir">Karir</Link>
                    </li>
                    <li>
                      <Link href="/alumni">Alumni</Link>
                    </li>
                    <li>
                      <Link href="/blog">Our Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 hadding2">
              <div className="single-footer-contact">
                <h3 className="font-f-2 font-20 weight-700 line-height-20">
                  Get in touch
                </h3>
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <Link href="#">
                        <i className="tw-text-blue-700 fas fa-map-marker-alt" />
                      </Link>
                    </div>
                  </div>
                  <div className="foonter-contact-p">
                    <Link href={data?.addressUrl ? data?.addressUrl : "#"}>
                      {data?.address}
                    </Link>
                  </div>
                </div>
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <img src="/assets/img/icons/footer-icon-1.svg" alt="" className="tw-translate-x-[7px] tw-translate-y-[7px]" />
                    </div>
                  </div>
                  <div className="foonter-contact-p">
                    <Link href={`https://wa.me/${data?.phone}`}>
                      {data?.phone}
                    </Link>
                  </div>
                </div>
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <img src="/assets/img/icons/footer-icon-2.svg" alt="" className="tw-translate-x-[7px] tw-translate-y-[7px]" />
                    </div>
                  </div>
                  <div className="foonter-contact-p">
                    <Link href={`/mailto:${data?.email}`}>{data?.email}</Link>
                  </div>
                </div>
                <div className="col-lg-6 text-right">
                  <div
                    className="social social1 comon-footer-icons foonter-contact-1"
                    style={{ width: "11rem" }}
                  >
                    <ul>
                      <li>
                        <Link href={`${data?.twitter ? data?.twitter : "#"}`}>
                          <i className="fa-brands fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href={`${data?.facebook ? data?.facebook : "#"}`}>
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${data?.instagram ? data?.instagram : "#"}`}
                        >
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center copyright2">
            <div className="col-lg-6">
              <p className="font-16 weight-400 font-f-2 line-height-16 pera-c-1">
                {/* © {new Date().getFullYear()} Avigo - NextJS template by AliThemes. All Rights Reserved. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
