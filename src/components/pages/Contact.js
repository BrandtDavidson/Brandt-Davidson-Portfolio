import React from "react";

export default function Contact() {
  return (
    <div className="render container resume col-xxl-8 px-4 py-5">
      <h1 className="fw-bold d-flex justify-content-center">Resume</h1>
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
