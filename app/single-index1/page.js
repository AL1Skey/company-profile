import AboutUs from "@/components/homepages/home1/AboutUs"
import Apartment from "@/components/homepages/home1/Apartment"
import Brand from "@/components/homepages/home1/Brand"
import Cities from "@/components/homepages/home1/Cities"
import Hero from "@/components/homepages/home1/Hero"
import Litings from "@/components/homepages/home1/Litings"
import Porperties from "@/components/homepages/home1/Porperties"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Works from "@/components/homepages/home1/Works"
import Layout from "@/components/layout/Layout"
export default function Page() {

    return (
        <>
            <Layout headerStyle={6} footerStyle={1}>
                <Hero />
                <Brand />
                <Cities />
                <Litings />
                <Works />
                <Porperties />
                <Apartment />
                <Litings />
                <Apartment />
                <AboutUs />
                <Subscribe />
            </Layout>
        </>
    )
}