import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";

export default function CSSpyqs() {
  const Pdfs = [
    {
      id: 1,
      title: "CSS paper-1",
      file: "/pdfs/CSS/CSS-pyqs-1.pdf",
    },
    {
      id: 2,
      title: "CSS paper-2",
      file: "/pdfs/CSS/CSS-pyqs-2.pdf",
    },
    
  ];

  return (
    <div className="container">
      <h1 className="title"> CSS PYQS</h1>

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
