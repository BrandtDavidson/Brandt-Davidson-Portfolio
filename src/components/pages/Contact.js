import React from "react";

export default function Contact() {
  return (
    <div className="render container resume col-xxl-8 px-4 py-5">
      <a className="d-flex justify-content-center btn btn-sm btn-warning" href='https://www.dropbox.com/s/b096xsj1i9i9e5o/ResumeBrandt.docx.pdf?dl=0'>Download Resume PDF</a>
      <h1 className="fw-bold d-flex justify-content-center"></h1>
    <div className="container-fluid overlay-resume ">
        <iframe
          className="container-fluid resume-frame"
          height="auto"
          width="auto"
          title="res"
          src="https://docs.google.com/document/d/e/2PACX-1vRpgzVA05buI1qz0BtBfM2LF14V7swUxiK2657MEhnI3nKrkAoaeX4NH4vECtvjhw/pub?embedded=true"
        ></iframe>
        </div>
    </div>
  );
}
