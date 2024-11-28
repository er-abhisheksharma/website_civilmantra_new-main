import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const Projectpdf = () => {
  const [excelDataDPR, setExcelDataDPR] = useState<any[]>([]); // Data for DPR projects
  const [excelDataCompleted, setExcelDataCompleted] = useState<any[]>([]); // Data for Completed projects
  const [activeSection, setActiveSection] = useState<string>('Completed'); // Default section is 'Completed'

  // Function to fetch and process Excel data
  const fetchExcelFile = async (filePath: string, setData: React.Dispatch<React.SetStateAction<any[]>>) => {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    setData(jsonData);
  };

  // Load data for both files on component mount
  useEffect(() => {
    fetchExcelFile('/Excel/Ongoing Project List CIPL.xlsx', setExcelDataDPR); // DPR Projects
    fetchExcelFile('/Excel/Ongoing Project List CIPL.xlsx', setExcelDataCompleted); // Completed Projects
  }, []);

  // Render table based on the active section
  const renderTable = (data: any[]) => (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr>
            {data.length > 0 &&
              data[0].map((header: string, index: number) => (
                <th key={index} className="border-[2px] bg-gray-300 border-black px-4 py-2 text-md sm:text-base">
                  {header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell: string, cellIndex: number) => (
                <td key={cellIndex} className="border border-black px-4 py-2 text-sm sm:text-base">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="px-4 md:px-16 max-w-[88vw] mx-auto mb-10">
      {/* Buttons for sections */}
      <div className="mb-4 space-x-4">
      {/* <button
          onClick={() => setActiveSection('Completed')}
          className={`px-4 py-2 rounded transition duration-300 ease-in-out ${
            activeSection === 'Completed' ? 'bg-blue-700 scale-110 -translate-y-1 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'
          }`}
        >
          Completed Projects
        </button> */}
        <button
          onClick={() => setActiveSection('DPR')}
          className={`px-4 py-2 mt-10 rounded transition duration-300 ease-in-out ${
            activeSection === 'DPR' ? 'bg-blue-700 scale-110 -translate-y-1 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'
          }`}
        >
          DPR Projects
        </button>
        
      </div>

      {/* Displaying the data */}
      <div className="output">
        {activeSection === 'DPR' && (
          <>
            <h2 className="text-5xl font-bold my-10 text-center">DPR Projects</h2>
            {renderTable(excelDataDPR)}
          </>
        )}
        {activeSection === 'Completed' && (
          <>
            <h2 className="text-5xl font-bold my-10 text-center">Completed Projects</h2>
            {renderTable(excelDataCompleted)}
          </>
        )}
      </div>
    </div>
  );
};

export default Projectpdf;
