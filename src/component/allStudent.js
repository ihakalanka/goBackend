import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function AllStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
  }, [])

  function getStudent(){
    axios.get("/api/getData")
    .then((res) => {
      console.log(res.data);
      setStudent(res.data);
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
           
          </tr>
             <tr>
            <td>2</td>
            <td>new</td>
            <td>Otto</td>
            <td>@mdo</td>
           
          </tr>
        </tbody>
      </Table>
    </div>
  );
}