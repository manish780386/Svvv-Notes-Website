import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";

export default function DBMSpyqs() {
  const Pdfs = [
    {
      id: 1,
      title: "DBMS paper-1",
      file: "/pdfs/DBMS/DBMS-pyqs-1.pdf",
    },
    {
      id: 2,
      title: "DBMS paper-2",
      file: "/pdfs/DBMS/DBMS-pyqs-2.pdf",
    },
    {
      id: 3,
      title: "DBMS paper-3",
      file: "/pdfs/DBMS/DBMS-pyqs-3.pdf",
    },
    
    
  ];

  return (
    <div className="container">
      <h1 className="title"> DBMS PYQS</h1>

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
