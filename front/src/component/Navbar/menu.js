import React from "react"
import {Navbar, Nav} from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Web Template</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/map">Map</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Menu
