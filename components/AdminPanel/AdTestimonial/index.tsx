"use client"

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import {  } from 'react-toastify';
import TestimonialPanelPost from '../TestimonialPanelPost';

const ToastContainer = dynamic(() => import("react-toastify").then((mod) => mod.ToastContainer), { ssr: false });
const toast = dynamic(() => import("react-toastify").then((mod) => mod.toast), { ssr: false });

const AdTestimonial = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    company_Name: '',
    position: '',
    img_Logo: null,
    review: '', // Added for the testimonial review
  });

  const fileInputRef = useRef(null);

  const handleChange = (e: { target: { name: any; value: any; type: any; files: any; }; }) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], // Assuming only one file is uploaded
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Create a FormData object to handle both text and file data
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('company_Name', formData.company_Name);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('review', formData.review);
    if (formData.img_Logo) {
      formDataToSend.append('img_Logo', formData.img_Logo);
    }

    try {
      // Call API (you need to replace this with your actual API endpoint)
      const response = await fetch('https://cipl.aimantra.info/website/testimonialsAdd/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
      
        
        // Reset the form after success
        setFormData({
          name: '',
          company_Name: '',
          position: '',
          img_Logo: null,
          review: '',
        });
      } else {
        throw new Error('Error submitting testimonial');
      }
    } catch (error) {
     
    }
  };

  return (
    <>
      <div className="flex justify-start items-center h-auto py-12 pb-20 bg-[#f0f5fa] px-56">
        <ToastContainer />
        <div className="bg-white p-8 rounded-lg shadow-lg w-full py-10 px-14">
          <h1 className="text-3xl font-bold mb-4">
            Submit a New{" "}
            <span className="mainred"> Testimonial</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Fill out the form below to submit a new testimonial.
          </p>

          <form method="POST" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className="block font-medium text-gray-700 mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
                  placeholder="Enter client's name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
                  placeholder="Enter the company name"
                  name="company_Name"
                  value={formData.company_Name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                Client's Position
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
                placeholder="Enter the client's position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                Testimonial Review
              </label>
              <textarea
                className="block w-full border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
                placeholder="Write your testimonial here"
                name="review"
                value={formData.review}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                Company Logo
              </label>
              <input
                type="file"
                className="block cursor-pointer w-full text-gray-500 border border-gray-300 rounded-lg p-2 px-3 outline-none focus:ring-2 focus:ring-[#333333]"
                name="img_Logo"
                ref={fileInputRef}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-14 text-center">
              <button
                type="submit"
                className="w-full bg-[#990000] text-white p-2 py-3 text-lg rounded-lg hover:bg-[#b80202] transition-colors"
              >
                Submit Testimonial
              </button>
            </div>
          </form>
        </div>
      </div>
      <TestimonialPanelPost/>
    </>
  );
};

export default AdTestimonial;
