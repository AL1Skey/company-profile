
import Articles from "@/components/homepages/home4/Articles"
import Features from "@/components/homepages/home4/Features"
import Feedback from "@/components/homepages/home4/Feedback"
import Hero from "@/components/homepages/home4/Hero"
import Hostika from "@/components/homepages/home4/Hostika"
import Loveus from "@/components/homepages/home4/Loveus"
import Pricing from "@/components/homepages/home4/Pricing"
import Search from "@/components/homepages/home4/Search"
import Service from "@/components/homepages/home4/Service"
import Layout from "@/components/layout/Layout"
export default function Page() {

    return (
        <>
            <Layout headerStyle={9} footerStyle={1}>
                <Hero />
                <Search />
                <Features />
                <Hostika />
                <Pricing />
                <Service />
                <Feedback />
                <Articles />
                <Loveus />
            </Layout>
        </>
    )
}