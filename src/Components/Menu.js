import React from 'react'
import {Nav} from "react-bootstrap";

const Menu = () => {
  return(
    <Nav
      activeKey="/home"
      className='pt-5 justify-content-end'
      style={{paddingRight: 200}}
      //onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">What we do</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Team</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Menu
