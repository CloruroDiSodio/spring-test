import React, {useEffect, useState} from 'react';
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
import Resume from "./Views/Resume";
import Contacts from "./Views/Contacts";


const Content = props => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, position: 'absolute', top:20, right: 0, width: '100%', height: '100%'},
    enter: { opacity: 1, top:0 },
    leave: { opacity: 0, top:20},
  })
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route path="/" exact component={Home}/>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/contacts" exact component={Contacts}/>
        <Route component={Home} />
      </Switch>
    </animated.div>))

}

const App = () =>  {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  },[])

  return (
    <div className="App">
      <HashRouter>
      <Container className='position-relative app-container' style={{height: '100%'}} fluid>
        {(width > 1024 )? <Goo /> : null}
        <Menu />
        <Content />
      </Container>
      <Circle className='circle-1'/>
      <Circle className='circle-2'/>
        {(width > 1024 )? null : <Circle className='circle-3'/>}
      </HashRouter>
    </div>
  );
}

export default App;
