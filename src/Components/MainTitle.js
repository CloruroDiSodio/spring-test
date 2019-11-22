import React from 'react'
import {Row, Button} from "react-bootstrap";

const MainTitle = () =>
  <div className='w-100 h-75 d-flex justify-content-center flex-column align-items-start' style={{paddingLeft: 200}}>
    <div className='d-flex flex-column'>
      <div className='d-flex'>
        <h1 style={{color: 'deepskyblue', fontSize: 110, zIndex:400}} className='position-relative mr-3 mb-0'>Over</h1>
        <h1 style={{color: 'deepskyblue', fontSize: 110, zIndex:200}} className='position-relative mr-3 mb-0'>the</h1>
      </div>
      <h1 style={{color: 'deepskyblue', fontSize: 110, zIndex:400}} className='position-relative'>impossible</h1>
    </div>
    <p className='text-white py-3' style={{fontSize: 22}}>
      We make your dreams come true, just follow the white rabbit
    </p>
    <p>
      <Button variant="primary position-relative" style={{backgroundColor:'#B431F5', borderColor: '#B431F5', zIndex: 400}}>Learn more</Button>
    </p>
  </div>

export default MainTitle
