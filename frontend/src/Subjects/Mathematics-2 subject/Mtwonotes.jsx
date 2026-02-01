import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function Mtwonotes() {

  const Pdfs = [
    {
      id: 1,
      title: "M-2 all units notes",
      file: "/pdfs/M-2/M-2.pdf",
    }
    
  ];

  return (
    <div className="container">  
      <h1 className="title">Mathematic-2</h1>

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
