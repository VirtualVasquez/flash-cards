import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';

import {AuthContext} from '../context/auth'

import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'


function HomeNav(){
    const {user, logout} = useContext(AuthContext);

    return(
        <Navbar bg="dark" variant="dark" expand="xs">
        <Navbar.Brand href="#home">FlashCards</Navbar.Brand>
        <Nav.Item className="justify-content-end">
            <Button variant="danger"
                name="logout"
                onClick={logout}
            >Logout</Button>
        </Nav.Item>
        </Navbar>
    )
}
    
export default HomeNav; 