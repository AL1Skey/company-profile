import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div>
        <div className="mobile-header mobile-header-4 d-block d-lg-none ">
          <div className="container-fluid">
            <div className="col-12">
              <div className="mobile-header-elements">
                <div className="mobile-logo">
                  <Link href="/">
                    <img
                      src="/assets/img/logo/header-logo1.svg"
                      className="tw-w-14 tw-h-14"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mobile-sidebar d-block d-lg-none ${
            isMobileMenu ? "mobile-menu-active" : ""
          }`}
        >
          <div className="menu-close" onClick={handleMobileMenu}>
            <i className="fa-solid fa-xmark" />
          </div>
          <div className="mobile-nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
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
            <li className="hash-has-sub">
              <Link href="/contact" className="hash-nav">
                Contact Us
              </Link>
            </li>
            <li className="d-lg-none d-block hash-has-sub">
              <Link href="#" className="hash-nav">
                Sign In / Sign up{" "}
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
