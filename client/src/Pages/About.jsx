import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Aboutus from "../image/About.jpg"; 
import AboutCompany from "../image/AboutCompany.png";
import CRM from "../image/CRM.png";
import CyberSecurity from "../image/cyberSecurity.png";
import Bussiness from "../image/bussinessIntelligence.png";
import Adoption from "../image/Adoption.png";
import Process from "../image/process.png";
import Quality from "../image/quality.jpg";
import Excellence from "../image/excellence.jpg";
import Focus from "../image/focus.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [aboutdata, setAboutdata] = useState([]);
  const [aboutdata1, setAboutdata1] = useState([]);
  const whatwedo = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: Process,
      description: "Custom Application Development",
      description1: "Process Builder",
      description2: "Workflows",
      description3: "",
    },
    {
      id: 2,
      title: "Business Intelligence & Advanced Analytics",
      href: Bussiness,
      description: "Data Analytics",
      description1: "Visualization",
      description2: "Advanced Analytics",
      description3: "Data Science",
    },
    {
      id: 3,
      title: "Customer Relationship Management",
      href: CRM,
      description: "End to End Implementationt",
      description1: "Consulting",
      description2: "Migration & Integration",
      description3: "",
    },
    {
      id: 4,
      title: "Adoption of new technologies",
      href: Adoption,
      description: "Cloud computing",
      description1: "Artificial intelligence & Big data analytics",
      description2: "Internet of Things (IoT)",
      description3: "",
    },
    {
      id: 5,
      title: "Cyber security",
      href: CyberSecurity,
      description: "User access security",
      description1: "Network Security",
      description2: "Cloud Security",
      description3: "Security Operations",
    },

    // More posts...
  ];

  const whatwedo1 = [
    {
      id: 1,
      title: "Quality",
      href: Quality,
      description: "We are paranoid about quality",
      description1:
        "We have QMS systems to govern product and process related quality for the deliverables",
      description2: "We are ardent followers of the Kaizen Approach",
      description3: "",
    },
    {
      id: 2,
      title: "Excellence",
      href: Excellence,
      description: "Partner Excellence Working with the domain leaders",
      description1:
        "Resource Excellence Defined L&D framework with governance module",
      description2:
        "Delivery Excellence Certified team adopting to agile delivery models",
      description3:
        "Customer Excellence – Separate team of engagement managers to drive customer satisfaction",
    },
    {
      id: 3,
      title: "Focus",
      href:Focus,
      description:
        "We have a focused approach for different regions, industry and product portfolios",
      description1:
        "We curate the strategy basis the intrinsic and extrinsic governing factors, henceforth deriving a curated solution for the customer",
      description2: "",
      description3: "",
    },

    // More posts...
  ];
  const forskelton = [
    {
      id: 1,
      title: "Quality",
      href: "https://quadrafort.com/_next/static/media/quality.fdfba554.jpg",
      description: "We are paranoid about quality",
      description1:
        "We have QMS systems to govern product and process related quality for the deliverables",
      description2: "We are ardent followers of the Kaizen Approach",
      description3: "",
    },
    {
      id: 2,
      title: "Excellence",
      href: "https://quadrafort.com/_next/static/media/excellence.2938e550.jpg",
      description: "Partner Excellence Working with the domain leaders",
      description1:
        "Resource Excellence Defined L&D framework with governance module",
      description2:
        "Delivery Excellence Certified team adopting to agile delivery models",
      description3:
        "Customer Excellence – Separate team of engagement managers to drive customer satisfaction",
    },
    {
      id: 3,
      title: "Focus",
      href: "https://quadrafort.com/_next/static/media/focus.f6b503d8.jpg",
      description:
        "We have a focused approach for different regions, industry and product portfolios",
      description1:
        "We curate the strategy basis the intrinsic and extrinsic governing factors, henceforth deriving a curated solution for the customer",
      description2: "",
      description3: "",
    },

    // More posts...
  ];
  useEffect(() => {
    Aos.init({ duration: 1000 });
    
  }, [Aos.refresh()]);

  useEffect(() => {
    setTimeout(function () {
      setAboutdata(whatwedo);
      setAboutdata1(whatwedo1);
    }, 1000);
   
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <div className="">
        <img
          className="w-full"
          src={Aboutus}
        ></img>
      </div>

      {/* 1st section  */}
      <div className="bg-white py-28 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="card-body bg-white">
              <figure>
                <img
                  src={AboutCompany}
                  alt="company"
                />
              </figure>
            </div>
            <div>
              <p className=" text-2xl mb-4 text-black">About the Company</p>
              <p>
                We at Quadrafort assist our customers in enhancing Productivity
                and Business Efficiency achieved by our best in class Cloud
                Solutions and innovative 360° consulting services. We are an
                end-to-end technology services provider assisted by a team of
                certified technologists aided by domain experience & proficiency
                garnered across industries and business verticals. We endeavour
                to empower organisations in their digital transformation journey
                with least disruption with emphasis on proper adoption, to aid
                in achieving complex business goals. We work across industries
                encompassing manufacturing, retail, hi-tech, government, IT,
                NBFC, Fintech and Media.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* // 2nd section */}

      <div className="bg-sky-700 py-28 sm:py-32  ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" max-w-2xl lg:text-start">
            <p className="-mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do?
            </p>
          </div>
          {aboutdata.length !== 0 ? (
            <div  className=" mx-auto mt-10 grid max-w-2xl sm:grid-cols-2 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {aboutdata.map((post) => (
                <div
                data-aos="fade-up-right"
                  key={post.id}
                  className="card max-w-md max-h-96  bg-white  shadow-xl"
                >
                  <figure className="w-28 ml-7 mt-6">
                    <img src={post.href} alt="logo" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mb-2">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.description1}</p>
                    <p>{post.description2}</p>
                    <p>{post.description3}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=" mx-auto mt-10 grid max-w-2xl sm:grid-cols-2 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {whatwedo.map((post) => (
                <div
                  key={post.id}
                  className="card max-w-md max-h-96  bg-white  shadow-xl"
                >
                  <figure className="w-28 ml-7 mt-6">
                    <Skeleton circle={true} width={100} height={100} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mb-2">
                      <Skeleton />
                    </h2>
                    <p>
                      <Skeleton />
                    </p>
                    <p>
                      <Skeleton />
                    </p>
                    <p>
                      <Skeleton />
                    </p>
                    <p>
                      <Skeleton />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3rd Section */}
      <div className="bg-white py-28 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" max-w-2xl lg:text-start">
            <p className="-mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quadrafort Excellence Framework
            </p>
          </div>
          {aboutdata1.length !== 0 ? (
            <div className="mx-auto mt-2 grid max-w-2xl sm:grid-cols-2 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {aboutdata1.map((post) => (
                <div
                  data-aos="fade-down-left"
                  key={post.id}
                  className="card card-compact max-w-sm bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={post.href} alt="logo" />
                  </figure>
                  <div className="card-body bg-white">
                    <h2 className="card-title font-bold text-xl text-blue-600">
                      {post.title}
                    </h2>
                    <li className="  text-black ">{post.description}</li>
                    <li className=" font-normal text-black ">
                      {post.description1}
                    </li>
                    <li className=" text-black ">{post.description2}</li>
                    {/* <li className=" text-black ">
                    {post.description3}
                  </li> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-2 grid max-w-2xl sm:grid-cols-2 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {forskelton.map((post) => (
                <div
                  key={post.id}
                  className="card card-compact max-w-sm  shadow-xl"
                >
                  <figure>
                    <Skeleton width={300} height={200} />
                  </figure>
                  <div className="card-body bg-white">
                    <h2 className=" font-bold text-xl text-blue-600">
                      <Skeleton />
                    </h2>
                    <p className="  text-black ">
                      <Skeleton />
                    </p>
                    <p className=" font-normal text-black ">
                      <Skeleton />
                    </p>
                    <p className=" text-black ">
                      <Skeleton />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
