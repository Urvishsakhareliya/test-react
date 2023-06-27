import { Table } from "react-bootstrap";

import React from "react";

  export default function TableDATA() {
    const users = [
      {
        name: "Harsh",
        Email: "harsh@gmail.com",
        Number: "178 74272 154",
        status: "true",
      },
      {
        name: "Varshil",
        Email: "varshil@gmail.com",
        Number: "527381 5483",
        status: "false",
      },
      { name: "Om", Email: "om@gmail.com", Number: "1458 68661", status: "true" },
      {
        name: "Ronik",
        Email: "ronik@gmail.com",
        Number: "145842368 154",
        status: "false",
      },
    ];
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>number</th>
            <th>Status</th>
          </tr>
          {users.map((item, i) =>
            item.status == "true" ? (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.Email}</td>
                <td>{item.Number}</td>
                <td>{item.status}</td>
              </tr>
            ) :  <tr key={i}>
            <td>{i}</td>
            <td>{item.name}</td>
            <td>{item.Email}</td>
            <td>{item.Number}</td>
            <td>{item.status}</td>
          </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
