import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";

export default function MPyqs() {
  const Pdfs = [
    {
      id: 1,
      title: "M-2 paper 1",
      file: "/pdfs/M-2/M2-Pyqs-1.pdf",
    },
    {
      id: 2,
      title: "M-2 paper 2",
      file: "/pdfs/M-2/M2-Pyqs-2.pdf",
    },
    
    
  ];

  return (
    <div className="container">
      <h1 className="title">M-2  PYQS</h1>

      <div className="pdf-grid">
        {Pdfs.map((pdf) => (
          <div className="pdf-card" key={pdf.id}>
            <h3>{pdf.title}</h3>

            <a
              href={pdf.file}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
               Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
