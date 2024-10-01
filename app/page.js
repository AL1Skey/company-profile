import AboutUs from "@/components/homepages/home1/AboutUs"
import Apartment from "@/components/homepages/home1/Apartment"
import Apartment2 from "@/components/homepages/home1/Apartment2"
import Brand from "@/components/homepages/home1/Brand"
import Cities from "@/components/homepages/home1/Cities"
import Hero from "@/components/homepages/home1/Hero"
import Litings from "@/components/homepages/home1/Litings"
import Litings2 from "@/components/homepages/home1/Litings2"
import Porperties from "@/components/homepages/home1/Porperties"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Works from "@/components/homepages/home1/Works"
import Layout from "@/components/layout/Layout"
export default function Page() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero />
                <Apartment />
                {/* <Brand /> */}
                <Cities />
                <Litings />
                {/* <Works /> */}
                {/* <Porperties /> */}
                {/* <Litings2 /> */}
                {/* <Apartment2 /> */}
                {/* <AboutUs /> */}
                {/* <Subscribe /> */}
            </Layout>
        </>
    )
}