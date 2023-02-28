import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar  expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img src="https://wpbingosite.com/wordpress/oritina/wp-content/themes/oritina/images/logo/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to='/'>
                            <Nav.Link style={{color:"black"}}  > HOME</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/shop'>
                            <Nav.Link style={{color:"black"}} >SHOP</Nav.Link>
                            </LinkContainer>
                        </Nav>
                     <div className="buttons mt-1 d-flex">
                        <div className="firstbutton d-flex">
                        <i className="fa-solid fa-heart mt-1"></i> <p>WISHLIST</p>
                        </div>
                        <div className="secondbutton  d-flex">
                        <i className="fa-solid fa-suitcase mt-1"></i>
                        <p>CART</p>
                        </div>
                     <i className="fa-solid mt-1 fa-magnifying-glass"></i>
                     
                    
                     </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header