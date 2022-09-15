import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Container from "react-bootstrap/Container";
import Header from "../Header";
import Link from "react-scroll/modules/components/Link";
import Projects from "./Projects";

function ProjectsPreview({ currentPage, handlePageChange}) {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const pageChangeProj = () => {
      <Link to='#projects'></Link>
  }


  return (
      <div className="port-preview container mt-5 col-xxl-8 px-4 py-5">
      <div className="container px-0 py-5" id="custom-cards">
          <div className="d-flex justify-content-around">
        <h1 className="d-flex fw-bold">Check out some of my recent projects below! 
        </h1>
        </div>
        
        <hr class='featurette-divider'></hr>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <img
                style={{ maxHeight: "200px " }}
                src="https://i.imgur.com/WqMbGiS.png"
              ></img>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-0 mt-3 mb-4 display-7 lh-1">
                  Market Moment
                  <>
                    <Button variant="secondary" onClick={() => setLgShow(true)}>
                      Launch Application
                    </Button>

                    <Modal
                      fullscreen={true}
                      size="lg"
                      centered
                      onHide={handleClose}
                      animation={true}
                      show={lgShow}
                    >
                      <Modal.Header>
                        <Modal.Title>Market Moment</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <iframe
                          className="container-fluid "
                          height="100%"
                          width="100%"
                          title="mm"
                          src="https://brandtdavidson.github.io/interactive-stock/"
                        ></iframe>
                      </Modal.Body>
                      <Button
                        variant="secondary"
                        onClick={() => setLgShow(false)}
                      >
                        Return
                      </Button>
                    </Modal>
                  </>
                </h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <img
                style={{ maxHeight: "200px " }}
                src="https://i.imgur.com/jRergFW.png"
              ></img>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-0 mt-3 mb-4 display-7 lh-1">
                    Social Network API
                  {/* <>
                    <Button variant="primary" onClick={() => setLgShow(true)}>
                      Launch Application
                    </Button>

                    <Modal
                    fullscreen='true'
                      size="lg"
                      centered
                      onHide={handleClose}
                      animation={true}
                      show={lgShow}
                    >
                      <Modal.Header>
                        <Modal.Title>Social Network API</Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                        
                        <iframe className="container "
                          height="800"
                          
                          title="mm"
                          src="https://brandtdavidson.github.io/interactive-stock/"
                        ></iframe>
                        
                      </Modal.Body>
                        <Button variant="secondary" onClick={() => setLgShow(false)}>
                          Close
                        </Button>
                      
                    </Modal>
                  </> */}
                </h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <img
                style={{ minHeight: "200px" }}
                src="https://i.imgur.com/BZKqLkE.png"
              ></img>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-0 mt-3 mb-4 display-7 lh-1">
                    ZR-1-Stop Shops 
                  {/* <>
                    <Button variant="primary" onClick={() => setLgShow(true)}>
                      Launch Application
                    </Button>

                    <Modal
                      size="lg"
                      centered
                      onHide={handleClose}
                      animation={true}
                      show={lgShow}
                    >
                      <Modal.Header>
                        <Modal.Title>ZR-1-Stop Shops</Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                        
                        <iframe className="container "
                          height="800"
                          
                          title="mm"
                          src="https://whispering-basin-00391.herokuapp.com/"
                        ></iframe>
                        
                      </Modal.Body>
                        <Button variant="secondary" onClick={() => setLgShow(false)}>
                          Close
                        </Button>
                    </Modal>
                  </> */}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPreview;