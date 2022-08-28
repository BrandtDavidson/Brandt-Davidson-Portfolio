import React, { useState } from "react";
import NavTabs from "./Header";
// import Fade from "react-bootstrap/Fade";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  // const [open, setOpen] = useState(false);
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home /> ;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  // const renderFooter = () => {
  //   return <Footer />
  // }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='main-background' style={{ color: 'black', fontFamily: "San Francisco, Roboto, Helvetica, Arial, sans-serif"}}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
