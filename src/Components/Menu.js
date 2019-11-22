import React from 'react'
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";

const Menu = (props) => {

  React.useEffect(() => console.log(props))

  return(
    <Nav
      activeKey="/home"
      className='pt-5 justify-content-end'
      style={{paddingRight: 200}}
      //onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Link to="/" className={(props.location.pathname === '/')? 'nav-item nav-link active' : 'nav-item nav-link active'}>Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contacts</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default withRouter(Menu)
