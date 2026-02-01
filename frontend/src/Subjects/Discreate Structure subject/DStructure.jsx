import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";





export default function DStructure() {

  const Pdfs = [
    {
      id: 1,
      title: "DS-Unit-1 Notes",  
      file: "/pdfs/DS/DS-Unit-1.pdf",
    },
    {
      id: 2,
      title: "DS-Unit-2 Notes",  
      file: "/pdfs/DS/DS-Unit-2.pdf",
    },
    {
      id: 3,
      title: "DS-Unit-4 Notes",  
      file: "/pdfs/DS/DS-Unit-4.pdf",
    },
    {
      id: 4,
      title: "DS-Unit-5 Notes",  
      file: "/pdfs/DS/DS-Unit-5.pdf",
    },

  ];

  return (
    <div className="container">  
      <h1 className="title">Discreate Structure</h1>

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
