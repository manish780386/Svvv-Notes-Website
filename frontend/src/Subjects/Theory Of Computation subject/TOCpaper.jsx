import React from "react";
import "./TOCnotes.css";

export default function TOCpaper() {
  const Pdfs = [
    {
      id: 1,
      title: "TOC paper 1",
      file: "/pdfs/TOC/TOC-paper-1.pdf",
    },
    {
      id: 2,
      title: "TOC paper 2",
      file: "/pdfs/TOC/TOC-paper-2.pdf",
    },
    {
      id: 3,
      title: "TOC paper 3",
      file: "/pdfs/TOC/TOC-paper-3.pdf",
    },
    {

      id: 4,
      title: "TOC paper 4",
      file: "/pdfs/TOC/TOC-paper-4.pdf",
    },
    {
      id: 5,
      title: "TOC paper 5",
      file: "/pdfs/TOC/TOC-paper-5.pdf",

    },
    {
      id: 6,
      title: "TOC Unit 2 Notes",
      file: "/pdfs/TOC/TOC-Unit-2modify.pdf",
    }
  ];

  return (
    <div className="container">
      <h1 className="title"> TOC PYQS</h1>

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
