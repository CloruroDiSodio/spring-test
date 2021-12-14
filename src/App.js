import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {FiRotateCcw} from 'react-icons/fi'
import Navigation from "./navigation/navigation";

function App() {

  return (
      <div className="App">
          <div className='phone-landscape d-flex justify-content-center align-items-center flex-column'>
            <FiRotateCcw className='text-white text-center' style={{fontSize: 70}}/>
            <p className='text-white text-center pt-5' style={{fontSize: 30}}>Please, rotate your device :)</p>
          </div>
          <Container className='position-relative app-container' style={{height: '100%'}} fluid>

            <Navigation />
          </Container>

      </div>
  );
}

export default App;
