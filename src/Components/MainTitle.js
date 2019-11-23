import React from 'react'
import {Link} from "react-router-dom";
import { FiMapPin } from "react-icons/fi";


const MainTitle = (props) =>
  <div className='w-100 h-75 d-flex justify-content-center flex-column align-items-start main-container home'>
    <div className='d-flex flex-column'>
      <div className='d-flex'>
        <h1 style={{color: 'deepskyblue', zIndex:400}} className='position-relative mr-3 mb-0 main-title'>Make</h1>
        <h1 style={{color: 'deepskyblue', zIndex:200}} className='position-relative mr-3 mb-0 main-title'>it</h1>
      </div>
      <h1 style={{color: 'deepskyblue', zIndex:400}} className='position-relative main-title'>Happen</h1>
    </div>
    <div className='d-flex flex-md-row flex-column'>
    <p className='text-white pt-3 pr-2 main-p mb-0'>
      Denise Moscon -
    </p>
      <p className='text-white pt-md-3 position-relative main-p' style={{ zIndex: 400}}>
       Front-End Developer
      </p>
    </div>
    <div className='d-flex align-items-center pb-3' >
    <FiMapPin className='mr-1 position-relative text-white mb-1 main-based' style={{zIndex: 400}}/>
    <p className='text-white  position-relative mb-0 main-based' style={{ zIndex: 400}}>
      Based in Verona, Italy
    </p>
    </div>
    <p>
      <Link className="btn btn-primary position-relative" to='/resume' style={{backgroundColor:'#B431F5', borderColor: '#B431F5', zIndex: 400}}>Resume</Link>
    </p>
  </div>

export default MainTitle
