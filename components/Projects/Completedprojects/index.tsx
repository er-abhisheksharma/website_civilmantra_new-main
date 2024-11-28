import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const CompletedProjectpdf = () => {
  const [excelData, setExcelData] = useState<any[]>([]); 
  const [isViewing, setIsViewing] = useState(false); 

  
  const fetchExcelFile = async () => {
    const response = await fetch('/Excel/Ongoing Project List CIPL.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    setExcelData(jsonData); 
  };

  
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
          Completed Projects
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

export default CompletedProjectpdf;
