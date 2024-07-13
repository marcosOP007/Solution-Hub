import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import '../style/navbar.css'
const navbar = () => {
  return (
    <Navbar  variant="dark" expand="lg"  className="justify-content-between bg-nv">
      <Container >
        <Navbar.Brand href="#home"><strong>ProblemSolve</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Form className="w-50  d-flex justify-content-center bg-white">
        <link  rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"/>
        <i  class="fas fa-search h4 text-body sm" ></i>
       
            <FormControl size="sm"
              type="search"
              placeholder="Enter problem title, description, platform, or tags"
              className="me-2"
              
              aria-label="Search"
            />
            
          </Form>

      </Container>

      <Container>
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
         
          <Nav className="ml-auto">
            <Nav.Link href="#home">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/471/471664.png"
                alt="Question Mark"
                width="20"
                height="20"
              />
            </Nav.Link>
            <Nav.Link href="#link">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1827/1827312.png"
                alt="Bell"
                width="20"
                height="20"
              />
            </Nav.Link>
            <Nav.Link href="#link">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png"
                alt="Settings"
                width="20"
                height="20"
              />
            </Nav.Link>
            <Nav.Link href="#link">
              <Image
                src="https://i.pravatar.cc/300"
                alt="Profile"
                roundedCircle
                width="30"
                height="30"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
