
import About from "@/components/homepages/home5/About"
import Contact from "@/components/homepages/home5/Contact"
import Hero from "@/components/homepages/home5/Hero"
import Pricing from "@/components/homepages/home5/Pricing"
import Process from "@/components/homepages/home5/Process"
import Service from "@/components/homepages/home5/Service"
import Service2 from "@/components/homepages/home5/Service2"
import Subscribe from "@/components/homepages/home5/Subscribe"
import Testimonial from "@/components/homepages/home5/Testimonial"
import Layout from "@/components/layout/Layout"
export default function Page() {

    return (
        <>
            <Layout headerStyle={10} footerStyle={1}>
                <Hero />
                <About />
                <Service />
                <Process />
                <Service2 />
                <Pricing />
                <Testimonial />
                <Contact />
                <Subscribe />
            </Layout>
        </>
    )
}