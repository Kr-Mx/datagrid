import React from "react";

export default function TableHeading(props) {
  let tableHeadingArray = ["First Name", "Last Name", "Birth Date", "Price", "Work as", "Single", "Lucky Number"];
  let tableHeading = tableHeadingArray.map(item => {
    return (
      <th>
        <tspan className="table__heading-text">{item}</tspan>
        <tspan className="table__heading-button">⇅</tspan>
      </th>
    )
  });
  return (
    <thead>
    <tr>
      {tableHeading}
    </tr>
    </thead>
  )
}