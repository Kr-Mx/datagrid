import React from "react";
import faker from 'faker';
import {Table} from "react-bootstrap";

export default function Tablet(props) {
  let tableHeadingArray = ["First Name", "Last Name", "Birth Date", "Price", "Work as", "Single", "Lucky Number"];

  let tableHeading = tableHeadingArray.map(item => {
    return <th>{item}</th>
  });
  let tableData = () => {
    let result = [];
    for (let i = 0; i < 1001; i++) {
      let tableRowDataArray = [faker.name.firstName(), faker.name.lastName(), `${faker.date.past().getFullYear()}`,
        faker.commerce.price().toLocaleString(), `${faker.name.jobDescriptor()} ${faker.name.jobArea()} ${faker.name.jobType()}`,
        (Math.random() - 0.5 > 0) ? "true" : "false", (Math.random() * Date.now()).toFixed(0)
      ];
      result.push(
        tableRowDataArray
      )
    }
    return result
  };
  let tableBody = tableData()
    .map(row => {
      return <tr>{row.map(col => {
        return <td>{col}</td>
      })}</tr>
    });
  return (
    <Table bordered hover variant="dark" style={{textAlign: "center"}}>
      <thead>
      <tr>
        {tableHeading}
      </tr>
      </thead>
      <tbody>
      {tableBody}
      </tbody>
    </Table>
  )
}