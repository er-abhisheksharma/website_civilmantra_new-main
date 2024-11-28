'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { API, MEDIA_URL } from '../../../src/axios';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  const callicon = MEDIA_URL + '/Contact/Call.svg';
  const emailicon = MEDIA_URL + '/Contact/email.svg';
  const locationicon = MEDIA_URL + '/Contact/location.svg';

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
    form_type: "contact us"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await API.post(`/website/contactform/`, formData);

      if (response.status === 200) {
        toast.success("Thank you! We'll get back to you soon.", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });

        setFormData({
          name: '',
          mobile: '',
          email: '',
          message: '',
          form_type: 'contact us'
        });
      } else {
        toast.error("Failed to send. Check your connection and retry.", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Error! Unable to send. Try again later.", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>


      {/* Contact Form Section */}
      <div className="relative mt-20 lg:mr-24">
        <div className=" max-sm:hidden absolute  top-0 left-0 w-full h-full opacity-60"></div>
        <div className="max-sm:flex-col flex max-[1024px]:justify-around justify-center items-start max-[1024px]:gap-10 gap-28 max-sm:gap-6 max-w-[88vw] mx-auto  max-sm:py-0 max-sm:mt-0 pb-20  relative z-10 ">
          <ToastContainer
            newestOnTop
            draggable
            rtl={false}
            theme="light"
            autoClose={1500}
            position="top-center"
            pauseOnFocusLoss={false}
          />
          <div className=" w-1/2 max-sm:w-full max-sm:px-4 p-8 px-12 rounded-lg shadow-[0_0_45px_1px_rgba(0,0,0,0.1)]  bg-white bg-opacity-100">
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label className="block darkgray text-sm font-semibold mb-2">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#F7F8FA] font-normal mt-1 p-3 border rounded-lg"
                  />
                </label>
              </div>
              <div>
                <label className="block darkgray text-sm font-semibold mb-2">
                  Mobile
                  <input
                    type="text"
                    name="mobile"
                    required
                    placeholder="Contact No."
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-[#F7F8FA] font-normal mt-1 p-3 border rounded-lg"
                  />
                </label>
              </div>
              <div>
                <label className="block darkgray text-sm font-semibold mb-2">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Contact Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F7F8FA] font-normal mt-1 p-3 border rounded-lg"
                  />
                </label>
              </div>
              <div>
                <label className="block darkgray text-sm font-semibold mb-2">
                  Message
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#F7F8FA] max-[1024px]:min-h-[13vw] min-h-[15vh] resize-y outline-none font-normal mt-1 p-3 border rounded-lg"
                  />
                </label>
              </div>
              <div className='flex justify-center'>
                <button
                  type="submit"
                  onClick={handleClick}
                  className={`bg-primary hover:bg-brown text-white py-3 px-12 rounded-lg transition-transform duration-300 ${isClicked ? 'scale-105 shadow-lg' : ''}`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="max-md:mb-10 w-1/2 max-sm:w-full bg-white px-8 max-sm:px-2  rounded-lg  py-7  shadow-[0_0_45px_1px_rgba(0,0,0,0.1)] ">
            <h2 className=" blue text-4xl font-semibold mb-4 text-primary">Connect with us</h2>
            <p className=" darkgray mb-6 lg:w-[26vw]">For any kind of query, contact us with the details below.</p>
            <div className="max-[1024px]:w-full max-sm:w-full w-[20vw] my-6 flex gap-2 items-start">
              <img src={callicon} alt="Call" className='w-12' />
              <div>
                <p className="darkgray block blue text-lg cursor-pointer">+91 8120444777</p>
              </div>
            </div>
            <div className="max-[1024px]:w-full max-sm:w-full w-[20vw] mb-8 flex gap-2 items-start">
              <img src={emailicon} alt="Email" className='w-12' />
              <div>
                <p className="darkgray block blue text-lg cursor-pointer">services@civilmantra.com, hr@civilmantra.com</p>
              </div>
            </div>
            <div className="max-[1024px]:w-full max-sm:w-full w-[20vw] mb-8 flex gap-2 items-start">
              <img src={locationicon} alt="Location" className='w-12' />
              <div>
                <p className="darkgray block blue text-lg cursor-pointer">3rd Floor, Tower 3A, Dlf Corporate Greens, Sector 74A, Gurugram- 122004, India.</p>
              </div>
            </div>
            <div id="Mapdiv" className=" flex justify-center items-center">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.589839642906!2d77.0280247!3d28.3945449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1971e56c7b4d%3A0x213d8b8e1e7f2296!2sDLF%20Corporate%20Greens%2C%20Sector%2074A%2C%20Gurugram%2C%20Haryana%20122004%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="mx-auto max-w-[82vw] rounded-lg"
              ></iframe>
            </div>


          </div>
        </div>


      </div>
    </>
  );
};

export default ContactForm;
