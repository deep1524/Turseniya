import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// important
const About = () => {
  const [aboutdata, setAboutdata] = useState([])
  const data = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 4,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 5,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },

    // More posts...
  ];

  useEffect(() => {
    setTimeout(function () {
      setAboutdata(data);
      
    }, 1000);
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <div className="">
        <img className='w-full' src="https://qfnextseoimgs.netlify.app/images/aboutusbg.jpg"></img>
      </div>

      {/* 1st section  */}
      <div className="bg-white py-28 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="card-body bg-white">
              <figure>
                <img
                  src="https://quadrafort.com/_next/static/media/team-smile.25a95be6.png"
                  alt="Shoes"
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

      <div className="bg-sky-700 py-28 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" max-w-2xl lg:text-start">
            <p className="-mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do?
            </p>
          </div>
          {aboutdata.length!==0? <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {aboutdata.map((post) => (
              <div className="card max-w-md max-h-96  bg-white  shadow-xl">
                <figure className="w-28 ml-7 mt-6">
                  <img
                    src="https://quadrafort.com/_next/static/media/process.ae722d02.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title mb-2">Business Process Engines</h2>
                  <p>Process Audit</p>
                  <p>KPI Setup</p>
                  <p>Process Engineering</p>
                  <p>Data Science</p>
                </div>
              </div>
            ))}
          </div> : <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((post) => (
              <div className="card max-w-md max-h-96  bg-white  shadow-xl">
                <figure className="w-28 ml-7 mt-6">
                 <Skeleton circle={true} width={100} height={100}/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title mb-2"><Skeleton/></h2>
                  <p><Skeleton/></p>
                  <p><Skeleton/></p>
                  <p><Skeleton/></p>
                  <p><Skeleton/></p>
                </div>
              </div>
            ))}
          </div>}
         
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
          {aboutdata.length!==0 ?<div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {aboutdata.map((post) => (
              <div className="card card-compact max-w-sm bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://quadrafort.com/_next/static/media/quality.fdfba554.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body bg-white">
                  <h2 className="card-title font-bold text-xl text-blue-600">
                    Quality
                  </h2>
                  <li className="  text-black ">
                    We are paranoid about quality
                  </li>
                  <li className=" font-normal text-black ">
                    We have QMS systems to govern product and process related
                    quality for the deliverables
                  </li>
                  <li className=" text-black ">
                    We are ardent followers of the Kaizen Approach
                  </li>
                </div>
              </div>
            ))}
          </div> :<div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((post) => (
              <div className="card card-compact max-w-sm  shadow-xl">
                <figure>
                <Skeleton width={300} height={200}/>
                </figure>
                <div className="card-body bg-white">
                  <h2 className=" font-bold text-xl text-blue-600">
                  <Skeleton/>
                  </h2>
                  <p className="  text-black ">
                    <Skeleton/>
                  </p>
                  <p className=" font-normal text-black ">
                  <Skeleton/>
                  </p>
                  <p className=" text-black ">
                  <Skeleton/>
                  </p>
                </div>
              </div>
            ))}
          </div>}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
