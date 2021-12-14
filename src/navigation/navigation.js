import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/pages/Home";
import Resume from "../components/pages/Resume";
import Contacts from "../components/pages/Contacts";
import Appetta from "../components/pages/Appetta/Appetta";
import Menu from "../components/atoms/Menu";
import Circle from "../components/atoms/Circle";
import {useLocation} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transitions.css'
import Goo from "../components/atoms/Goo";


const AnimatedSwitch = () => {
    const location = useLocation();
    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/resume" exact element={<Resume />}/>
                    <Route path="/contacts" exact element={<Contacts />}/>
                    <Route path="/appetta" exact element={<Appetta />}/>
                    <Route component={Home} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

const Layout = () => {
    const location = useLocation();
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    },[])
    return (
        <>
            {location.pathname === '/appetta' ? <></> : (
                <>
                    {(width > 1024 )? <Goo /> : null}
                    <Menu />
                    <Circle className='circle-1'/>
                    <Circle className='circle-2'/>
                    {(width > 1024 )? null : <Circle className='circle-3'/>}
                </>
            )}

        </>
    );
}


const Navigation = props => {


    return (
        <BrowserRouter>
            <Layout />
            <AnimatedSwitch />
        </BrowserRouter>
    );
}

export default Navigation;
