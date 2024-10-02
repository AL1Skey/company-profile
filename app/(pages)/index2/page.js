
import Brands from "@/components/homepages/home2/Brands"
import Features from "@/components/homepages/home2/Features"
import Hero from "@/components/homepages/home2/Hero"
import Mobile from "@/components/homepages/home2/Mobile"
import Needs from "@/components/homepages/home2/Needs"
import Subsribe from "@/components/homepages/home2/Subsribe"
import Task from "@/components/homepages/home2/Task"
import TeamWork from "@/components/homepages/home2/TeamWork"
import Tools from "@/components/homepages/home2/Tools"
import Trusted from "@/components/homepages/home2/Trusted"
import Layout from "@/components/layout/Layout"
export default function Page() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Hero />
                <Brands />
                <Needs />
                <Task />
                <TeamWork />
                <Features />
                <Tools />
                <Trusted />
                <Mobile />
                <Subsribe />
            </Layout>
        </>
    )
}