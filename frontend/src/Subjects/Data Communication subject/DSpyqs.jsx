import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";

export default function DSpyqs() {
  const Pdfs = [
    {
      id: 1,
      title: "DC paper-1",
      file: "/pdfs/DCnotes/DC-pyqs-1.pdf",
    },
    
    
    
  ];

  return (
    <div className="container">
      <h1 className="title">Data communication  PYQS</h1>

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
