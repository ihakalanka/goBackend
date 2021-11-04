import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddStudent() {
  const [indexNumber, setIndexNumber] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addStudent = (e) => {
    e.preventDefault();

    //create an student object
    const newStudent = {
      indexNumber,
      name,
      age,
      email,
    };

    //create the post method to take frontend data to backend
    axios
      .post("API", newStudent)
      .then((res) => {
        alert("Student Added..");
        e.target.reset();
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log("Error is " + err);
      });
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h3>Student Registration Form</h3>
      <br />
      <Form onSubmit={addStudent}>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Index Number"
            onChange={(e) => {
              setIndexNumber(e.target.value);
            }}
            required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Student Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required="true"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
