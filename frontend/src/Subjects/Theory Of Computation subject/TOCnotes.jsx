import React from "react";
import "./TOCnotes.css";

export default function TOCnotes() {
  const Pdfs = [
    {
      id: 1,
      title: "TOC Unit 5 Notes",
      file: "/pdfs/TOC/TOC-Unit-5.pdf",
    },
    {
      id: 2,
      title: "TOC Unit 4 Notes",
      file: "/pdfs/TOC/TOC-Unit-4.pdf",
    },
    {
      id: 3,
      title: "TOC Unit 3 Notes",
      file: "/pdfs/TOC/TOC-Unit-3.pdf",
    },
    {

      id: 4,
      title: "TOC Unit 2 Notes",
      file: "/pdfs/TOC/TOC-Unit-2.pdf",
    },
    {
      id: 5,
      title: "TOC Unit 1 Notes",
      file: "/pdfs/TOC/TOC-Unit-1.pdf",

    },
    {
      id: 6,
      title: "TOC Unit 2 Notes",
      file: "/pdfs/TOC/TOC-Unit-2modify.pdf",
    }
  ];

  return (
    <div className="container">
      <h1 className="title"> TOC Notes</h1>

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
