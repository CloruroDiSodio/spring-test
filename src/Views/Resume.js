import React from 'react'
import {Link} from "react-router-dom";
import { FiBookOpen, FiBriefcase, FiCode, FiUser } from "react-icons/fi";
import {Col} from "react-bootstrap";

const Resume = () => {

  return(
    <div className='w-100 h-100 d-flex justify-content-center flex-column align-items-start main-container resume row'>
      <div className='d-flex flex-column'>
        <div className='d-flex'>
          <h1 style={{color: '#ACE900', zIndex:400}} className='position-relative mr-3 mb-0 resume-title'>Resume</h1>
        </div>
      </div>
     <div className='row position-relative w-100 align-items-start justify-content-start'>
       <Col md='5'>
       <div className='d-flex align-items-start pt-5' >
         <FiUser className='mr-3 position-relative text-white mt-1 resume-icon' style={{ zIndex: 400}}/>
         <div className='d-flex flex-column text-white position-relative resume-p' style={{ zIndex: 400}}>
           <p className='text-white mb-1 font-weight-bold' >
             Denise Moscon
           </p>
           <p  className='text-white  mb-0'>
             25 yo
           </p>
           <p  className='text-white  mb-0'>
             Front-end Developer
           </p>
           <p  className='text-white mb-0'>
             Web enthusiast, pathological curious,
             bulimic reader, oddities lover
           </p>
         </div>
       </div>



       <div className='d-flex align-items-start pt-5' >
         <FiBookOpen className='mr-3 position-relative text-white mt-1 resume-icon' style={{zIndex: 400}}/>
         <div className='d-flex flex-column text-white position-relative resume-p' style={{zIndex: 400}}>
            <p className='text-white mb-1 font-weight-bold' >
             Scuola Internazionale di Comics (Padova, Italy)
             </p>
             <p  className='text-white  mb-0'>
             Graphic and web design, web development
             </p>
             <p  className='text-white mb-0'>
             2016 - 2019
           </p>
       </div>
       </div>

       <div className='d-flex align-items-start pt-5' >
         <FiBriefcase className='mr-3 position-relative text-white mt-1 resume-icon' style={{zIndex: 400}}/>
         <div className='d-flex flex-column text-white position-relative resume-p' style={{zIndex: 400}}>
           <p className='text-white  mb-1 font-weight-bold' >
             Happy Brain (Verona, Italy)
           </p>
           <p  className='text-white  mb-0'>
             React and React Native Developer
           </p>
           <p  className='text-white mb-0'>
             06/2019 - Now
           </p>
         </div>
       </div>
       </Col>


       <div className='d-flex align-items-start pt-5 col-md-5' >
         <FiCode className='mr-3 position-relative text-white mt-1 resume-icon' style={{zIndex: 400}}/>
         <div className='d-flex flex-column text-white position-relative resume-p' style={{ zIndex: 400}}>
           <p className='text-white  mb-0 font-weight-bold' >
             Skills
           </p>
           <p  className='text-white  mb-1 '>
             React, React Native, Redux
           </p>
           <p  className='text-white mb-0'>
             HTML5 (Canvas, SVG), CSS3, Javascript (ES6)
           </p>
           <p  className='text-white mb-0'>
             Rest API
           </p>
           <p  className='text-white mb-0'>
             Bootstrap, GSAP, Jquery and more libraries
           </p>
           <p  className='text-white mb-0'>
             Git, npm, yarn, composer, parcel, webpack
           </p>
           <p  className='text-white mb-0'>
             PHP, Laravel (basic knowledge)
           </p>
         </div>
       </div>




     </div>
    </div>
  )
}

export default Resume
