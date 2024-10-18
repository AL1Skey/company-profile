import Link from "next/link";

export default function BlogCard1({ item }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="blog-page-boxs blog-page-boxs1">
          <div className="blog-boxs-img">
            <img src={`${item.img}`} alt="" className="tw-w-full tw-h-52" />
          </div>
          <div className="space24" />
          <div className="hadding2 blog-page-hadding">
            <Link href="#" className="font-f-2">
              <i className="fa-solid fa-user" /> {item.author}
            </Link>
            <div className="space24" />
            <h4 className="font-f-2 font-20 line--height-24 weight-500">
              {" "}
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </h4>
            <div className="space16" />
            <p className="font-f-2 weight-400 line-height-28 font-16">
              ${item?.content}
            </p>
          </div>
          <div className="space24" />
          <div className="all-read-btn">
            <Link
              href={`/blog/${item.id}`}
              className="font-f-2 line--height-16 font-16 weight-700"
            >
              Read more <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
