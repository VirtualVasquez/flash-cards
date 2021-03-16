import React from 'react';
import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'


function HomeNav(){
    return(
        <Navbar bg="dark" variant="dark" expand="xs">
        <Navbar.Brand href="#home">FlashCards</Navbar.Brand>
        <Nav.Item className="justify-content-end">
            <Button variant="danger">Logout</Button>
        </Nav.Item>
        </Navbar>
    )
}
    
export default HomeNav; 