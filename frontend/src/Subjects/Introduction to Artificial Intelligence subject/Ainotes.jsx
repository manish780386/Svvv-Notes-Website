import React from "react";
import '../Theory Of Computation subject/TOCnotes.css';






export default function Ainotes() {

  const Pdfs = [
    {
      id: 1,
      title: "AI Unit 3 Notes",
      file: "/pdfs/Ai/ai-unit-3.pdf",
    },
    {
      id: 2,
      title: "AI Unit 4 Notes",
      file: "/pdfs/Ai/ai-unit-4.pdf",
    },
    {
      id: 3,
      title: "AI Unit 5 Notes",
      file: "/pdfs/Ai/ai-unit-5.pdf",
    },
    {
      id: 4,
      title: "AI Unit 1 Notes",
      file: "/pdfs/Ai/ai-unit-1.pdf",
    } 
  ];

  return (
    <div className="container">
      <h1 className="title">Introduction to Artificial Intelligence</h1>

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
