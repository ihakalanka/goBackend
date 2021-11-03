import React from "react";
import {Nav,Container,Navbar} from 'react-bootstrap';


export default function NavBar(){
return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">All Student</Nav.Link>
      <Nav.Link href="/addStudent">Add Student</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
  </>


);
}