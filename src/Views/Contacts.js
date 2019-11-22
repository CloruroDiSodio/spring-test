import React from 'react'
import {Link} from "react-router-dom";
import { FiAtSign, FiUser, FiGithub, FiLinkedin } from "react-icons/fi";

const Contacts = () => {

  return(
    <div className='w-100 h-75 d-flex justify-content-center flex-column align-items-start' style={{paddingLeft: 200}}>
      <div className='d-flex flex-column'>
        <div className='d-flex'>
          <h1 style={{color: '#b431f5', fontSize: 70, zIndex:400}} className='position-relative mr-3 mb-0'>Contacts</h1>
        </div>
      </div>
      <div className='d-flex position-relative flex-column w-100'>
        <div className='d-flex align-items-start pt-5' >
          <FiUser className='mr-3 position-relative text-white  ' style={{fontSize: 25, zIndex: 400}}/>
            <p className='text-white mb-1 position-relative' style={{fontSize: 18, zIndex: 400}} >
              Denise Moscon
            </p>
        </div>

        <div className='d-flex align-items-start pt-2' >

          <FiAtSign className='mr-3 position-relative text-white  ' style={{fontSize: 25, zIndex: 400}}/>
          <a href='mailto:den.moscon@gmail.com' className='contact-link d-block'>
          <p className='text-white mb-1 position-relative contact-link-a' style={{fontSize: 18, zIndex: 400}} >
            den.moscon@gmail.com
          </p>
          </a>
        </div>

        <div className='d-flex align-items-start pt-5' >
            <a href='https://github.com/CloruroDiSodio' target='_blank' className=''> <FiGithub className='mr-3 position-relative text-white contact-link-a ' style={{fontSize: 25, zIndex: 400}}/></a>
            <a href='https://github.com/CloruroDiSodio' target='_blank' className=''> <FiLinkedin className='mr-3 position-relative text-white contact-link-a ' style={{fontSize: 25, zIndex: 400}}/></a>
        </div>


      </div>
    </div>
  )
}

export default Contacts

