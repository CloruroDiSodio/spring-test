import React, {useEffect, useState} from 'react';
import Goo from './components/atoms/Goo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/atoms/Menu'
import {Container} from "react-bootstrap";
import Circle from "./components/atoms/Circle";
import {useLocation, HashRouter} from 'react-router-dom'
import {useTransition, animated} from 'react-spring'
import {FiRotateCcw} from 'react-icons/fi'
import Navigation from "./navigation/navigation";

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  },[])

  return (
      <div className="App">
          <div className='phone-landscape d-flex justify-content-center align-items-center flex-column'>
            <FiRotateCcw className='text-white text-center' style={{fontSize: 70}}/>
            <p className='text-white text-center pt-5' style={{fontSize: 30}}>Please, rotate your device :)</p>
          </div>
          <Container className='position-relative app-container' style={{height: '100%'}} fluid>
            {(width > 1024 )? <Goo /> : null}

            <Navigation />
          </Container>

      </div>
  );
}

export default App;
