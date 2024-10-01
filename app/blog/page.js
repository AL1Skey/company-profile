
import BlogPost from '@/components/blog/BlogPost'
import Layout from '@/components/layout/Layout'

export default function Blog() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our blog">
                <div className="blog-page-boxs-all sp2">
                    <div className="container">
                        <div className="row">
                            <BlogPost showItem={6} style={1} showPagination />
                        </div>

                    </div>
                </div>


            </Layout>
        </>
    )
}