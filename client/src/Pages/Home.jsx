import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Home = () => {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const posts = [
    {
      id: 1,
      title: "Served 85+",
      href: "https://quadrafort.com/_next/static/media/writing.6d7f549b.png",
      description: "Enterprise customers Worldwide",
    },
    {
      id: 2,
      title: "Team Of 150+",
      href: "https://quadrafort.com/_next/static/media/team.1758dfb6.png",
      description: "Information Technology professionals",
    },
    {
      id: 3,
      title: "ISO 27001:2013, ISO 9001:2015",
      href: "https://quadrafort.com/_next/static/media/guarantee.f07c1902.png",
      description: "And PCI-DSS certified",
    },
    {
      id: 4,
      title: "CMMi Level 5",
      href: "https://quadrafort.com/_next/static/media/four-stars.f6f24ed1.png",
      description: "Compliance Certification",
    },
    {
      id: 5,
      title: "Great Place To Work",
      href: "https://quadrafort.com/_next/static/media/office-worker.e1a46af0.png",
      description: "Certified March 2023-March 2024",
    },

    // More posts...
  ];
  const data = [
    {
      id: 1,
      title: "SAP",
      href: "https://quadrafort.com/_next/static/media/sap.bb527bb8.png",
      description:
        "SAP solution is tailored to support your business needs in your industry and any geography for the digital age.",
    },
    {
      id: 2,
      title: "Salesforce",
      href: "https://quadrafort.com/_next/static/media/salesforce.ab4bbabd.png",
      description:
        "Get back to growth with the world’s #1 CRM, powered by Customer 360 to deliver seamless customer experiences across multiple business units and touchpoints.",
    },
    {
      id: 3,
      title: "Checkpoint",
      href: "https://quadrafort.com/_next/static/media/checkpoint.07972013.png",
      description:
        "Protect your enterprise network from the most sophisticated cyber-attacks with the highest caliber of security, and world’s highest performing security gateways.",
    },
    {
      id: 4,
      title: "Liferay",
      href: "https://quadrafort.com/_next/static/media/liferay-logo.91f93526.png",
      description:
        "The Complete Platform for Tailored Solutions Create custom digital experiences without sacrificing speed, flexibility, or cost.",
    },
    {
      id: 5,
      title: "AI",
      href: "https://quadrafort.com/_next/static/media/ai.99c155dc.png",
      description:
        "AI's ability to adeptly work with data analytics is the primary reason why artificial intelligence and big data are now seemingly inseparable.",
    },
    {
      id: 6,
      title: "Business Process Re-engineering",
      href: "https://quadrafort.com/_next/static/media/planning.18354fa0.png",
      description:
        "Involves the radical redesign of core business processes to achieve dramatic improvements in productivity, cycle times and quality.",
    },

    // More posts...
  ];

  useEffect(() => {
    setTimeout(function () {
      setdata1(data);
      setdata2(posts);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      {/* //crousal */}
      <div className="carousel w-full h-96 ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg"
            className="w-full object-cover "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/06/Website-Development-alt-1.webp"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-52514,msid-75080944/it-getty.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            className="w-full object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* crousal end */}

      {/* // 1st section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Practice Pillars
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>

          {/* // card */}
          {data1.length != 0 ? (
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {data1.map((post) => (
                <div className="card max-w-sm bg-base-100 shadow-xl">
                  <figure className="w-28 ml-7 mt-6">
                    <img
                      className="w-48 h-24 object-contain"
                      src={post.href}
                      alt="logo"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Learn More</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {data.map((post) => (
                <div className="card max-w-sm  shadow-xl">
                  <figure className="w-28 ml-7 mt-6">
                    <Skeleton circle={true} width={100} height={100} />
                  </figure>
                  <div className="card-body">
                    <h2>
                      <Skeleton />
                    </h2>
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

      {/* //2nd section */}
      <div className="bg-violet-500 py-28 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="-mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Profile At A Glance
            </p>
          </div>
          {data2.length !== 0 ? (
            <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {data2.map((post) => (
                <div className="card max-w-sm bg-base-100 shadow-xl">
                  
                  <div className="artboard artboard-horizontal  h-72 bg-red-400 rounded-lg">
                  <h1 className="pr-10  text-end">{post.id}</h1>
                    <figure className="w-28 ml-7 mt-6">
                      
                      <img
                        className="w-48 h-24 object-contain"
                        src={post.href}
                        alt="logo"
                      />
                    </figure>
                    <div className="card-body">
                      
                      <h2 className="card-title text-slate-600">{post.title}</h2>
                      <p className="text-slate-600">{post.description}</p>
                      <p className="text-slate-600">Learn More</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {" "}
              {posts.map((post) => (
                <div className="card max-w-sm bg-base-100 shadow-xl">
                  <div className="artboard artboard-horizontal  h-72 bg-white rounded-lg">
                    <figure className="w-28 ml-7 mt-6">
                      <Skeleton circle={true} width={100} height={100} />
                    </figure>
                    <div className="card-body">
                      <h2>
                        <Skeleton />
                      </h2>
                      <p>
                        <Skeleton />
                      </p>
                      <p>
                        <Skeleton />
                      </p>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          )}
        </div>
      </div>

      {/* 3rd Section */}

      <div className="bg-white py-28 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" max-w-2xl lg:text-start">
            <p className="-mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Differentiators
            </p>
          </div>

          {data2.length !== 0 ? (
            <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {data2.map((post) => (
                <div className="card card-compact max-w-sm bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://media.istockphoto.com/id/506910700/photo/i-can-do-it.jpg?s=612x612&w=0&k=20&c=4r5UQKSwjtVyLai0R0B38RJXX2SFr0TpK4JFSWnVCfQ="
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body bg-white">
                    <h2 className="card-title font-bold text-black">
                      Contemporary
                    </h2>
                    <p className="mt-10 mb-10 text-black">
                      Our team has expertise in a host of contemporary solutions
                      such as Salesforce, SAP,...
                    </p>
                    <p className="text-black">Learn More</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {data.map((post) => (
                <div className="card card-compact max-w-sm  shadow-xl">
                  <figure>
                    <Skeleton width={300} height={200} />
                  </figure>
                  <div className="card-body">
                    <h1 className=" font-bold text-black">
                      <Skeleton />
                    </h1>
                    <p className="mt-10 mb-10 text-black">
                      <Skeleton />
                    </p>
                    <p className="text-black">
                      <Skeleton />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 4rth section  */}

      <div className="bg-lime-500 py-28 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" max-w-2xl lg:text-start">
            <p className="-mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do?
            </p>
          </div>
          {data2.length !== 0 ? (
            <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {data2.map((post) => (
                <div className="card max-w-sm  bg-white  shadow-xl">
                  <figure className="w-28 ml-7 mt-6">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mb-8">Consulting</h2>
                    <p>Process Audit</p>
                    <p>KPI Setup</p>
                    <p>Process Engineering</p>
                    <p>Data Science</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 mt-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {data.map((post) => (
                <div className="card max-w-sm  bg-white  shadow-xl">
                  <figure className="w-28 ml-7 mt-6">
                    <Skeleton circle={true} width={100} height={100} />
                  </figure>
                  <div className="card-body">
                    <h2 className=" mb-8">
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

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 mt-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;