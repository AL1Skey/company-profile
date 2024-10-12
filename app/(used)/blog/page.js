import BlogPost from './components/BlogPost'
import Layout from '@/components/layout/Layout'
import data from './blogTemplate.json'
export default function Blog() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our blog">
                <div className="blog-page-boxs-all sp2">
                    <div className="container">
                        <div className="row">
                            <BlogPost showItem={6} style={1} showPagination data={data} />
                        </div>

                    </div>
                </div>


            </Layout>
        </>
    )
}