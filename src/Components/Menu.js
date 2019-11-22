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
        <Link to="/" className={(props.location.pathname === '/')? 'nav-item nav-link active' : 'nav-item nav-link'}>Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/resume" className={(props.location.pathname === '/resume')? 'nav-item nav-link active' : 'nav-item nav-link'}>Resume</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contacts" className={(props.location.pathname === '/contacts')? 'nav-item nav-link active' : 'nav-item nav-link'}>Contacts</Link>
      </Nav.Item>
    </Nav>
  )
}

export default withRouter(Menu)
