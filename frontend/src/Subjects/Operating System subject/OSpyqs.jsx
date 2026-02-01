import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";

export default function OSpyqs() {
  const Pdfs = [
    {
      id: 1,
      title: "OS paper 1",
      file: "/pdfs/OS/OS-pys-1.pdf",
    },
    {
      id: 2,
      title: "OS paper 2",
      file: "/pdfs/OS/OS-pys-2.pdf",
    },
    {
      id: 3,
      title: "OS paper 3",
      file: "/pdfs/OS/OS-pys-3.pdf",
    },
    {

      id: 4,
      title: "OS paper 4",
      file: "/pdfs/OS/OS-pys-4.pdf",
    },
    
  ];

  return (
    <div className="container">
      <h1 className="title">Operating PYQS</h1>

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
