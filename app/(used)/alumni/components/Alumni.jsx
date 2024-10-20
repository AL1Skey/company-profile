"use client";
import Layout from "@/components/layout/Layout";
import AboutSlider1 from "@/components/slider/AboutSlider1";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import Pagination from "./Pagination";
import {handleSubmit} from "../action/action"
import Preloader from "@/components/elements/Preloader";


function getMaxAlumniLength(data) {

  let maxLength = 0; // Initialize maxLength to 0


  // Iterate through each angkatan


      data.forEach(alumniEntry => {

          // Check the length of the Alumni array

          const currentLength = alumniEntry.Alumni.length;

          // Update maxLength if currentLength is greater

          if (currentLength > maxLength) {

              maxLength = currentLength;

          }

  });


  return maxLength; // Return the maximum length found

}


/*
    
    return (
        <>


            {getPaginatedProducts.length === 0 && (
                <h3>No Products Found </h3>
            )}

            {getPaginatedProducts.map((item,index) => (
                <React.Fragment key={index}>
                    {!style && <BlogCard1 item={item} />}
                    {style === 1 && <BlogCard1 item={item} />}
                </React.Fragment>
            ))}

            {showPagination &&
                <Pagination
                    getPaginationGroup={
                        getPaginationGroup
                    }
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            }
        </>
    )
*/

export default function Alumni({showPagination=true }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const [jurusan,setJurusan] = useState([])
  const [loading,setLoading] = useState(false)
  /*Pagination*/
  let [currentPage, setCurrentPage] = useState(1);
  let showLimit = 6,
    paginationItem = 4;
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({}); 

  function handleChange(e) {
    console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/alumni?approval=true&reformat=1&offset=false`,{cache:'no-store'}).then(res => res.json())
      const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/jurusan`,{cache:'no-store'}).then(res => res.json())
      console.log(response2)
      setData(response)
      setJurusan(response2.splice(0,3))
      setLoading(false)
    }
    fetchData()
  },[])
  let [pagination, setPagination] = useState([]);
  let [limit, setLimit] = useState(showLimit);
  let [pages, setPages] = useState(Math.ceil(data?.length / limit));

  useEffect(() => {
    cratePagination();
  }, [limit, pages, data?.length]);

  const cratePagination = () => {
    // set pagination
    let arr = new Array(Math.ceil(data?.length / limit))
      .fill()
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(data?.length / limit));
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedProducts = data?.slice(startIndex, endIndex);

  let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  let end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  /* Ebd of Pagination*/
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
  if(loading){
    return <Preloader/>
  }
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Alumni">
        <div>
          {/*=====pages faq sce 1 end=======*/}
          {/*=====pages faq company start=======*/}
          <div className="faq-company sp2 page-bg">
            <div className="container">
              <div className="row">
                {/* Left */}
                <div className="col-lg-6">
                  <div className="hadding2">
                    {/* Title */}
                    <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                      Daftar <span className="after">Alumni</span>
                    </h1>
                    <div className="space24" />
                    {/* Description */}
                    {/* <p className="font-f-2 weight-400 line-height-p-30 font-18">
                                            To deal with our busy world we often compartmentalize, obstructing access to our Best Selves. For Optimal Performance, you need to integrate and align every part of you, including Values, Dreams, and Abilities. In the midst of busyness it’s hard to pause and see where we’re not optimizing.
                                        </p> */}
                    <div className="space20" />
                    {/* Alumni */}
                    <div className="accordion" id="accordionExample">
                      {getPaginatedProducts?.map((value, index1) => (
                        <React.Fragment key={index1}>
                          <div
                            key={index1}
                            className="accordion-item accordion-item2 font-f-2"
                          >
                            <h2
                              className="accordion-header active-header active-header2"
                              id={`heading1` + index1}
                              onClick={() => handleToggle(11 + index1)}
                            >
                              <button
                                className={
                                  isActive.key == 11 + index1
                                    ? "accordion-button accordion-button2"
                                    : "accordion-button accordion-button2 collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index1}`}
                                aria-expanded="true"
                                aria-controls={`collapse${index1}`}
                              >
                                Angkatan {value.angkatan} ({value.total})
                              </button>
                            </h2>
                            <div
                              id={`collapse${index1}`}
                              className={`${
                                isActive.key == 11 + index1
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              } tw-overflow-scroll`}
                              aria-labelledby={`heading1` + index1}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body accordion-body2">
                                <table className="tw-w-full tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden">
                                  <thead className="tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-text-white">
                                    {value.alumni.map((alumni, index2) => (
                                      <th
                                        className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-uppercase tw-tracking-wider"
                                        key={index2}
                                      >
                                        {alumni.Jurusan} ({alumni.total})
                                      </th>
                                    ))}
                                  </thead>
                                  <tbody className="tw-divide-y tw-divide-gray-200">
                                    {Array.from({length:getMaxAlumniLength(value.alumni)}).map((alumni, index2) => (
                                      <tr
                                        className={
                                          index2 % 2 === 0
                                            ? "tw-bg-gray-50"
                                            : "tw-bg-white"
                                        }
                                        key={index2}
                                      >
                                        {Array.from({length:value.alumni.length}).map((nama, index3) => (
                                            <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-font-medium">
                                              {value.alumni[index3].Alumni[index2]}
                                            </td>
                                      
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                      {/* <div className="accordion" id="accordionExample">
                                            <div className="accordion-item accordion-item2 font-f-2">
                                                <h2 className="accordion-header active-header active-header2" id="heading1" onClick={() => handleToggle(11)}>
                                                    <button className={isActive.key == 11 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                        Angkatan 19
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className={`${isActive.key == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} tw-overflow-scroll`} aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body accordion-body2">
                                                        <table>
                                                            <thead>
                                                                <th>Nama</th>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item accordion-item font-f-2">
                                                <h2 className="accordion-header accordion-header2" id="heading2" onClick={() => handleToggle(12)}>
                                                    <button className={isActive.key == 12 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        How to help you deal with any business ?
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className={isActive.key == 12 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body accordion-body2">
                                                        Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item accordion-item2 accordion-item2 font-f-2">
                                                <h2 className="accordion-header accordion-header2 accordion-header2" id="heading3" onClick={() => handleToggle(13)}>
                                                    <button className={isActive.key == 13 ? "accordion-button accordion-button2" : "accordion-button accordion-button2 collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        How your business grows and Changes ?
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className={isActive.key == 13 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body accordion-body2">
                                                        Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.
                                                    </div>
                                                </div>
                                            </div>
                                            </div> */}
                    </div>
                    {showPagination && (
                      <Pagination
                        getPaginationGroup={getPaginationGroup}
                        currentPage={currentPage}
                        pages={pages}
                        next={next}
                        prev={prev}
                        handleActive={handleActive}
                      />
                    )}
                  </div>
                </div>
                {/* Right */}
                <div className="col-lg-6 text-center ">
                  <div className="faq-massge-box-all android:tw-w-full android:tw-m-0 ">
                    <div className="massge-box-img">
                      <img
                        src="/assets/img/icons/faq-company-massge.svg"
                        alt=""
                      />
                    </div>
                    <div className="space10" />
                    <div className="hadding-massge">
                      <h4 className="font-f-2 font-20 weight-700 line-height-20 font-w">
                        Alumni
                      </h4>
                      <div className="space10" />
                    </div>
                    <form className="massge-inputs">
                      <div className="massge-single-inputs">
                        <input onChange={handleChange} type="text" placeholder="Nama*" name="name" />
                      </div>
                      <div className="massge-single-inputs">
                        <input
                        onChange={handleChange}
                          type="email"
                          placeholder="Email**"
                          name="email"
                        />
                      </div>
                      <div className="massge-single-inputs">
                        <input
                        onChange={handleChange}
                          type="text"
                          placeholder="No. HP**"
                          name="phone"
                        />
                      </div>
                      <div className="massge-single-inputs">
                        <input
                        onChange={handleChange}
                          type="text"
                          placeholder="Pekerjaan**"
                          name="jobs"
                        />
                      </div>
                      <div className="massge-single-inputs">
                        <input
                        onChange={handleChange}
                          type="text"
                          placeholder="Angkatan-ke**"
                          name="angkatan"
                        />
                      </div>
                      {/* {jurusan?.map((data)=>`${data.id} Jurusan`)} */}
                      <div className="massge-single-inputs">
                        <select name="jurusan" onChange={handleChange} id="">
                          <option>Jurusan**</option>
                          {jurusan?.map((data,index)=>(<option value={data.id}>{data.name}</option>))}
                        </select>
                      </div>
                      <button type="button" onClick={handleSubmit(formData)} className="massge-button">
                        <div className="massge-btn">
                       
                            Submit now
                          
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
