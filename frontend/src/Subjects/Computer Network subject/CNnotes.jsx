import React from "react";
import "../Theory Of Computation subject/TOCnotes.css";






export default function CNnotes() {

  const Pdfs = [
    {
      id: 1,
      title: "Computer Network unit-1 Notes",  
      file: "/pdfs/CN/CN-Unit-1.pdf",
    },
    {
      id: 2,
      title: "Computer Network unit-2 Notes",  
      file: "/pdfs/CN/CN-Unit-2.pdf",
    },
    {
      id: 3,
      title: "Computer Network unit-3 Notes",   
        file: "/pdfs/CN/CN-Unit-3.pdf",
    },
    {
      id: 4,
      title: "Computer Network unit-4 Notes",   
        file: "/pdfs/CN/CN-Unit-4.pdf",
    },
    {
      id: 5,    

        title: "Computer Network unit-5 Notes",
        file: "/pdfs/CN/CN-Unit-5.pdf",
    }

    
  ];

  return (
    <div className="container">  
      <h1 className="title"> Computer Network</h1>

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
