import React, {useEffect} from "react";
import SortButtons from "./SortButtons";

export default function MyTable(props) {
  let {data} = props;
  useEffect(() => data.setTable(), []);

  let tableHeadingArray = ["First Name", "Last Name", "Death Date", "Cost", "Work as", "Accident", "ID Number"];

  let tableHeading = tableHeadingArray.map((item, index) => {
    return (
      <th key={index} onClick={() => {
        data.selectColumn(index);
      }} style={(index === data.currentColumn)?{backgroundColor: "#43494e"}:null}>
        <span className="table__heading-text">{item}</span>
        <SortButtons data={data}/>
      </th>)
  });

  let tableBody = data.tableBody.map((row,index) => {
    return <tr key={index}>{row.map((column, index) => {
      return <td key={index} style={(index === data.currentColumn)?{backgroundColor: "#43494e"}:null}>{column}</td>
    })}</tr>
  });

  return (
    <>
      <thead>
      <tr>
        {tableHeading}
      </tr>
      </thead>
      <tbody>
      {tableBody}
      </tbody>
    </>
  )
}