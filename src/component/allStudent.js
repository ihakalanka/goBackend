import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

export default function AllStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
  }, []);

  //get all student
  function getStudent() {
    axios
      .get("API")
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteStudent(id){
    axios.delete("API")
    .then((res) => {
        alert("Student Deleted");
        getStudent();
    })
    .catch((err) => {
        console.log(err);
    })
}

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
              <td>{student.indexNumber}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
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
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
