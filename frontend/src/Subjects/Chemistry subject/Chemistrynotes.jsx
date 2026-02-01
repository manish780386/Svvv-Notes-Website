import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function Chemistrynotes() {

  const Pdfs = [
    {
      
    }
    
  ];

  return (
    <div className="container">  
      <h1 className="title">Chemistry</h1>

      <div className="pdf-grid">
        {Pdfs.map((pdf) => (
          <div className="pdf-card" key={pdf.id}>
            <h3>{pdf.title}</h3>

            <a href={pdf.file} download className="download-btn">
               Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
