import React, {useEffect} from "react";

export default function TableBody(props) {
  let {data} = props;
  useEffect(()=>data.setTableBody(),[]);
  let tableBody = data.tableBody.map(row => {
    return <tr>{row.map(column => {
      return <td>{column}</td>
    })}</tr>
  });
  return (
    <tbody>
    {tableBody}
    </tbody>
  )
}