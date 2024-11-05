
import Blog from "@/components/homepages/home3/Blog"
import Brand from "@/components/homepages/home3/Brand"
import Business from "@/components/homepages/home3/Business"
import Faq from "@/components/homepages/home3/Faq"
import Hero from "@/components/homepages/home3/Hero"
import Works from "@/components/homepages/home3/Works"
import Layout from "@/components/layout/Layout"
export default function Page() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Hero />
                <Brand />
                <Business />
                <Works />
                <Blog />
                <Faq />
            </Layout>
        </>
    )
}