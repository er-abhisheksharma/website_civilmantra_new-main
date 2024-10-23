import React from 'react';

const Inovate = () => {
  return (
    <>
      <div className="pdf-container ">
        {/* Displaying PDF with iframe */}
        <iframe
          src="/pdf/Corporate Presentation- CivilMantra Infracon Pvt l_240525_153920 (1).pdf" // Place the actual path to your PDF file here
          width="100%"
          height="800px"
          title="PDF Viewer"
        />
      </div>
    </>
  );
};

export default Inovate;


