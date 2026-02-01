import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function DBMSnotes() {

  const Pdfs = [
    {
      id: 1,
      title: "DBMS Unit 5 Notes",
      file: "/pdfs/DBMS/DBMS-Unit-5.pdf",
    },
    {
      id: 2,
      title: "DBMS Unit 4 Notes",
      file: "/pdfs/DBMS/DBMS-Unit-4.pdf",
    },
    {
      id: 3,
      title: "DBMS Unit 3 Notes",
      file: "/pdfs/DBMS/DBMS-Unit-3.pdf",
    },
  ];

  return (
    <div className="container">  
      <h1 className="title"> Database Management System</h1>

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
