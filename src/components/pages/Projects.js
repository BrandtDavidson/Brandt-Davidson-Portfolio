import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Container from "react-bootstrap/Container";

function Projects() {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="render container col-xxl-8 px-4 py-5">
      <div className="container px-0 py-5" id="custom-cards">
        <div className="overlay-projects">
        <h2 className="pb-2 fw-bold d-flex justify-content-center">Projects</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div className="card-body">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <img
                  className="card-img"
                    style={{ maxHeight: "200px " }}
                    src="https://i.imgur.com/WqMbGiS.png"
                  ></img>
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <>
                        <Button
                          className="btn btn-success"
                          variant="secondary"
                          onClick={() => setLgShow(true)}
                        >
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
                    <h3 className="card-title pt-0 mt-3 mb-4 display-7 lh-1">
                      Market Moment
                    </h3>
                    <div className="card-text">
                      <p>Utilizing server-side APIs, this application allows users to search for a stock, equity, or ETF and be presented with same-day, montly, and yearly market data. In addition to the graphical market data, dynamic indicators and revelent news articles are also featured.</p>
                    </div>
                    <div className="card-footer mx-auto row">
                      <span className="text-white">Built with:  
                      </span>
                        <img className="built-with-tags" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card-body">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                  <img
                    style={{ maxHeight: "200px " }}
                    src="https://i.imgur.com/jRergFW.png"
                  ></img>
                  <div className="card-title d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <a className="btn btn-success" href='https://github.com/BrandtDavidson/Social-Network-API--MongoDB'>Open Repo</a>
                    <h3 className="mt-3 mb-4 display-7 lh-1">
                      Social Network API
                    </h3>
                    <div className="card-text">
                      <p>Using the highly versatile MongoDB for the backend database, this application was designed to function as a fast and reliable social network API.</p>
                    </div>
                    <div className="card-footer mx-auto row">
                      <span className="text-white">Built with:  
                      </span>
                        <img className="built-with-tags" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card-body">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img
                  style={{ minHeight: "200px" }}
                  src="https://i.imgur.com/BZKqLkE.png"
                ></img>
                <div className="card-title d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <div className="d-flex flex-row btn-open ">
                </div>
                <a className="btn btn-success " role="button" href='https://github.com/RPAPE3/Project-2'>Open Repo</a><a className="btn btn-outline-success" href='https://whispering-basin-00391.herokuapp.com/'>Launch Application</a>
                  <h3 className="mt-3 mb-4 display-7 lh-1">ZR-1-Stop Shops</h3>
                <div className="card-text">
                      <p>A unique and responsive application to search for Car Enthusiast Repair Shops. This application was created to serve the performance car community as a fast and easy solution to finding repair shops for high performance vehicles. Users can login, create and account, find shops by state, and post new shops.</p>
                    </div>
                    <div className="card-footer mx-auto row">
                      <span className="text-white">Built with:  
                      </span>
                        <img className="built-with-tags" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"></img>
                    </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col">
            <div className="card-body">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img
                  style={{ minHeight: "200px" }}
                  src="https://i.imgur.com/6PdQPb9.png"
                ></img>
                <div className="card-title d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a className="btn btn-success" href='https://github.com/BrandtDavidson/Professional-README-Generator'>Open Repo</a>
                  <h2 className="mt-3 mb-4 display-7 lh-1">README Generator</h2>
                  <div className="card-text">
                      <p>A unique and responsive application to search for Car Enthusiast Repair Shops. This application was created to serve the performance car community as a fast and easy solution to finding repair shops for high performance vehicles. Users can login, create and account, find shops by state, and post new shops.</p>
                    </div>
                    <div className="card-footer mx-auto row">
                      <span className="text-white">Built with:  
                      </span>
                        <img className="built-with-tags" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></img>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card-body">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img
                  style={{ minHeight: "200px" }}
                  src="https://i.imgur.com/U9gl4Ub.png"
                ></img>
                <div className="card-title d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a className="btn btn-success" href='https://github.com/BrandtDavidson/Text-Editor'>Open Repo</a>
                  <h2 className="mt-3 mb-4 display-7 lh-1">Installable Text-Editor</h2>
                  <div className="card-text">
                      <p>A user can create code snippets within a text editor either in online or offline mode by utilizing the PWA - Progress Web Application model.</p>
                    </div>
                    <div className="card-footer mx-auto row">
                      <span className="text-white">Built with:  
                      </span>
                        <img className="built-with-tags" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"></img>
                        
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card-body">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <img
                  style={{ minHeight: "200px" }}
                  src="https://i.imgur.com/cg065o9.png"
                ></img>
                <div className="card-title d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <a className="btn btn-success" href='https://github.com/BrandtDavidson/E-Commerce-Back-End'>Open Repo</a>
                  <h2 className="mt-3 mb-4 display-7 lh-1">E-Commerce Back-end</h2>
                  <div className="card-text">
                      <p>This application is an exercise in Object-Relational Mapping *ORM* by implementing api routes for an E-Commerce backend. Utilization of Express in combination with Node.js and MySQL allows for a user/retail owner to request and receive database information.</p>
                    </div>
                    <div className="card-footer mx-auto row">
                      <span className="text-white">Built with:  
                      </span>
                        <img className="built-with-tags" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"></img>
                        <img className="built-with-tags" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
                        
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
