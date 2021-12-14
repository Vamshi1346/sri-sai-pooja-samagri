import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const header = () => {
    return (
        
                <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Sri sai pooja samagri</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i>&nbsp;Cart</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                

                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    )
}

export default header
