import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function SEPMnotes() {

  const Pdfs = [
    {
      id: 1,
      title: "SEPM unit-1 Notes",
      file: "/pdfs/SEPM/SEPM-Unit-1.pdf",
    },
    {
      id: 2,
        title: "SEPM unit-1.1 Notes",
        file: "/pdfs/SEPM/SEPM-Unit-1.1.pdf",
    },
    {
      id: 3,
        title: "SEPM unit-1.2 Notes",
        file: "/pdfs/SEPM/SEPM-Unit-1.2.pdf",
    },
    {
      id: 4,
        title: "SEPM unit-3 Notes",
        file: "/pdfs/SEPM/SEPM-Unit-3.pdf",
    },
    {
      id: 5,
        title: "SEPM unit-3.1 Notes",
        file: "/pdfs/SEPM/SEPM-Unit-3.1.pdf",
    },
    {
      id: 6,
        title: "SEPM unit-4 Notes",
        file: "/pdfs/SEPM/SEPM-Unit-4.pdf",
    }
    
  ];

  return (
    <div className="container">  
      <h1 className="title"> SEPM</h1>

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
