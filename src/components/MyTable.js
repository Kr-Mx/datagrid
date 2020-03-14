import React, {useEffect} from "react";
import SortButtons from "./SortButtons";
import Checkbox from 'react-three-state-checkbox';

export default function MyTable(props) {
  let {data} = props;
  useEffect(() => data.setTable(), []);

  let tableHeadingArray = ["First Name", "Last Name", "Death Date", "Cost", "Work as", "Accident", "ID Number"];

  let tableHeading = tableHeadingArray.map((item, index) => {
      return (
        <th key={index}
            onClick={() => {
              data.selectColumn(index)
            }}
            style={(index === data.currentColumn) ? {backgroundColor: "#43494e"} : null}>
          <span className="table__heading-text">{item}</span>
          <input
            type="text"
            name="text-filter"
            value={(index === data.currentColumn) ? data.filterData : null}
            placeholder="Filter here..."
            onBlur={() => data.cleanInput()}
            onChange={(e) => data.filterTable(e.target.value)}/>
          <SortButtons data={data}/>
          {(index === 5) ?
            <Checkbox
            checked={false}
            indeterminate={true}
          /> : null}
        </th>
      )
    }
  );

  let tableBody = data.tableBody.map((row, index) => {
    return (
      <tr key={index}>
        {row.map((column, index) => {
          return (
            <td key={index} style={(index === data.currentColumn) ? {backgroundColor: "#43494e"} : null}>
              {(index === 5)?((column)?<p>+</p>:<p>-</p>):column}
            </td>
          )
        })}
      </tr>
    )
  });

  return (
    <>
      <input
        type="checkbox"
        name="filter-all"
        checked={data.isFilterAll}
        onClick={() => {
          data.filterAllTable()
        }}/>

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