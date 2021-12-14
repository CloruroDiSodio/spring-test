import React from 'react'
import {Nav} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const Menu = (props) => {
 const {pathname} = useLocation();
  return(
    <Nav
      activeKey="/home"
      className='pt-md-5 pt-3 justify-content-md-end justify-content-center main-menu'
    >
      <Nav.Item>
        <Link to="/" className={(pathname === '/')? 'nav-item nav-link active' : 'nav-item nav-link'}>Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/resume" className={(pathname === '/resume')? 'nav-item nav-link active' : 'nav-item nav-link'}>Resume</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contacts" className={(pathname === '/contacts')? 'nav-item nav-link active' : 'nav-item nav-link'}>Contacts</Link>
      </Nav.Item>
    </Nav>
  )
}

export default Menu
