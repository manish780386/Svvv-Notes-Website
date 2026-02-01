import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function NSCnotes() {

  const Pdfs = [
    {
      id: 1,
      title: "NSC All Notes",
      file: "/pdfs/NSC/NSC1to5.pdf",
    }
    
  ];

  return (
    <div className="container">  
      <h1 className="title">Network Security and Cryptography</h1>

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
