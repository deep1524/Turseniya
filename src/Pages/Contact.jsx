import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="">
        <img src="https://qfnextseoimgs.netlify.app/images/CONTACT-US.jpg"></img>
      </div>




      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 sm:py-4 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className=" rounded-2xl -mt-20 mb-5">
              <figure >
                <img 
                className=" mt-10 "
                  src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="
                  alt="contact us"
                />
              </figure>
            </div>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 rounded-2xl -mt-20 mb-5">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Contact US
                </h2>
              </div>

              <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="p-4 block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="text"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Your Name
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="current-password"
                        required
                        className="p-4 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="text"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Your Number
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="number"
                        name="number"
                        type="number"
                        autoComplete="current-password"
                        required
                        className=" p-4 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div >
                    <button
                      type="submit"
                      className="mt-10 mb-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <Footer />
    </div>
  );
};

export default Contact;
