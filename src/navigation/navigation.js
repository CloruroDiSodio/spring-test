import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/pages/Home";
import Resume from "../components/pages/Resume";
import Contacts from "../components/pages/Contacts";
import React, {useEffect, useState} from "react";
import Menu from "../components/atoms/Menu";
import Circle from "../components/atoms/Circle";
import {useLocation} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transitions.css'


const AnimatedSwitch = () => {
    const location = useLocation();
    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/resume" exact element={<Resume />}/>
                    <Route path="/contacts" exact element={<Contacts />}/>
                    <Route component={Home} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};


const Navigation = props => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    },[])

    return (
        <BrowserRouter>
            <Menu />
            <Circle className='circle-1'/>
            <Circle className='circle-2'/>
            {(width > 1024 )? null : <Circle className='circle-3'/>}
            <AnimatedSwitch />
        </BrowserRouter>
    );
}

export default Navigation;
