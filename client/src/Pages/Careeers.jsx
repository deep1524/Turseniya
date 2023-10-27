import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Careeers = () => {
  const [careersdata, setcareersdata] = useState([]);
  const data = [
    {
      id: 1,
      title: "Fun-Focussed",
      href: "https://quadrafort.com/_next/static/media/career_card1.b32304a9.png",
      alt: "Fun-Focussed",
    },
    {
      id: 2,
      title: "Collaboration",
      href: "https://quadrafort.com/_next/static/media/career_Card2.a5641884.png",
      alt: "Collaboration",
    },
    {
      id: 3,
      title: "Hardcore",
      href: "https://quadrafort.com/_next/static/media/career_Card3.6b70864c.png",
      alt: "Hardcore",
    },
    {
      id: 4,
      title: "Integrity",
      href: "https://quadrafort.com/_next/static/media/career_Card4.c1c131c1.png",
      alt: "Integrity",
    },
    {
      id: 5,
      title: "Freedom",
      href: "https://quadrafort.com/_next/static/media/career_Card5.c6c7d652.png",
      alt: "Freedom",
    },

    // More posts...
  ];

  useEffect(()=>{
Aos.init({duration:2000});
  },[Aos.refresh()])
  useEffect(() => {
    setTimeout(function () {
      setcareersdata(data);
    }, 1000);
  }, []);
  return (
    <div className="w-full mt-8">
      <Navbar />
      <div className="w-full">
        <img
          className="w-full h-full object-fill"
          src="https://qfnextseoimgs.netlify.app/images/careerBanner.jpg"
          alt="careers"
        ></img>
      </div>

      {/* 3rd Section */}
      <div className="bg-white py-28 sm:py-32  ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="-mt-20 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </p>
            <p className="mt-5 text-lg text-gray-500 ">
              If you are an aggressive go-getter with a mind bend to excel in
              your domain, Quadrafort is the place for you. Join the team to
              make a mark for yourself and enjoy one of the best rewarding
              environments for professional excellence.
            </p>
          </div>

          {careersdata.length !== 0 ? (
            <div className="mx-auto mt-2 grid max-w-3xl  sm:grid-cols-2  gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {careersdata.map((post) => (
                <div key={post.id} data-aos="fade-up-left" className="card card-compact max-w-sm  shadow-xl bg-white">
                  <div className="card-body ">
                    <h2 className="card-title font-bold text-3xl text-black  pt-10">
                      {post.title}
                    </h2>
                    <p className="text-base ">
                      We make things easier and we make our work place fun
                      filled where our team enjoys working together
                    </p>
                    <figure className="w-24 h-24 mx-auto">
                      <img src={post.href} alt={post.alt} />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {data.map((post) => (
                <div key={post.id} className="card card-compact max-w-sm  shadow-xl bg-white">
                  <div className="card-body">
                    <h2 className=" font-bold text-3xl text-black  pt-10">
                      <Skeleton />
                    </h2>
                    <p className="text-base">
                      <Skeleton />
                    </p>
                    <figure className="w-24 h-24 mx-auto">
                      <Skeleton circle={true} width={100} height={100} />
                    </figure>
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

export default Careeers;
