import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function DLCDnotes() {

  const Pdfs = [
    {
      id: 1,
      title: "DLCD-Unit-1",  
      file: "/pdfs/DLCD/DLCD-Unit-1.pdf",
    },
     {
      id: 2,
      title: "DLCD-Unit-2",  
      file: "/pdfs/DLCD/DLCD-Unit-2.pdf",
    },
     {
      id: 3,
      title: "DLCD-Unit-3",  
      file: "/pdfs/DLCD/DLCD-Unit-3.pdf",
    },
     {
      id: 4,
      title: "DLCD-Unit-4",  
      file: "/pdfs/DLCD/DLCD-Unit-4.pdf",
    },
     

    
  ];

  return (
    <div className="container">  
      <h1 className="title">DLCD</h1>

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
