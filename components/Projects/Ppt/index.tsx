import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const Projectpdf = () => {
  const [excelData, setExcelData] = useState<any[]>([]); // To store the parsed data from the Excel file
  const [isViewing, setIsViewing] = useState(false); // State to toggle view mode

  // Function to fetch and read the Excel file from the code
  const fetchExcelFile = async () => {
    const response = await fetch('/Excel/Corporate Presentation- CivilMantra Infracon Pvt l_240525_153920 (1)_removed (2) (2).xlsx'); // Provide the correct path to your Excel file
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    setExcelData(jsonData); // Store the parsed data in state
  };

  // Fetch the Excel file on component mount
  useEffect(() => {
    fetchExcelFile();
  }, []);

  return (
    <>
      <div className="px-4 md:px-16 max-w-[88vw] mx-auto mb-10">
        {/* Button to Open Excel Data in View Mode */}
        <button
          onClick={() => setIsViewing(true)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          View More Projects
        </button>

        {/* Displaying Excel Data in a Table */}
        {isViewing && (
          <div className="output">
            <button
              onClick={() => setIsViewing(false)}
              className="my-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Close
            </button>

            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    {excelData.length > 0 &&
                      excelData[0].map((header: string, index: number) => (
                        <th key={index} className="border px-4 py-2 text-sm sm:text-base">
                          {header}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {excelData.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell: string, cellIndex: number) => (
                        <td key={cellIndex} className="border px-4 py-2 text-sm sm:text-base">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsViewing(false)}
              className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Projectpdf;
