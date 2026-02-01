import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function  CSSnotes() {

  const Pdfs = [
    
      {
      id: 1,
      title: "CSS Unit-1",
      file: "/pdfs/CSS/CSS-Unit-1.pdf",
    },
     {
      id: 2,
      title: "CSS Unit-2",
      file: "/pdfs/CSS/CSS-Unit-2.pdf",
    },
     {
      id: 3,
      title: "CSS Unit-2.1",
      file: "/pdfs/CSS/CSS-Unit-2.1.pdf",
    },
     {
      id: 4,
      title: "CSS Unit-3",
      file: "/pdfs/CSS/CSS-Unit-3.pdf",
    },
     {
      id: 5,
      title: "CSS Unit-4",
      file: "/pdfs/CSS/CSS-Unit-4.pdf",
    },
     {
      id: 6,
      title: "CSS Unit-5",
      file: "/pdfs/CSS/CSS-Unit-5pdf",
    },
      
    
    
  ];

  return (
    <div className="container">  
      <h1 className="title"> Cocept of System Security</h1>

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
