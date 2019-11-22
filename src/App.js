import React from 'react';
import logo from './logo.svg';
import Goo from './Components/Goo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu'
import {Container} from "react-bootstrap";

function App() {
  return (
    <>
    <Goo />
    <div className="App">
      <Container className='position-relative' style={{zIndex: 100}}>
      <Menu />
      </Container>
    </div>
      </>
  );
}

export default App;
