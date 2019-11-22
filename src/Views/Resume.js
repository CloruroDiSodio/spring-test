import React from 'react'
import {Link} from "react-router-dom";
import { FiBookOpen, FiBriefcase, FiCode } from "react-icons/fi";

const Resume = () => {

  return(
    <div className='w-100 h-75 d-flex justify-content-center flex-column align-items-start' style={{paddingLeft: 200}}>
      <div className='d-flex flex-column'>
        <div className='d-flex'>
          <h1 style={{color: '#b431f5', fontSize: 70, zIndex:400}} className='position-relative mr-3 mb-0'>Resume</h1>
        </div>
      </div>
     <div className='d-flex position-relative flex-column w-100'>
       <div className='d-flex align-items-start pt-5' >
         <FiBookOpen className='mr-3 position-relative text-white mt-1 ' style={{fontSize: 25, zIndex: 400}}/>
         <div className='d-flex flex-column text-white position-relative' style={{fontSize: 18, zIndex: 400}}>
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
         <FiBriefcase className='mr-3 position-relative text-white mt-1 ' style={{fontSize: 25, zIndex: 400}}/>
         <div className='d-flex flex-column text-white position-relative' style={{fontSize: 18, zIndex: 400}}>
           <p className='text-white  mb-1 font-weight-bold' >
             Happybrain (Verona, Italy)
           </p>
           <p  className='text-white  mb-0'>
             React and React Native Developer
           </p>
           <p  className='text-white mb-0'>
             06/2019 - Now
           </p>
         </div>
       </div>
       <div className='d-flex align-items-start pt-5' >
         <FiCode className='mr-3 position-relative text-white mt-1 ' style={{fontSize: 25, zIndex: 400}}/>
         <div className='d-flex flex-column text-white position-relative' style={{fontSize: 18, zIndex: 400}}>
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
