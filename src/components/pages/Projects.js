import React from 'react';

export default function Projects() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
    <div className="container px-0 py-5" id="custom-cards">
    <h2 className="pb-2">Projects</h2>
    <div className='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5'>
      <div className='col'>
        <div className='card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg'>
          <img src='https://i.imgur.com/WqMbGiS.png'></img>
        <div className='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'>
            <h2 className='pt-0 mt-3 mb-4 display-7 lh-1'><a href='https://github.com/BrandtDavidson/interactive-stock' style={{ textDecoration: 'none'}}>Market Moment</a></h2>
        </div>
        </div>
      </div>
      <div className='col'>
        <div className='card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg'>
          <img src='https://i.imgur.com/jRergFW.png'></img>
        <div className='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'>
            <h2 className='pt-0 mt-3 mb-4 display-7 lh-1'><a href='https://github.com/BrandtDavidson/Social-Network-API--MongoDB' style={{ textDecoration: 'none'}}>Social Network API</a></h2>
        </div>
        </div>
      </div>
      <div className='col'>
        <div className='card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg'>
          <img src='https://i.imgur.com/BZKqLkE.png'></img>
        <div className='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'>
            <h2 className='pt-0 mt-3 mb-4 display-7 lh-1'><a href='https://github.com/BrandtDavidson/Social-Network-API--MongoDB' style={{ textDecoration: 'none'}}>ZR-1-Stop Shops</a></h2>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
