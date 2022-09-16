import React from "react";

export default function About() {
  return (
    <div className="render container mt-5 px-4 py-5">
      <div className="overlay-projects">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className=" overlay col-10 col-sm-8 col-lg-6">
            <div className="container d-flex">
              <img className="ava" src="https://i.imgur.com/yNWUq46.png"></img>
              <div className="header fw-bold d-flex align-items-center "></div>
              <ul className="container render-list">
                <li className="list-group-item list-group-flush">
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                  ></img>
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                  ></img>
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                  ></img>
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                  ></img>
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                  ></img>
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"
                  ></img>
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                  ></img>
                  <img
                    className="built-with-tags"
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                  ></img>
                  <img className="built-with-tags" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
                  <img className="built-with-tags" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"></img>
                  <img className="built-with-tags" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"></img>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-text  col-lg-6 py-3">
            <h2 className="d-flex justify-co display-10 lh-1 mb-3 fw-bold align-items-center">
              About me
            </h2>

            <p className="render-text-secondary display-8 lh-3 mb-1">
              Hi there! I'm Brandt, a Junior Software Developer located in
              Missoula, Montana. Upon receiving my degree in Biochemistry in
              2022, I decided to pursue my passion of software development by
              completing an intensive, and comprehensive full-stack program with
              the University of Arizona.
              <br></br>
              <br></br>
              I'm passionate about solving real-world problems, and curiousity
              has shown me that the sky is the limit with software development.
              With my background in academic research, biochemical techniques,
              and leadership qualities from collegiate sports, I could not be
              more excited to combine this with the field of Software
              Development.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p className="fw-bold">Contact me below! 😁</p>
            </p>
          </div>
        </div>
        <div className="footer">
          ✉️ brandtdavidson@gmail.com | 📱 520-820-7890
        </div>
      </div>
    </div>
  );
}
