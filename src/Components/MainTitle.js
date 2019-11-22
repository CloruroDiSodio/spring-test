import React from 'react'
import {Link} from "react-router-dom";
import { FiMapPin } from "react-icons/fi";


const MainTitle = (props) =>
  <div className='w-100 h-75 d-flex justify-content-center flex-column align-items-start' style={{paddingLeft: 200}}>
    <div className='d-flex flex-column'>
      <div className='d-flex'>
        <h1 style={{color: 'deepskyblue', fontSize: 110, zIndex:400}} className='position-relative mr-3 mb-0'>Over</h1>
        <h1 style={{color: 'deepskyblue', fontSize: 110, zIndex:200}} className='position-relative mr-3 mb-0'>the</h1>
      </div>
      <h1 style={{color: 'deepskyblue', fontSize: 110, zIndex:400}} className='position-relative'>impossible</h1>
    </div>
    <div className='d-flex'>
    <p className='text-white pt-3 pr-2' style={{fontSize: 22}}>
      Denise Moscon -
    </p>
      <p className='text-white pt-3 position-relative' style={{fontSize: 22, zIndex: 400}}>
       Front-End Developer
      </p>
    </div>
    <div className='d-flex align-items-center pb-3' >
    <FiMapPin className='mr-1 position-relative text-white mb-1' style={{fontSize: 18, zIndex: 400}}/>
    <p className='text-white  position-relative mb-0' style={{fontSize: 18, zIndex: 400}}>
      Based in Verona, Italy
    </p>
    </div>
    <p>
      <Link className="btn btn-primary position-relative" to='/resume' style={{backgroundColor:'#B431F5', borderColor: '#B431F5', zIndex: 400}}>Resume</Link>
    </p>
  </div>

export default MainTitle
