import React from 'react'
import {Link} from "react-router-dom";
import { FiAtSign, FiUser, FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

const Contacts = () => {

  return(
    <div className='w-100 h-75 d-flex justify-content-center flex-column align-items-start main-container'>
      <div className='d-flex flex-column'>
        <div className='d-flex'>
          <h1 style={{color: '#b431f5', zIndex:400}} className='position-relative mr-3 mb-0 resume-title'>Contacts</h1>
        </div>
      </div>
      <div className='d-flex position-relative flex-column w-100'>
        <div className='d-flex align-items-start pt-5' >
          <FiUser className='mr-3 position-relative text-white resume-icon ' style={{ zIndex: 400}}/>
            <p className='text-white mb-1 position-relative resume-p' style={{zIndex: 400}} >
              Denise Moscon
            </p>
        </div>

        <div className='d-flex align-items-start pt-2' >

          <FiAtSign className='mr-3 position-relative text-white  resume-icon' style={{ zIndex: 400}}/>
          <a href='mailto:den.moscon@gmail.com' className='contact-link d-block'>
          <p className='text-white mb-1 position-relative contact-link-a resume-p' style={{ zIndex: 400}} >
            den.moscon@gmail.com
          </p>
          </a>
        </div>

        <div className='d-flex align-items-start pt-4' >
            <a href='https://github.com/CloruroDiSodio' target='_blank' className=''> <FiGithub className='mr-3 position-relative text-white contact-link-a ' style={{fontSize: 25, zIndex: 400}}/></a>
            <a href='https://www.linkedin.com/in/denisemoscon/' target='_blank' className=''> <FiLinkedin className='mr-3 position-relative text-white contact-link-a ' style={{fontSize: 25, zIndex: 400}}/></a>
            <a href='https://codepen.io/pineappleSyrup/' target='_blank' className=''> <FiCodepen className='mr-3 position-relative text-white contact-link-a ' style={{fontSize: 25, zIndex: 400}}/></a>
        </div>


      </div>
    </div>
  )
}

export default Contacts

