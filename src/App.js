import React from 'react';
import logo from './logo.svg';
import Goo from './Components/Goo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu'
import {Container} from "react-bootstrap";
import MainTitle from "./Components/MainTitle";
import Circle from "./Components/Circle";

function App() {
  return (
    <div className="App">
      <Container className='position-relative' style={{height: '100%'}} fluid>
        <Goo />
      <Menu />
      <MainTitle/>
      </Container>
      <Circle className='circle-1'/>
      <Circle className='circle-2'/>
    </div>
  );
}

export default App;
