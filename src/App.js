import React from 'react';
import logo from './logo.svg';
import Goo from './Components/Goo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu'
import {Container} from "react-bootstrap";
import MainTitle from "./Components/MainTitle";
import Circle from "./Components/Circle";
import Home from "./Views/Home";
import {Switch, Route, useLocation, HashRouter} from 'react-router-dom'
import {useTransition, animated} from 'react-spring'


const Content = props => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, position: 'absolute', top:0, right: 0, width: 'calc(100% -  225px)', height: '100%'},
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/" exact component={Home}/>
        <Route component={Home} />
      </Switch>
    </animated.div>))

}

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Container className='position-relative' style={{height: '100%'}} fluid>
        <Goo />
        <Menu />
        <Content />
      </Container>
      <Circle className='circle-1'/>
      <Circle className='circle-2'/>
      </HashRouter>
    </div>
  );
}

export default App;
