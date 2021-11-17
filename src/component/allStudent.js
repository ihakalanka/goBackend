import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

export default function AllStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
  }, []);


 

  
 

  return (
    <div className="container">
      <br />
      <h3>All Students</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>index Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.e_mail}</td>
              {/* <td>
                <Button variant="info" type="edit" onClick={updateStudent}>
                  Edit
                </Button>
              </td> */}
              <td>
                <Button
                  variant="danger"
                  type="delete"
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "Do you really want to delete " + student.name
                    );
                    if (confirmBox === true) {
                      deleteStudent(student.id);
                    }
                  }}
                >
                  
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
