import React from "react";
import { Table } from "react-bootstrap";

export default function AllStudent() {
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
        </tbody>
      </Table>
    </div>
  );
}
