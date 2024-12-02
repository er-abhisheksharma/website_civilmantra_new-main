"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import arrowup from "../../../public/arrowup.png";
import { BASE_URL } from "@/axios";
import axios from "axios";

const Dprpanel = () => {
  const [jsonData, setjsonData] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setjsonData(event.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!jsonData) {
      setUploadStatus("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", jsonData);

    try {
      const response = await axios.post(`${BASE_URL}/website/projectsAddBulk/`, jsonData);

      
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Error uploading file.");
    }
  };

  return (
    <div className="flex flex-col mt-28 items-center justify-center gap-10 py-10">
      <div className="relative flex flex-col items-center">
        <label className="group p-6 px-10 rounded-lg border-[1px] border-[#2f2f2f] hover:bg-[#990000] transition-all hover:scale-110 hover:translate-x-2 hover:-translate-y-2 duration-300 cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex items-center justify-center">
            <p className="text-lg font-medium text-gray-700 group-hover:text-white px-1">
              Upload DPR Excel Sheet
            </p>
            <Image
              src={arrowup}
              alt="arrow"
              className="w-4 transition-all group-hover:invert group-hover:scale-150 rotate-[135deg] -mt-2"
            />
          </div>
        </label>
        {jsonData && (
          <p className="mt-2 text-sm text-gray-600">
            Selected file: {jsonData.name}
          </p>
        )}
      </div>

      <button
        onClick={handleFileUpload}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Submit
      </button>

      {uploadStatus && (
        <p className="mt-4 text-center text-gray-700">{uploadStatus}</p>
      )}
    </div>
  );
};

export default Dprpanel;
