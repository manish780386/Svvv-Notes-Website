import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function OSnotes() {

  const Pdfs = [
    {
      id: 1,
      title: "OS unit-1-2 Notes",
      file: "/pdfs/OS/OS-Unit-1-2.pdf",
    },
    {
      id: 2,
        title: "OS unit-3.1 Notes",
        file: "/pdfs/OS/OS-Unit-3.1.pdf",
    },
    {
      id: 3,
        title: "OS unit-3.2 Notes",
        file: "/pdfs/OS/OS-Unit-3.2.pdf",
    },
    {
      id: 4,
        title: "OS unit-4 Notes",   
        file: "/pdfs/OS/OS-Unit-4.pdf",
    },
    {   
        id: 5,
        title: "OS unit-5 Notes",
        file: "/pdfs/OS/OS-Unit-5.pdf",
    },
    {
        id: 6,
        title: "OS Unit 3 Notes",
        file: "/pdfs/OS/OS-Unit-3.pdf",
    }
  ];

  return (
    <div className="container">  
      <h1 className="title"> Operating System</h1>

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
