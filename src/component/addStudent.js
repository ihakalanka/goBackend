import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function AddStudent(){
    return(
        <Container>
            <br/><br/><br/>
            <h3>Student Registration Form</h3>
            <br/>
        <Form>
  <Form.Group className="mb-3">
    <Form.Control type="number" placeholder="Index Number" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="text" placeholder="Student Name" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="number" placeholder="Age" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
    );
}